import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OBJECT_POSITIONS } from '@/utils/constants';

export const DeskLamp = () => {
  const lightRef = useRef<THREE.PointLight>(null);

  // Subtle light flicker
  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.intensity = 2 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
    }
  });

  return (
    <group position={[-1.3, 0.79, -0.5]}>
      {/* Lamp base */}
      <mesh castShadow>
        <cylinderGeometry args={[0.12, 0.15, 0.04, 16]} />
        <meshStandardMaterial color="#DAA520" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Lamp pole - bottom */}
      <mesh castShadow position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.02, 0.025, 0.3, 8]} />
        <meshStandardMaterial color="#DAA520" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Lamp arm - angled */}
      <group position={[0, 0.3, 0]} rotation={[0, 0, -0.4]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.015, 0.02, 0.4, 8]} />
          <meshStandardMaterial color="#DAA520" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Lamp head */}
        <group position={[0, 0.25, 0]} rotation={[0.5, 0, 0]}>
          {/* Lamp shade - yellow cone */}
          <mesh castShadow>
            <coneGeometry args={[0.12, 0.15, 16, 1, true]} />
            <meshStandardMaterial
              color="#FFD700"
              metalness={0.3}
              roughness={0.5}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Lamp shade top rim */}
          <mesh position={[0, 0.075, 0]}>
            <torusGeometry args={[0.03, 0.008, 8, 16]} />
            <meshStandardMaterial color="#DAA520" metalness={0.8} roughness={0.3} />
          </mesh>

          {/* Light bulb glow */}
          <mesh position={[0, -0.02, 0]}>
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshStandardMaterial
              color="#FFFACD"
              emissive="#FFFACD"
              emissiveIntensity={2}
            />
          </mesh>

          {/* Actual light */}
          <pointLight
            ref={lightRef}
            position={[0, -0.05, 0]}
            intensity={2}
            distance={3}
            color="#FFF5E6"
            castShadow
          />
        </group>
      </group>
    </group>
  );
};

