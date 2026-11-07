'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import ShapeWaves from './ShapeWaves';
import GhostFibers from './GhostFibers';
import CRTWarp from './CRTWarp';
import LightTunnel from './LightTunnel';
import GradientASCII from './GradientASCII';

const WALLPAPER_MODES = ['shape', 'ghost', 'crt', 'tunnel', 'ascii'];

function randomWallpaperMode(excludeMode) {
  const availableModes = excludeMode
    ? WALLPAPER_MODES.filter((mode) => mode !== excludeMode)
    : WALLPAPER_MODES;

  return availableModes[Math.floor(Math.random() * availableModes.length)];
}

export default function EventWallpaper() {
  const [mode, setMode] = useState('ghost');
  const pathname = usePathname();

  useEffect(() => {
    setMode(randomWallpaperMode());

    const interval = window.setInterval(() => {
      setMode((currentMode) => randomWallpaperMode(currentMode));
    }, 60_000);

    return () => window.clearInterval(interval);
  }, [pathname]);

  return (
    <>
      <div className="event-detail-live-wallpaper" aria-hidden="true">
        {mode === 'shape' && (
          <ShapeWaves
            text="</>"
            fontFamily='Geist, "Geist Sans", system-ui, sans-serif'
            fontWeight={500}
            textSize={0.6}
            shapes="mixed"
            cellSize={10}
            dotSize={0.75}
            color="#929292"
            hoverColor="#ffffff"
            backgroundColor="#120f17"
            speed={1}
            scale={1}
            contrast={1}
            brightness={0.4}
            flow={0}
            direction={0}
            fade={0.25}
            interactive
            splashRadius={40}
            splashStrength={0.4}
            glow={0.35}
            intro
            introDuration={1.6}
            paused={false}
          />
        )}
        {mode === 'ghost' && (
          <GhostFibers
            glowColor="#8b5cf6"
            layers={3}
            twist={1.2}
            threads={72}
            fiberStyle="dots"
            depthOfField={0.85}
            hoverEffect="focus"
            intro
            mouseInteraction
            lineColor="#dfd1fc"
            secondaryColor="#6f4ac5"
            gradient="depth"
            waves={1}
            volume={0.7}
            spread={1}
            scale={1}
            rotation={18}
            perspective={0.65}
            density={1}
            thickness={1}
            tips={0}
            foldGlow={1}
            speed={0.5}
            flow={0.4}
            rollSpeed={0.15}
            focusDepth={0}
            particles={0.5}
            sparkle={0.5}
            glow={0.8}
            brightness={1}
            vignette={0.3}
            grain={0.06}
            mouseStrength={1}
            pulseOnClick
            lightMode={false}
          />
        )}
        {mode === 'crt' && (
          <CRTWarp
            color="#c755f7"
            backgroundColor="#120f17"
            mask="aperture"
            curvature={0.25}
            persistence={0.4}
            lightMode={false}
            speed={0.5}
            variation={0}
            waveAmplitude={0.3}
            waveFrequency={2.5}
            levels={3}
            columns={80}
            corners={0}
            scanlineStrength={0.6}
            scanlineFrequency={200}
            maskStrength={0.3}
            bloom={1.5}
            bloomRadius={1}
            rgbShift={0.003}
            noise={0.1}
            flicker={0.15}
            interference={0.2}
            vignette={0.3}
            brightness={1}
            intro
            mouseReact
            mouseStrength={0.5}
            changeOnClick
            dpr={2}
            paused={false}
            style={{ width: '100%', height: '100%' }}
          />
        )}
        {mode === 'tunnel' && (
          <LightTunnel
            cableColor="#ffffff"
            pulseColor="#ffffff"
            cableCount={56}
            pulseDensity={0.5}
            flowDirection="inward"
            mouseInteraction
            clickSurge
            tunnelColor="#ffffff"
            tunnelOpacity={0}
            speed={0.1}
            pulseSpeed={2}
            pulseLength={0.28}
            pulseBlend={0.6}
            pulseWidth={1}
            thickness={0.35}
            rimWidth={0.15}
            waviness={0.3}
            sway={0.5}
            bend={0.4}
            glow={1}
            size={1}
            fadeNear={0.5}
            fadeFar={2}
            brightness={1}
            colorVariance
            grain={false}
            mouseStrength={0.1}
            intro
            lightMode={false}
          />
        )}
        {mode === 'ascii' && (
          <GradientASCII
            colors={['#0369a1', '#00a8e8', '#22d3ee', '#00d26a']}
            shape="pinch"
            characters=" .:-=+*#%@"
            cellSize={17}
            density={0.56}
            glyphOpacity={0.78}
            gradientOpacity={0.42}
            glow={0.38}
            depthOfField={0.12}
            flicker={0.06}
            softness={0.62}
            scale={1.15}
            flow={0.4}
            speed={0.28}
            grain={0.035}
            variation={0}
            mouseInteraction={false}
            intro
            lightMode={false}
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>

    </>
  );
}
