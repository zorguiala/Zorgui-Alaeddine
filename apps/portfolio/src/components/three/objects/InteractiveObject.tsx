import { useState, useRef, ReactNode } from 'react';
import { useFrame } from '@react-three/fiber';
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

  // Hover animation
  useFrame((_, delta) => {
    if (!groupRef.current) return;
    
    const targetScale = hovered && !activeSection ? HOVER_SCALE : 1;
    const currentScale = groupRef.current.scale.x;
    const newScale = THREE.MathUtils.lerp(currentScale, targetScale, delta * 8);
    groupRef.current.scale.setScalar(newScale);
  });

  const handleClick = (e: THREE.Event) => {
    e.stopPropagation();
    if (isTransitioning || isActive) return;
    setActiveSection(section);
  };

  const handlePointerOver = (e: THREE.Event) => {
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
              background: 'rgba(0, 0, 0, 0.85)',
              border: '1px solid #00ff88',
              borderRadius: '4px',
              padding: '6px 12px',
              fontFamily: "'Space Mono', monospace",
              fontSize: '12px',
              color: '#00ff88',
              whiteSpace: 'nowrap',
              boxShadow: '0 0 10px rgba(0, 255, 136, 0.3)',
            }}
          >
            {SECTION_LABELS[section]}
          </div>
        </Html>
      )}
    </group>
  );
};

