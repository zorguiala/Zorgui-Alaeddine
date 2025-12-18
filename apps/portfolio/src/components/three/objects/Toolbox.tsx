import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { InteractiveObject } from './InteractiveObject';
import { useAppStore } from '@/stores';
import { OBJECT_POSITIONS } from '@/utils/constants';

export const Toolbox = () => {
  const lidRef = useRef<THREE.Group>(null);
  const activeSection = useAppStore((state) => state.activeSection);
  const isActive = activeSection === 'skills';

  // Animate lid opening when active
  useFrame((_, delta) => {
    if (lidRef.current) {
      const targetRotation = isActive ? -1.3 : 0;
      lidRef.current.rotation.x = THREE.MathUtils.lerp(
        lidRef.current.rotation.x,
        targetRotation,
        delta * 3
      );
    }
  });

  return (
    <InteractiveObject
      section="skills"
      position={OBJECT_POSITIONS.toolbox}
      labelOffset={[0, 0.35, 0]}
    >
      {/* Toolbox main body - red */}
      <mesh castShadow>
        <boxGeometry args={[0.3, 0.15, 0.2]} />
        <meshStandardMaterial
          color="#cc3300"
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>

      {/* Black stripe */}
      <mesh position={[0, 0, 0.101]}>
        <boxGeometry args={[0.3, 0.06, 0.01]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Handle */}
      <mesh position={[0, 0.1, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.18, 0.02, 0.03]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Lid assembly */}
      <group ref={lidRef} position={[0, 0.075, -0.1]}>
        <mesh castShadow position={[0, 0.01, 0.05]}>
          <boxGeometry args={[0.3, 0.02, 0.1]} />
          <meshStandardMaterial
            color="#cc3300"
            metalness={0.6}
            roughness={0.4}
          />
        </mesh>
      </group>

      {/* Latches - gold */}
      {[-0.08, 0.08].map((x, i) => (
        <mesh key={i} position={[x, 0, 0.101]}>
          <boxGeometry args={[0.03, 0.025, 0.01]} />
          <meshStandardMaterial
            color="#DAA520"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      ))}

      {/* Tools inside (visible when open) */}
      {isActive && (
        <group position={[0, 0.05, 0]}>
          <mesh position={[-0.08, 0, 0]} rotation={[0, 0.3, 0]}>
            <boxGeometry args={[0.12, 0.015, 0.025]} />
            <meshStandardMaterial color="#888888" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0.06, 0, 0.04]} rotation={[0, -0.2, 0]}>
            <cylinderGeometry args={[0.008, 0.008, 0.1, 8]} />
            <meshStandardMaterial color="#ff6600" metalness={0.3} roughness={0.6} />
          </mesh>
        </group>
      )}
    </InteractiveObject>
  );
};
