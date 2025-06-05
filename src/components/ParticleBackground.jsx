// src/components/ParticlesBackground.jsx

import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false }, // only inside parent
          background: {
            color: { value: "#000000" }, // 🔴 black background
          },
          particles: {
            number: { value: 60 },
            color: { value: "#ffffff" }, // ⚪ white particles
            links: {
              enable: true,
              color: "#ffffff", // ⚪ white lines
              distance: 150,
            },
            move: { enable: true, speed: 1 },
            size: { value: 3 },
            opacity: { value: 0.5 },
          },
        }}
      />
    </div>
  );
}

export default ParticlesBackground;