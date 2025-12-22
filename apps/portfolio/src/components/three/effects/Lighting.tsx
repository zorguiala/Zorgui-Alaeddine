import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Lighting = () => {
  const sunlightRef = useRef<THREE.DirectionalLight>(null);
  const lampLightRef = useRef<THREE.SpotLight>(null);

  // Subtle light animation
  useFrame((state) => {
    if (sunlightRef.current) {
      sunlightRef.current.intensity = 1.5 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (lampLightRef.current) {
      lampLightRef.current.intensity = 2.5 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <>
      {/* Ambient light - general room lighting - reduced for more contrast */}
      <ambientLight intensity={0.25} color="#FFF5E6" />

      {/* Main sunlight from window - improved directional light */}
      <directionalLight
        ref={sunlightRef}
        position={[4, 6, 2]}
        intensity={1.5}
        color="#FFF8DC"
        castShadow
        shadow-mapSize={[4096, 4096]}
        shadow-camera-far={25}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
        shadow-bias={-0.0001}
        shadow-radius={4}
      />

      {/* Window area light - more realistic soft light */}
      <rectAreaLight
        position={[2, 3, -2.5]}
        width={2}
        height={2}
        intensity={3}
        color="#B0E0E6"
        rotation={[0, 0, 0]}
      />

      {/* Desk lamp - spotlight with realistic cone */}
      <spotLight
        ref={lampLightRef}
        position={[-1.3, 1.3, -0.3]}
        angle={Math.PI / 4}
        penumbra={0.5}
        intensity={2.5}
        color="#FFF5E6"
        distance={4}
        decay={2}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0001}
        shadow-radius={2}
      />

      {/* Fill light from front - softer */}
      <directionalLight
        position={[0, 2, 5]}
        intensity={0.3}
        color="#FFFFFF"
      />

      {/* Hemisphere light for natural sky/ground colors */}
      <hemisphereLight
        color="#87CEEB"
        groundColor="#8B5A2B"
        intensity={0.4}
      />
    </>
  );
};
