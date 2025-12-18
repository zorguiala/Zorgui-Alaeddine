import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { CameraRig } from './CameraRig';
import { DeskScene } from './DeskScene';
import { Lighting } from './effects';

export const Scene = () => {
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 4, 6],
        fov: 50,
        near: 0.1,
        far: 100,
      }}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <color attach="background" args={['#0a0a0f']} />
      
      <Suspense fallback={null}>
        <CameraRig />
        <Lighting />
        <DeskScene />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

