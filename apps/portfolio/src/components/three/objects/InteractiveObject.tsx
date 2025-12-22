import { useState, useRef, ReactNode } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { useAppStore } from '@/stores';
import { Section } from '@/types';
import { SECTION_LABELS, HOVER_SCALE } from '@/utils/constants';

interface InteractiveObjectProps {
  section: Section;
  position: [number, number, number];
  children: ReactNode;
  labelOffset?: [number, number, number];
}

export const InteractiveObject = ({
  section,
  position,
  children,
  labelOffset = [0, 0.6, 0],
}: InteractiveObjectProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  const activeSection = useAppStore((state) => state.activeSection);
  const setActiveSection = useAppStore((state) => state.setActiveSection);
  const isTransitioning = useAppStore((state) => state.isTransitioning);

  const isActive = activeSection === section;
  const showLabel = !activeSection && hovered;

  // Hover animation with glow effect
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    const targetScale = hovered && !activeSection ? HOVER_SCALE : 1;
    const currentScale = groupRef.current.scale.x;
    const newScale = THREE.MathUtils.lerp(currentScale, targetScale, delta * 8);
    groupRef.current.scale.setScalar(newScale);
    
    // Add subtle pulse effect when hovered
    if (hovered && !activeSection) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.02;
      groupRef.current.scale.setScalar(newScale * pulse);
    }
  });

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (isTransitioning || isActive) return;
    setActiveSection(section);
  };

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    if (activeSection) return;
    setHovered(true);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    setHovered(false);
    document.body.style.cursor = 'default';
  };

  return (
    <group
      ref={groupRef}
      position={position}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      {children}

      {/* Glow effect when hovered */}
      {hovered && !activeSection && (
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshBasicMaterial
            color="#00ff88"
            transparent
            opacity={0.1}
            side={THREE.BackSide}
          />
        </mesh>
      )}

      {/* Hover label */}
      {showLabel && (
        <Html
          position={labelOffset}
          center
          style={{
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.9)',
              border: '2px solid #00ff88',
              borderRadius: '6px',
              padding: '8px 14px',
              fontFamily: "'Space Mono', monospace",
              fontSize: '13px',
              fontWeight: '600',
              color: '#00ff88',
              whiteSpace: 'nowrap',
              boxShadow: '0 0 20px rgba(0, 255, 136, 0.5), 0 0 40px rgba(0, 255, 136, 0.3)',
              animation: 'pulse 1.5s ease-in-out infinite',
            }}
          >
            Click to view {SECTION_LABELS[section]}
          </div>
        </Html>
      )}
    </group>
  );
};
