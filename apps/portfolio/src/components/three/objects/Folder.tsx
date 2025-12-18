import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { InteractiveObject } from './InteractiveObject';
import { useAppStore } from '@/stores';
import { OBJECT_POSITIONS } from '@/utils/constants';

export const Folder = () => {
  const folderRef = useRef<THREE.Group>(null);
  const activeSection = useAppStore((state) => state.activeSection);
  const isActive = activeSection === 'projects';

  // Subtle animation
  useFrame((state) => {
    if (folderRef.current && !isActive) {
      folderRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.005;
    }
  });

  return (
    <InteractiveObject
      section="projects"
      position={OBJECT_POSITIONS.folder}
      labelOffset={[0, 0.25, 0]}
    >
      <group ref={folderRef}>
        {/* Folder back */}
        <mesh castShadow position={[0, 0.004, 0]}>
          <boxGeometry args={[0.22, 0.008, 0.3]} />
          <meshStandardMaterial
            color="#F4A460"
            metalness={0.1}
            roughness={0.7}
          />
        </mesh>

        {/* Folder tab */}
        <mesh castShadow position={[-0.06, 0.012, -0.13]}>
          <boxGeometry args={[0.08, 0.008, 0.04]} />
          <meshStandardMaterial
            color="#F4A460"
            metalness={0.1}
            roughness={0.7}
          />
        </mesh>

        {/* Folder front */}
        <mesh castShadow position={[0, 0.018, 0.01]}>
          <boxGeometry args={[0.22, 0.008, 0.27]} />
          <meshStandardMaterial
            color="#DEB887"
            metalness={0.1}
            roughness={0.7}
          />
        </mesh>

        {/* Papers inside */}
        {[0.01, 0.014, 0.018].map((y, index) => (
          <mesh key={index} position={[0, y, (index - 1) * 0.01]}>
            <boxGeometry args={[0.19, 0.002, 0.25]} />
            <meshStandardMaterial color="#FFFFFF" metalness={0} roughness={0.95} />
          </mesh>
        ))}
      </group>
    </InteractiveObject>
  );
};
