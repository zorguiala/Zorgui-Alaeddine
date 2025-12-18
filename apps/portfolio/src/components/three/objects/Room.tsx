import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Room = () => {
  const sunlightRef = useRef<THREE.Mesh>(null);

  // Animate sunlight rays
  useFrame((state) => {
    if (sunlightRef.current) {
      sunlightRef.current.material.opacity = 0.08 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });

  return (
    <group>
      {/* Floor - wooden planks */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[12, 10]} />
        <meshStandardMaterial
          color="#8B5A2B"
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>

      {/* Floor wood grain lines */}
      {[-2, -1, 0, 1, 2].map((x, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[x * 1.2, 0.001, 0]}>
          <planeGeometry args={[0.02, 10]} />
          <meshBasicMaterial color="#6B4423" />
        </mesh>
      ))}

      {/* Back wall - blue like reference */}
      <mesh receiveShadow position={[0, 3, -3]}>
        <planeGeometry args={[12, 6]} />
        <meshStandardMaterial
          color="#3d5a80"
          metalness={0.05}
          roughness={0.9}
        />
      </mesh>

      {/* Left wall */}
      <mesh receiveShadow position={[-6, 3, 2]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial
          color="#4a6fa5"
          metalness={0.05}
          roughness={0.9}
        />
      </mesh>

      {/* Right wall (partial - window area) */}
      <mesh receiveShadow position={[6, 3, 2]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial
          color="#4a6fa5"
          metalness={0.05}
          roughness={0.9}
        />
      </mesh>

      {/* Window on back wall */}
      <group position={[2, 2.8, -2.95]}>
        {/* Window frame - wooden */}
        <mesh castShadow>
          <boxGeometry args={[2.2, 2.2, 0.1]} />
          <meshStandardMaterial color="#8B4513" metalness={0.1} roughness={0.7} />
        </mesh>

        {/* Window glass - bright sky */}
        <mesh position={[0, 0, 0.03]}>
          <planeGeometry args={[1.9, 1.9]} />
          <meshBasicMaterial color="#87CEEB" />
        </mesh>

        {/* Window cross bars */}
        <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[0.08, 1.9, 0.05]} />
          <meshStandardMaterial color="#8B4513" metalness={0.1} roughness={0.7} />
        </mesh>
        <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[1.9, 0.08, 0.05]} />
          <meshStandardMaterial color="#8B4513" metalness={0.1} roughness={0.7} />
        </mesh>

        {/* Window sill */}
        <mesh position={[0, -1.15, 0.15]} castShadow>
          <boxGeometry args={[2.4, 0.08, 0.3]} />
          <meshStandardMaterial color="#A0522D" metalness={0.1} roughness={0.7} />
        </mesh>

        {/* Plants on window sill */}
        <WindowPlant position={[-0.6, -1.0, 0.15]} />
        <WindowPlant position={[0.3, -1.0, 0.15]} scale={0.8} />
        <WindowPlant position={[0.8, -1.0, 0.15]} scale={0.9} />
      </group>

      {/* Sunlight rays from window */}
      <mesh
        ref={sunlightRef}
        position={[1.5, 1.5, -1]}
        rotation={[0.3, 0.3, 0.5]}
      >
        <planeGeometry args={[3, 4]} />
        <meshBasicMaterial
          color="#FFD700"
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Picture frames on wall */}
      <PictureFrame position={[-1.5, 3.2, -2.95]} size={[0.8, 0.6]} />
      <PictureFrame position={[-0.5, 2.6, -2.95]} size={[0.5, 0.7]} isProfile />
      <PictureFrame position={[-1.2, 2.4, -2.95]} size={[0.6, 0.5]} />

      {/* Baseboard */}
      <mesh position={[0, 0.08, -2.92]}>
        <boxGeometry args={[12, 0.15, 0.08]} />
        <meshStandardMaterial color="#5D3A1A" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Ceiling (subtle) */}
      <mesh position={[0, 6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 10]} />
        <meshStandardMaterial color="#E8E8E8" metalness={0} roughness={1} />
      </mesh>
    </group>
  );
};

// Window plant component
const WindowPlant = ({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) => {
  return (
    <group position={position} scale={scale}>
      {/* Pot */}
      <mesh castShadow>
        <cylinderGeometry args={[0.08, 0.06, 0.1, 12]} />
        <meshStandardMaterial color="#D2691E" metalness={0.1} roughness={0.8} />
      </mesh>
      {/* Plant */}
      <group position={[0, 0.1, 0]}>
        {[0, 1, 2, 3].map((i) => (
          <mesh
            key={i}
            position={[
              Math.sin(i * 1.5) * 0.03,
              i * 0.04,
              Math.cos(i * 1.5) * 0.03,
            ]}
            rotation={[Math.sin(i) * 0.3, i * 0.8, 0]}
          >
            <coneGeometry args={[0.04, 0.1, 4]} />
            <meshStandardMaterial color="#228B22" metalness={0.1} roughness={0.8} />
          </mesh>
        ))}
      </group>
    </group>
  );
};

// Picture frame component
const PictureFrame = ({
  position,
  size,
  isProfile = false,
}: {
  position: [number, number, number];
  size: [number, number];
  isProfile?: boolean;
}) => {
  return (
    <group position={position}>
      {/* Frame */}
      <mesh castShadow>
        <boxGeometry args={[size[0] + 0.1, size[1] + 0.1, 0.05]} />
        <meshStandardMaterial color="#8B4513" metalness={0.2} roughness={0.6} />
      </mesh>
      {/* Picture area */}
      <mesh position={[0, 0, 0.03]}>
        <planeGeometry args={size} />
        <meshStandardMaterial
          color={isProfile ? "#E8D4B8" : "#87CEEB"}
          metalness={0}
          roughness={0.9}
        />
      </mesh>
      {/* If profile picture - add silhouette hint */}
      {isProfile && (
        <mesh position={[0, 0.05, 0.035]}>
          <circleGeometry args={[0.12, 16]} />
          <meshStandardMaterial color="#C4A484" metalness={0} roughness={0.9} />
        </mesh>
      )}
    </group>
  );
};

