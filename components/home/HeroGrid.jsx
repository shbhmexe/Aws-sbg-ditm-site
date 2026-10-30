"use client";

import { useEffect, useState } from "react";

/* Self-playing Snake on the 8x8 hero grid: it steers toward the food,
   eats it, grows, and restarts the cycle once it gets long or trapped.
   The initial state is deterministic so server + first client render
   match (no hydration mismatch); movement starts after mount. */

const GRID = 8;
const TICK_MS = 400;
const MAX_LEN = 16;

const INITIAL = {
  snake: [{ x: 3, y: 4 }, { x: 2, y: 4 }, { x: 1, y: 4 }],
  dir: { x: 1, y: 0 },
  food: { x: 6, y: 2 },
};

const DIRS = [{ x: 1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: -1 }];
const key = (x, y) => `${x},${y}`;
const inBounds = (x, y) => x >= 0 && x < GRID && y >= 0 && y < GRID;

function randomFood(blocked) {
  const free = [];
  for (let y = 0; y < GRID; y++) {
    for (let x = 0; x < GRID; x++) {
      if (!blocked.has(key(x, y))) free.push({ x, y });
    }
  }
  return free.length ? free[Math.floor(Math.random() * free.length)] : null;
}

function restart() {
  const snake = INITIAL.snake.map((p) => ({ ...p }));
  const blocked = new Set(snake.map((p) => key(p.x, p.y)));
  return { snake, dir: { ...INITIAL.dir }, food: randomFood(blocked) || { ...INITIAL.food } };
}

function step(state) {
  const { snake, dir, food } = state;
  const head = snake[0];
  // the tail cell frees up as the snake moves, so it's walkable
  const blocked = new Set(snake.slice(0, -1).map((s) => key(s.x, s.y)));
  const safeAt = (x, y) => inBounds(x, y) && !blocked.has(key(x, y));

  const cands = DIRS.filter((d) => !(d.x === -dir.x && d.y === -dir.y));
  const safe = cands.filter((d) => safeAt(head.x + d.x, head.y + d.y));
  if (safe.length === 0) return restart();

  const dist = (x, y) => Math.abs(x - food.x) + Math.abs(y - food.y);
  const freedom = (x, y) => DIRS.reduce((n, d) => n + (safeAt(x + d.x, y + d.y) ? 1 : 0), 0);
  safe.sort((a, b) => {
    const ax = head.x + a.x, ay = head.y + a.y, bx = head.x + b.x, by = head.y + b.y;
    const adead = freedom(ax, ay) > 0 ? 0 : 1, bdead = freedom(bx, by) > 0 ? 0 : 1;
    if (adead !== bdead) return adead - bdead;        // avoid boxing itself in
    const ad = dist(ax, ay), bd = dist(bx, by);
    if (ad !== bd) return ad - bd;                    // head toward the food
    return freedom(bx, by) - freedom(ax, ay);         // else keep options open
  });

  const nd = safe[0];
  const nh = { x: head.x + nd.x, y: head.y + nd.y };
  const ate = food && nh.x === food.x && nh.y === food.y;
  if (ate) {
    const grown = [nh, ...snake];
    if (grown.length >= MAX_LEN) return restart();
    return { snake: grown, dir: nd, food: randomFood(new Set(grown.map((p) => key(p.x, p.y)))) || food };
  }
  return { snake: [nh, ...snake.slice(0, -1)], dir: nd, food };
}

export default function HeroGrid() {
  const [state, setState] = useState(INITIAL);

  useEffect(() => {
    const mq = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq && mq.matches) return; // honor reduced-motion: leave the grid static
    const id = setInterval(() => setState((prev) => step(prev)), TICK_MS);
    return () => clearInterval(id);
  }, []);

  const segIndex = new Map();
  state.snake.forEach((s, i) => segIndex.set(key(s.x, s.y), i));
  const foodKey = state.food ? key(state.food.x, state.food.y) : null;
  const len = state.snake.length;

  const cells = [];
  for (let i = 0; i < GRID * GRID; i++) {
    const x = i % GRID, y = Math.floor(i / GRID), k = key(x, y);
    if (k === foodKey) {
      cells.push(
        <div key={i} className="grid-cell snake-food">
          <img className="snake-food-logo" src="/assets/aws-logo.svg" alt="AWS" />
        </div>
      );
    } else if (segIndex.has(k)) {
      const idx = segIndex.get(k);
      if (idx === 0) {
        cells.push(<div key={i} className="grid-cell snake-head"></div>);
      } else {
        cells.push(
          <div key={i} className="grid-cell snake-body" style={{ opacity: (0.9 - (idx / len) * 0.45).toFixed(3) }}></div>
        );
      }
    } else {
      cells.push(<div key={i} className="grid-cell type-empty"></div>);
    }
  }

  return (
    <div className="hero-grid-wrapper">
      <div className="hero-grid">
        {cells}
      </div>
    </div>
  );
}
