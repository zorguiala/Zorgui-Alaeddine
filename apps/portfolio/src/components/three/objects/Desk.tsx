import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Desk = () => {
  const deskRef = useRef<THREE.Group>(null);

  // Subtle floating animation
  useFrame((state) => {
    if (deskRef.current) {
      deskRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.005;
    }
  });

  return (
    <group ref={deskRef}>
      {/* Main desk surface - warm wood color */}
      <mesh receiveShadow castShadow position={[0, 0.75, 0]}>
        <boxGeometry args={[3.5, 0.08, 1.8]} />
        <meshStandardMaterial
          color="#CD853F"
          metalness={0.1}
          roughness={0.6}
        />
      </mesh>

      {/* Desk top edge - darker trim */}
      <mesh position={[0, 0.79, 0.9]}>
        <boxGeometry args={[3.5, 0.02, 0.05]} />
        <meshStandardMaterial color="#8B4513" metalness={0.1} roughness={0.7} />
      </mesh>

      {/* Desk front panel */}
      <mesh castShadow position={[0, 0.55, 0.87]}>
        <boxGeometry args={[3.4, 0.35, 0.04]} />
        <meshStandardMaterial
          color="#A0522D"
          metalness={0.1}
          roughness={0.7}
        />
      </mesh>

      {/* Desk drawer */}
      <mesh castShadow position={[1.2, 0.55, 0.86]}>
        <boxGeometry args={[0.6, 0.25, 0.02]} />
        <meshStandardMaterial color="#8B4513" metalness={0.1} roughness={0.7} />
      </mesh>
      {/* Drawer handle */}
      <mesh position={[1.2, 0.55, 0.88]}>
        <boxGeometry args={[0.15, 0.03, 0.03]} />
        <meshStandardMaterial color="#DAA520" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Left desk legs */}
      <mesh castShadow position={[-1.5, 0.35, -0.7]}>
        <boxGeometry args={[0.1, 0.7, 0.1]} />
        <meshStandardMaterial color="#8B4513" metalness={0.1} roughness={0.7} />
      </mesh>
      <mesh castShadow position={[-1.5, 0.35, 0.7]}>
        <boxGeometry args={[0.1, 0.7, 0.1]} />
        <meshStandardMaterial color="#8B4513" metalness={0.1} roughness={0.7} />
      </mesh>

      {/* Right desk legs */}
      <mesh castShadow position={[1.5, 0.35, -0.7]}>
        <boxGeometry args={[0.1, 0.7, 0.1]} />
        <meshStandardMaterial color="#8B4513" metalness={0.1} roughness={0.7} />
      </mesh>
      <mesh castShadow position={[1.5, 0.35, 0.7]}>
        <boxGeometry args={[0.1, 0.7, 0.1]} />
        <meshStandardMaterial color="#8B4513" metalness={0.1} roughness={0.7} />
      </mesh>

      {/* Left side panel (connecting legs) */}
      <mesh castShadow position={[-1.5, 0.35, 0]}>
        <boxGeometry args={[0.06, 0.5, 1.3]} />
        <meshStandardMaterial color="#A0522D" metalness={0.1} roughness={0.7} />
      </mesh>

      {/* Right side panel */}
      <mesh castShadow position={[1.5, 0.35, 0]}>
        <boxGeometry args={[0.06, 0.5, 1.3]} />
        <meshStandardMaterial color="#A0522D" metalness={0.1} roughness={0.7} />
      </mesh>

      {/* Back support bar */}
      <mesh position={[0, 0.2, -0.85]}>
        <boxGeometry args={[2.9, 0.06, 0.06]} />
        <meshStandardMaterial color="#8B4513" metalness={0.1} roughness={0.7} />
      </mesh>
    </group>
  );
};
