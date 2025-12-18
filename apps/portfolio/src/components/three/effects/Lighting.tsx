import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Lighting = () => {
  const sunlightRef = useRef<THREE.DirectionalLight>(null);

  // Subtle light animation
  useFrame((state) => {
    if (sunlightRef.current) {
      sunlightRef.current.intensity = 1.2 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <>
      {/* Ambient light - general room lighting */}
      <ambientLight intensity={0.4} color="#FFF5E6" />

      {/* Main sunlight from window */}
      <directionalLight
        ref={sunlightRef}
        position={[4, 6, 2]}
        intensity={1.2}
        color="#FFF8DC"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={20}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        shadow-bias={-0.0001}
      />

      {/* Window light - bright and warm */}
      <pointLight
        position={[2, 3.5, -2]}
        intensity={1}
        color="#87CEEB"
        distance={8}
      />

      {/* Desk lamp light - warm yellow */}
      <pointLight
        position={[-1.3, 1.5, -0.3]}
        intensity={1.5}
        color="#FFF5E6"
        distance={3}
        decay={2}
      />

      {/* Fill light from front */}
      <pointLight
        position={[0, 2, 4]}
        intensity={0.5}
        color="#FFFFFF"
        distance={10}
      />

      {/* Subtle blue accent from left */}
      <pointLight
        position={[-4, 2, 0]}
        intensity={0.3}
        color="#4a6fa5"
        distance={8}
      />

      {/* Hemisphere light for natural sky/ground colors */}
      <hemisphereLight
        color="#87CEEB"
        groundColor="#8B5A2B"
        intensity={0.3}
      />
    </>
  );
};