export const CoffeeMug = () => {
  const steamRef = useRef<THREE.Group>(null);

  // Steam animation
  useFrame((state) => {
    if (steamRef.current) {
      steamRef.current.position.y = 0.12 + Math.sin(state.clock.elapsedTime * 2) * 0.015;
      steamRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group position={OBJECT_POSITIONS.mug}>
      {/* Mug body - white ceramic */}
      <mesh castShadow>
        <cylinderGeometry args={[0.045, 0.04, 0.1, 24]} />
        <meshStandardMaterial color="#f5f5f5" metalness={0.1} roughness={0.6} />
      </mesh>

      {/* Mug inner wall (darker) */}
      <mesh position={[0, 0.01, 0]}>
        <cylinderGeometry args={[0.04, 0.035, 0.08, 24]} />
        <meshStandardMaterial color="#2a1810" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Coffee surface */}
      <mesh position={[0, 0.035, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.038, 24]} />
        <meshStandardMaterial color="#3d2314" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Mug handle */}
      <mesh position={[0.055, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.025, 0.008, 12, 24, Math.PI]} />
        <meshStandardMaterial color="#f5f5f5" metalness={0.1} roughness={0.6} />
      </mesh>

      {/* Decorative stripe on mug */}
      <mesh position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.047, 0.047, 0.015, 24]} />
        <meshStandardMaterial color="#00aa55" metalness={0.2} roughness={0.5} />
      </mesh>

      {/* Steam particles */}
      <group ref={steamRef}>
        {[0, 1, 2].map((i) => (
          <mesh
            key={i}
            position={[
              Math.sin(i * 2.1) * 0.012,
              0.12 + i * 0.025,
              Math.cos(i * 2.1) * 0.012,
            ]}
          >
            <sphereGeometry args={[0.008 - i * 0.002, 8, 8]} />
            <meshBasicMaterial
              color="#ffffff"
              transparent
              opacity={0.25 - i * 0.07}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
};

export const Plant = () => {
  const leavesRef = useRef<THREE.Group>(null);

  // Gentle sway animation
  useFrame((state) => {
    if (leavesRef.current) {
      leavesRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.04;
    }
  });

  return (
    <group position={OBJECT_POSITIONS.plant}>
      {/* Pot - terracotta */}
      <mesh castShadow>
        <cylinderGeometry args={[0.055, 0.045, 0.08, 16]} />
        <meshStandardMaterial color="#c66b3d" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Pot rim */}
      <mesh position={[0, 0.042, 0]}>
        <torusGeometry args={[0.055, 0.008, 8, 24]} />
        <meshStandardMaterial color="#b85c32" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Soil */}
      <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.048, 16]} />
        <meshStandardMaterial color="#3d2817" metalness={0} roughness={0.95} />
      </mesh>

      {/* Plant */}
      <group ref={leavesRef} position={[0, 0.06, 0]}>
        {/* Main stem */}
        <mesh>
          <cylinderGeometry args={[0.006, 0.01, 0.12, 8]} />
          <meshStandardMaterial color="#2d5a27" metalness={0.1} roughness={0.8} />
        </mesh>

        {/* Leaves - various sizes and positions */}
        {[
          { pos: [0.02, 0.04, 0.01], rot: [0.3, 0.5, 0.2], scale: 1 },
          { pos: [-0.025, 0.06, -0.01], rot: [-0.2, -0.3, -0.1], scale: 0.9 },
          { pos: [0.01, 0.08, -0.02], rot: [0.1, 0.8, 0.3], scale: 0.8 },
          { pos: [-0.015, 0.1, 0.015], rot: [-0.3, -0.6, 0.1], scale: 0.7 },
          { pos: [0.02, 0.12, 0], rot: [0.2, 0.2, -0.2], scale: 0.6 },
        ].map((leaf, i) => (
          <mesh
            key={i}
            position={leaf.pos as [number, number, number]}
            rotation={leaf.rot as [number, number, number]}
            scale={leaf.scale}
          >
            <sphereGeometry args={[0.025, 8, 6]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#3d8b37' : '#2d6b27'}
              metalness={0.1}
              roughness={0.7}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
};

export const Keyboard = () => {
  return (
    <group position={[0, 0.79, 0.5]}>
      {/* Keyboard base */}
      <mesh castShadow>
        <boxGeometry args={[0.45, 0.02, 0.15]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Key rows */}
      {[0, 1, 2, 3].map((row) => (
        <group key={row} position={[0, 0.015, -0.05 + row * 0.035]}>
          {Array.from({ length: 12 - Math.floor(row * 0.5) }).map((_, col) => (
            <mesh
              key={col}
              position={[-0.19 + col * 0.032 + (row % 2) * 0.005, 0, 0]}
            >
              <boxGeometry args={[0.026, 0.008, 0.026]} />
              <meshStandardMaterial color="#2d2d2d" metalness={0.4} roughness={0.6} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
};

export const Mouse = () => {
  return (
    <group position={[0.4, 0.79, 0.45]}>
      {/* Mouse body */}
      <mesh castShadow>
        <boxGeometry args={[0.05, 0.02, 0.08]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Scroll wheel */}
      <mesh position={[0, 0.015, -0.01]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.005, 0.005, 0.012, 12]} />
        <meshStandardMaterial color="#444444" metalness={0.5} roughness={0.5} />
      </mesh>
    </group>
  );
};

export const PencilHolder = () => {
  return (
    <group position={[1.2, 0.79, -0.5]}>
      {/* Cup */}
      <mesh castShadow>
        <cylinderGeometry args={[0.05, 0.045, 0.12, 16]} />
        <meshStandardMaterial color="#DEB887" metalness={0.1} roughness={0.7} />
      </mesh>

      {/* Pencils */}
      {[
        { x: 0.015, z: 0.01, color: '#FFD700', h: 0.15 },
        { x: -0.02, z: 0.015, color: '#FF6347', h: 0.13 },
        { x: 0.01, z: -0.02, color: '#4169E1', h: 0.14 },
        { x: -0.01, z: -0.01, color: '#32CD32', h: 0.12 },
      ].map((pencil, i) => (
        <group key={i} position={[pencil.x, 0.06 + pencil.h / 2, pencil.z]}>
          <mesh>
            <cylinderGeometry args={[0.008, 0.008, pencil.h, 6]} />
            <meshStandardMaterial color={pencil.color} metalness={0.1} roughness={0.7} />
          </mesh>
          {/* Pencil tip */}
          <mesh position={[0, pencil.h / 2 + 0.01, 0]}>
            <coneGeometry args={[0.008, 0.02, 6]} />
            <meshStandardMaterial color="#F5DEB3" metalness={0} roughness={0.9} />
          </mesh>
        </group>
      ))}
    </group>
  );
};

export const Notebook = () => {
  return (
    <group position={[0.8, 0.8, 0.2]} rotation={[0, -0.2, 0]}>
      {/* Notebook cover */}
      <mesh castShadow>
        <boxGeometry args={[0.2, 0.02, 0.28]} />
        <meshStandardMaterial color="#F4A460" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Pages */}
      <mesh position={[0, 0.012, 0]}>
        <boxGeometry args={[0.18, 0.015, 0.26]} />
        <meshStandardMaterial color="#FFFAF0" metalness={0} roughness={0.95} />
      </mesh>

      {/* Spiral binding */}
      {[-0.1, -0.05, 0, 0.05, 0.1].map((z, i) => (
        <mesh key={i} position={[-0.095, 0.015, z]}>
          <torusGeometry args={[0.012, 0.003, 8, 12, Math.PI]} />
          <meshStandardMaterial color="#808080" metalness={0.8} roughness={0.3} />
        </mesh>
      ))}

      {/* Pencil on notebook */}
      <mesh position={[0.03, 0.025, 0]} rotation={[0, 0.3, Math.PI / 2]}>
        <cylinderGeometry args={[0.006, 0.006, 0.15, 6]} />
        <meshStandardMaterial color="#228B22" metalness={0.1} roughness={0.7} />
      </mesh>
    </group>
  );
};

export const Chair = () => {
  return (
    <group position={[0, 0, 1.8]}>
      {/* Seat */}
      <mesh castShadow position={[0, 0.5, 0]}>
        <boxGeometry args={[0.5, 0.08, 0.5]} />
        <meshStandardMaterial color="#DAA520" metalness={0.1} roughness={0.7} />
      </mesh>

      {/* Seat cushion */}
      <mesh position={[0, 0.56, 0]}>
        <boxGeometry args={[0.45, 0.04, 0.45]} />
        <meshStandardMaterial color="#FFD700" metalness={0.05} roughness={0.8} />
      </mesh>

      {/* Backrest */}
      <mesh castShadow position={[0, 0.9, -0.22]}>
        <boxGeometry args={[0.5, 0.7, 0.08]} />
        <meshStandardMaterial color="#DAA520" metalness={0.1} roughness={0.7} />
      </mesh>

      {/* Backrest cushion */}
      <mesh position={[0, 0.9, -0.18]}>
        <boxGeometry args={[0.45, 0.6, 0.04]} />
        <meshStandardMaterial color="#FFD700" metalness={0.05} roughness={0.8} />
      </mesh>

      {/* Legs */}
      {[
        [-0.2, 0.22, 0.2],
        [0.2, 0.22, 0.2],
        [-0.2, 0.22, -0.2],
        [0.2, 0.22, -0.2],
      ].map((pos, i) => (
        <mesh key={i} castShadow position={pos as [number, number, number]}>
          <boxGeometry args={[0.06, 0.44, 0.06]} />
          <meshStandardMaterial color="#8B4513" metalness={0.1} roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
};

export const Papers = () => {
  return (
    <group position={[-0.6, 0.8, 0.4]}>
      {/* Stack of papers */}
      {[0, 0.003, 0.006].map((y, i) => (
        <mesh key={i} position={[(i - 1) * 0.01, y, (i - 1) * 0.01]} rotation={[0, (i - 1) * 0.05, 0]}>
          <boxGeometry args={[0.2, 0.002, 0.28]} />
          <meshStandardMaterial color="#FFFFFF" metalness={0} roughness={0.95} />
        </mesh>
      ))}
    </group>
  );
};

export const Bookshelf = () => {
  return (
    <group position={[-2.5, 1.5, -2]}>
      {/* Shelf frame */}
      <mesh castShadow>
        <boxGeometry args={[0.8, 2.5, 0.35]} />
        <meshStandardMaterial color="#8B4513" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Shelf dividers */}
      {[-0.8, -0.2, 0.4, 1].map((y, i) => (
        <mesh key={i} position={[0, y, 0.02]}>
          <boxGeometry args={[0.72, 0.03, 0.3]} />
          <meshStandardMaterial color="#A0522D" metalness={0.1} roughness={0.7} />
        </mesh>
      ))}

      {/* Books on shelves */}
      <group position={[0, -0.5, 0.05]}>
        {[
          { x: -0.25, color: '#8B0000', w: 0.06 },
          { x: -0.15, color: '#006400', w: 0.05 },
          { x: -0.05, color: '#00008B', w: 0.07 },
          { x: 0.08, color: '#4B0082', w: 0.05 },
          { x: 0.18, color: '#8B4513', w: 0.06 },
        ].map((book, i) => (
          <mesh key={i} position={[book.x, 0.12, 0]}>
            <boxGeometry args={[book.w, 0.22, 0.18]} />
            <meshStandardMaterial color={book.color} metalness={0.1} roughness={0.8} />
          </mesh>
        ))}
      </group>

      {/* More books on second shelf */}
      <group position={[0, 0.1, 0.05]}>
        {[
          { x: -0.2, color: '#FF4500', w: 0.05 },
          { x: -0.1, color: '#2F4F4F', w: 0.06 },
          { x: 0.02, color: '#800080', w: 0.05 },
          { x: 0.12, color: '#B8860B', w: 0.07 },
        ].map((book, i) => (
          <mesh key={i} position={[book.x, 0.12, 0]}>
            <boxGeometry args={[book.w, 0.2, 0.16]} />
            <meshStandardMaterial color={book.color} metalness={0.1} roughness={0.8} />
          </mesh>
        ))}
      </group>
    </group>
  );
};
