import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { InteractiveObject } from './InteractiveObject';
import { useAppStore } from '@/stores';
import { OBJECT_POSITIONS } from '@/utils/constants';

export const Laptop = () => {
  const screenRef = useRef<THREE.Mesh>(null);
  const activeSection = useAppStore((state) => state.activeSection);
  const isActive = activeSection === 'contact';

  // Screen glow effect
  useFrame((state) => {
    if (screenRef.current) {
      const material = screenRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = isActive 
        ? 0.4 + Math.sin(state.clock.elapsedTime * 3) * 0.05
        : 0.1;
    }
  });

  return (
    <InteractiveObject
      section="contact"
      position={OBJECT_POSITIONS.laptop}
      labelOffset={[0, 0.4, 0]}
    >
      {/* Laptop base / bottom - dark gray */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.5, 0.02, 0.35]} />
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Keyboard area */}
      <mesh position={[0, 0.012, 0.02]}>
        <boxGeometry args={[0.44, 0.004, 0.22]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Individual key rows */}
      {[0, 1, 2, 3].map((row) => (
        <group key={row} position={[0, 0.016, -0.06 + row * 0.045]}>
          {Array.from({ length: 10 - Math.floor(row * 0.3) }).map((_, col) => (
            <mesh
              key={col}
              position={[-0.18 + col * 0.04 + (row % 2) * 0.01, 0, 0]}
            >
              <boxGeometry args={[0.032, 0.004, 0.032]} />
              <meshStandardMaterial color="#333333" metalness={0.4} roughness={0.6} />
            </mesh>
          ))}
        </group>
      ))}

      {/* Trackpad */}
      <mesh position={[0, 0.013, 0.12]}>
        <boxGeometry args={[0.12, 0.002, 0.08]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Screen assembly - tilted back */}
      <group position={[0, 0.01, -0.16]} rotation={[-0.3, 0, 0]}>
        {/* Screen back cover */}
        <mesh castShadow position={[0, 0.18, -0.006]}>
          <boxGeometry args={[0.5, 0.35, 0.01]} />
          <meshStandardMaterial
            color="#2a2a2a"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>

        {/* Screen bezel */}
        <mesh position={[0, 0.18, 0]}>
          <boxGeometry args={[0.48, 0.33, 0.006]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.5} roughness={0.5} />
        </mesh>

        {/* Screen display */}
        <mesh
          ref={screenRef}
          position={[0, 0.18, 0.004]}
        >
          <planeGeometry args={[0.42, 0.28]} />
          <meshStandardMaterial
            color={isActive ? '#0d1820' : '#1a1a2a'}
            emissive={isActive ? '#00ff88' : '#4488ff'}
            emissiveIntensity={isActive ? 0.4 : 0.15}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Webcam */}
        <mesh position={[0, 0.34, 0.004]}>
          <circleGeometry args={[0.006, 16]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
      </group>
    </InteractiveObject>
  );
};
