"use client";

import { useRef, useCallback, useEffect } from "react";

// Unique DITM Cloud Architecture Matrix Pattern (Custom designed, distinct from any other site)
const MATRIX = [
  // Row 0: Cloud Edge Gateway Layer
  [0, 0, 0.42, 0.48, 0.52, 0, 0.44, 0.5],
  // Row 1: Distributed VPC Subnet Layer
  [0, 0.38, 0.46, 0, 0.5, 0.48, 0.44, 0],
  // Row 2: Microservices Compute Lattice
  [0.36, 0.44, 0, 0.48, 0.52, 0, 0.46, 0.5],
  // Row 3: Serverless Event Mesh
  [0, 0.42, 0.48, 0.44, 0, 0.5, 0.46, 0],
  // Row 4: Intelligent Data Fabric
  [0.4, 0, 0.46, 0.5, 0.48, 0.44, 0, 0.46],
  // Row 5: Global Mesh Connectivity
  [0.38, 0.46, 0, 0.48, 0, 0.46, 0.5, 0.44],
  // Row 6: Core Infrastructure Hub (Cols 4..7: DITM Chapter Brandmark Banner)
  [0, 0.4, 0.48, 0.52, 0, 0, 0, 0],
  // Row 7: Deep Storage Anchor Foundation
  [0, 0, 0.42, 0, 0.48, 0, 0, 0.44],
];

// Flat list of 64 cells
const CELLS = [];
MATRIX.forEach((row, r) => {
  row.forEach((outlineAlpha, c) => {
    CELLS.push({
      id: `${r}-${c}`,
      r,
      c,
      outlineAlpha,
      isPattern: outlineAlpha > 0,
    });
  });
});

