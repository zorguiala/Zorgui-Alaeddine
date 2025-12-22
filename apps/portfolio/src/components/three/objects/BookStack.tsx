import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { InteractiveObject } from './InteractiveObject';
import { useAppStore } from '@/stores';
import { OBJECT_POSITIONS } from '@/utils/constants';

const BOOKS = [
  { color: '#8B0000', height: 0.04 },
  { color: '#006400', height: 0.035 },
  { color: '#00008B', height: 0.045 },
  { color: '#4B0082', height: 0.03 },
];

export const BookStack = () => {
  const booksRef = useRef<THREE.Group>(null);
  const activeSection = useAppStore((state) => state.activeSection);
  const isActive = activeSection === 'experience';

  // Subtle floating animation
  useFrame((state) => {
    if (booksRef.current && !isActive) {
      booksRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });

  let yOffset = 0;

  return (
    <InteractiveObject
      section="experience"
      position={OBJECT_POSITIONS.bookStack}
      labelOffset={[0, 0.4, 0]}
    >
      <group ref={booksRef}>
        {BOOKS.map((book, index) => {
          const y = yOffset + book.height / 2;
          yOffset += book.height;
          
          return (
            <group key={index}>
              {/* Book body */}
              <mesh
                castShadow
                position={[
                  (index % 2) * 0.01 - 0.005,
                  y,
                  (index % 2) * 0.008,
                ]}
                rotation={[0, (index * 0.06) - 0.08, 0]}
              >
                <boxGeometry args={[0.22, book.height, 0.16]} />
                <meshStandardMaterial
                  color={book.color}
                  metalness={0.1}
                  roughness={0.8}
                />
              </mesh>

              {/* Book pages (white edge) */}
              <mesh
                position={[
                  0.005 + (index % 2) * 0.01 - 0.005,
                  y,
                  0.075 + (index % 2) * 0.008,
                ]}
                rotation={[0, (index * 0.06) - 0.08, 0]}
              >
                <boxGeometry args={[0.19, book.height - 0.006, 0.008]} />
                <meshStandardMaterial
                  color="#FFFFF0"
                  metalness={0}
                  roughness={0.95}
                />
              </mesh>
            </group>
          );
        })}

        {/* Bookmark ribbon */}
        <mesh position={[0.06, yOffset + 0.015, 0]} rotation={[0.15, 0, 0.08]}>
          <boxGeometry args={[0.012, 0.08, 0.002]} />
          <meshStandardMaterial color="#ff3366" metalness={0.1} roughness={0.8} />
        </mesh>
      </group>
    </InteractiveObject>
  );
};
