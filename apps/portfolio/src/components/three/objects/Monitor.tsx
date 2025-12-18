import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { InteractiveObject } from './InteractiveObject';
import { useAppStore } from '@/stores';
import { OBJECT_POSITIONS } from '@/utils/constants';

export const Monitor = () => {
  const screenRef = useRef<THREE.Mesh>(null);
  const activeSection = useAppStore((state) => state.activeSection);
  const isActive = activeSection === 'about';

  // Screen glow effect
  useFrame((state) => {
    if (screenRef.current) {
      const material = screenRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = isActive ? 0.5 : 0.15 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  return (
    <InteractiveObject
      section="about"
      position={OBJECT_POSITIONS.monitor}
      labelOffset={[0, 0.5, 0]}
    >
      {/* Monitor stand base - circular */}
      <mesh castShadow position={[0, -0.32, 0.1]}>
        <cylinderGeometry args={[0.15, 0.18, 0.03, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Monitor stand neck */}
      <mesh castShadow position={[0, -0.15, 0.1]}>
        <boxGeometry args={[0.04, 0.3, 0.04]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Monitor back casing */}
      <mesh castShadow position={[0, 0.15, -0.02]}>
        <boxGeometry args={[0.9, 0.55, 0.04]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Monitor front bezel */}
      <mesh castShadow position={[0, 0.15, 0.01]}>
        <boxGeometry args={[0.88, 0.53, 0.02]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Monitor screen */}
      <mesh
        ref={screenRef}
        position={[0, 0.15, 0.021]}
      >
        <planeGeometry args={[0.78, 0.45]} />
        <meshStandardMaterial
          color={isActive ? '#0d1820' : '#87CEEB'}
          emissive={isActive ? '#00ff88' : '#87CEEB'}
          emissiveIntensity={isActive ? 0.5 : 0.2}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Power LED */}
      <mesh position={[0, -0.1, 0.02]}>
        <circleGeometry args={[0.008, 16]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={1}
        />
      </mesh>
    </InteractiveObject>
  );
};