export default function HeroGrid() {
  const gridRef = useRef(null);
  const cellRefs = useRef({});
  const brandmarkRef = useRef(null);
  const lastRowRef = useRef(-1);
  const lastColRef = useRef(-1);
  const pointerFrameRef = useRef(null);
  const latestPointerRef = useRef(null);

  // Clear all filled states back to resting outline
  const clearAll = useCallback(() => {
    if (lastRowRef.current === -1 && lastColRef.current === -1) return;
    lastRowRef.current = -1;
    lastColRef.current = -1;

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (r === 6 && c >= 4) continue;
        const el = cellRefs.current[`${r}-${c}`];
        if (el) {
          el.classList.remove("is-filled", "is-leading");
        }
      }
    }

    if (brandmarkRef.current) {
      brandmarkRef.current.classList.remove("is-filled", "is-leading");
    }
  }, []);

  // Fills ONLY the horizontal line (row) where cursor is, nothing extra below or above
  const handlePointer = useCallback(
    (clientX, clientY) => {
      if (!gridRef.current) return;
      const rect = gridRef.current.getBoundingClientRect();

      // Outside grid boundaries -> clear all
      if (
        clientX < rect.left ||
        clientX > rect.right ||
        clientY < rect.top ||
        clientY > rect.bottom
      ) {
        clearAll();
        return;
      }

      // Relative coordinates [0.0, 1.0]
      const relX = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const relY = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));

      const cursorCol = Math.min(7, Math.floor(relX * 8));
      const cursorRow = Math.min(7, Math.floor(relY * 8));

      // Skip redundant DOM mutations if cursor is on the exact same cell
      if (
        cursorRow === lastRowRef.current &&
        cursorCol === lastColRef.current
      ) {
        return;
      }

      const prevRow = lastRowRef.current;
      lastRowRef.current = cursorRow;
      lastColRef.current = cursorCol;

      // Clear the previous row if cursor moved vertically to a new line
      if (prevRow !== -1 && prevRow !== cursorRow) {
        for (let c = 0; c < 8; c++) {
          if (prevRow === 6 && c >= 4) continue;
          const prevEl = cellRefs.current[`${prevRow}-${c}`];
          if (prevEl) {
            prevEl.classList.remove("is-filled", "is-leading");
          }
        }
        if (prevRow === 6 && brandmarkRef.current) {
          brandmarkRef.current.classList.remove("is-filled", "is-leading");
        }
      }

      // Ensure all other rows (above & below) are strictly empty
      for (let r = 0; r < 8; r++) {
        if (r === cursorRow) continue;
        for (let c = 0; c < 8; c++) {
          if (r === 6 && c >= 4) continue;
          const el = cellRefs.current[`${r}-${c}`];
          if (el) {
            el.classList.remove("is-filled", "is-leading");
          }
        }
      }

      // Update ONLY the active horizontal line (cursorRow)
      for (let c = 0; c < 8; c++) {
        if (cursorRow === 6 && c >= 4) continue; // Brandmark handled separately
        if (MATRIX[cursorRow][c] === 0) continue; // Empty slot

        const el = cellRefs.current[`${cursorRow}-${c}`];
        if (!el) continue;

        if (c < cursorCol) {
          el.classList.add("is-filled");
          el.classList.remove("is-leading");
        } else if (c === cursorCol) {
          el.classList.add("is-filled", "is-leading");
        } else {
          // c > cursorCol: empties as cursor moves backward horizontally
          el.classList.remove("is-filled", "is-leading");
        }
      }

      // Brandmark banner update (only active when cursor is on row 6)
      if (brandmarkRef.current) {
        if (cursorRow === 6 && cursorCol >= 4) {
          if (cursorCol >= 6) {
            brandmarkRef.current.classList.add("is-filled", "is-leading");
          } else {
            brandmarkRef.current.classList.add("is-filled");
            brandmarkRef.current.classList.remove("is-leading");
          }
        } else {
          brandmarkRef.current.classList.remove("is-filled", "is-leading");
        }
      }
    },
    [clearAll]
  );

  // Process only the latest pointer position once per animation frame.
  // This keeps the fill animation fluid even when the pointer emits many events.
  const schedulePointer = useCallback(
    (clientX, clientY) => {
      latestPointerRef.current = { clientX, clientY };

      if (pointerFrameRef.current !== null) return;

      pointerFrameRef.current = window.requestAnimationFrame(() => {
        pointerFrameRef.current = null;
        const pointer = latestPointerRef.current;
        if (pointer) handlePointer(pointer.clientX, pointer.clientY);
      });
    },
    [handlePointer]
  );

  const cancelScheduledPointer = useCallback(() => {
    if (pointerFrameRef.current !== null) {
      window.cancelAnimationFrame(pointerFrameRef.current);
      pointerFrameRef.current = null;
    }
    latestPointerRef.current = null;
    clearAll();
  }, [clearAll]);

  useEffect(() => {
    return () => {
      if (pointerFrameRef.current !== null) {
        window.cancelAnimationFrame(pointerFrameRef.current);
      }
      lastRowRef.current = -1;
      lastColRef.current = -1;
    };
  }, []);

  return (
    <div
      className="hero-grid-wrapper"
      aria-hidden="true"
      onPointerMove={(e) => schedulePointer(e.clientX, e.clientY)}
      onPointerLeave={cancelScheduledPointer}
      onTouchMove={(e) => {
        if (e.touches && e.touches[0]) {
          schedulePointer(e.touches[0].clientX, e.touches[0].clientY);
        }
      }}
      onTouchEnd={cancelScheduledPointer}
    >
      {/* Subtle ambient backdrop */}
      <div className="hero-grid-aurora">
        <div className="aurora-orb aurora-orb-emerald"></div>
        <div className="aurora-orb aurora-orb-cyan"></div>
      </div>

      <div className="hero-grid" ref={gridRef}>
        {CELLS.map((cell) => {
          if (cell.r === 6 && cell.c >= 4) return null;

          const isPattern = cell.isPattern;

          return (
            <div
              key={cell.id}
              ref={(el) => {
                if (el) cellRefs.current[cell.id] = el;
              }}
              className={`grid-cell ${isPattern ? "type-dark-green" : "type-empty"}`}
              style={{
                borderColor: isPattern ? `rgba(0, 210, 106, ${cell.outlineAlpha})` : undefined,
              }}
            >
              {isPattern && <span className="cell-node-dot" aria-hidden="true" />}
            </div>
          );
        })}

        {/* AWS Student Builder Group Brandmark Tile at row 7, cols 5-8 */}
        <div
          ref={brandmarkRef}
          className="hero-brandmark-container"
        >
          <img
            src="/assets/brandmark-3iW-38h-.png"
            alt="AWS Student Builder Group"
            className="hero-brandmark-img"
          />
        </div>
      </div>
    </div>
  );
}
