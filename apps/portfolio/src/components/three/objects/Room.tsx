import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Room = () => {
  const sunlightRef = useRef<THREE.Mesh>(null);

  // Create sky texture
  const skyTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createLinearGradient(0, 0, 0, 256);
    gradient.addColorStop(0, '#87CEEB');
    gradient.addColorStop(0.5, '#B0E0E6');
    gradient.addColorStop(1, '#E0F6FF');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);
    // Add simple clouds
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.beginPath();
    ctx.arc(80, 60, 30, 0, Math.PI * 2);
    ctx.arc(100, 60, 35, 0, Math.PI * 2);
    ctx.arc(120, 60, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(180, 100, 25, 0, Math.PI * 2);
    ctx.arc(195, 100, 30, 0, Math.PI * 2);
    ctx.arc(210, 100, 25, 0, Math.PI * 2);
    ctx.fill();
    return new THREE.CanvasTexture(canvas);
  }, []);

  // Create realistic wood floor texture
  const woodTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    
    // Base wood color
    ctx.fillStyle = '#8B5A2B';
    ctx.fillRect(0, 0, 512, 512);
    
    // Wood grain pattern
    for (let i = 0; i < 8; i++) {
      const y = (i * 64) + 32;
      const gradient = ctx.createLinearGradient(0, y - 10, 0, y + 10);
      
      // Dark grain lines
      gradient.addColorStop(0, '#6B4423');
      gradient.addColorStop(0.3, '#8B5A2B');
      gradient.addColorStop(0.5, '#A0522D');
      gradient.addColorStop(0.7, '#8B5A2B');
      gradient.addColorStop(1, '#6B4423');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, y - 5, 512, 10);
      
      // Add wood knots and variations
      if (i % 3 === 0) {
        ctx.fillStyle = '#654321';
        ctx.beginPath();
        ctx.arc(100 + i * 60, y, 15, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Add subtle noise for texture
    const imageData = ctx.getImageData(0, 0, 512, 512);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 10;
      data[i] = Math.max(0, Math.min(255, data[i] + noise));
      data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
      data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise));
    }
    ctx.putImageData(imageData, 0, 0);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(6, 5); // Repeat pattern for larger floor
    return texture;
  }, []);

  // Animate sunlight rays
  useFrame((state) => {
    if (sunlightRef.current) {
      const material = sunlightRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.08 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });

  return (
    <group>
      {/* Floor - realistic wood texture */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[12, 10]} />
        <meshStandardMaterial
          map={woodTexture}
          metalness={0.05}
          roughness={0.85}
          bumpScale={0.3}
        />
      </mesh>

      {/* Back wall - blue like reference */}
      <mesh receiveShadow position={[0, 3, -3]}>
        <planeGeometry args={[12, 6]} />
        <meshStandardMaterial
          color="#3d5a80"
          metalness={0.05}
          roughness={0.9}
        />
      </mesh>

      {/* Main portfolio text - centered and visible */}
      <WallText
        position={[0, 4.2, -2.95]}
        rotation={[0, 0, 0]}
        text="I am a frontend developer"
        size={0.2}
        color="#00ff88"
      />
      <WallText
        position={[0, 3.8, -2.95]}
        rotation={[0, 0, 0]}
        text="This is my portfolio"
        size={0.18}
        color="#00d4ff"
      />
      
      {/* Instructions text - positioned for visibility */}
      <WallText
        position={[-2.5, 2.2, -2.95]}
        rotation={[0, 0, 0]}
        text="Click objects to explore"
        size={0.12}
        color="#00ff88"
      />
      <WallText
        position={[2.5, 2.2, -2.95]}
        rotation={[0, 0, 0]}
        text="Hover for hints"
        size={0.12}
        color="#00d4ff"
      />

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

      {/* Window on back wall - redesigned with depth */}
      <group position={[2, 2.8, -2.95]}>
        {/* Sky background behind window - further back */}
        <mesh position={[0, 0, -0.3]}>
          <planeGeometry args={[2.5, 2.5]} />
          <meshBasicMaterial map={skyTexture} />
        </mesh>

        {/* Window frame outer - thick wooden frame with depth */}
        <mesh castShadow position={[0, 0, -0.05]}>
          <boxGeometry args={[2.4, 2.4, 0.15]} />
          <meshStandardMaterial color="#654321" metalness={0.1} roughness={0.8} />
        </mesh>

        {/* Window frame inner - reveals glass area */}
        <mesh position={[0, 0, 0.02]}>
          <boxGeometry args={[1.95, 1.95, 0.12]} />
          <meshStandardMaterial color="#8B4513" metalness={0.1} roughness={0.7} />
        </mesh>

        {/* Window glass panes - 4 panes with dividers */}
        {/* Top left pane */}
        <mesh position={[-0.475, 0.475, 0.08]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.15}
            metalness={0.05}
            roughness={0.05}
            envMapIntensity={1}
          />
        </mesh>
        {/* Top right pane */}
        <mesh position={[0.475, 0.475, 0.08]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.15}
            metalness={0.05}
            roughness={0.05}
            envMapIntensity={1}
          />
        </mesh>
        {/* Bottom left pane */}
        <mesh position={[-0.475, -0.475, 0.08]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.15}
            metalness={0.05}
            roughness={0.05}
            envMapIntensity={1}
          />
        </mesh>
        {/* Bottom right pane */}
        <mesh position={[0.475, -0.475, 0.08]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.15}
            metalness={0.05}
            roughness={0.05}
            envMapIntensity={1}
          />
        </mesh>

        {/* Window dividers - vertical */}
        <mesh position={[0, 0, 0.09]} castShadow>
          <boxGeometry args={[0.06, 1.95, 0.08]} />
          <meshStandardMaterial color="#654321" metalness={0.1} roughness={0.7} />
        </mesh>
        {/* Window dividers - horizontal */}
        <mesh position={[0, 0, 0.09]} castShadow>
          <boxGeometry args={[1.95, 0.06, 0.08]} />
          <meshStandardMaterial color="#654321" metalness={0.1} roughness={0.7} />
        </mesh>

        {/* Window sill - deeper and more realistic */}
        <mesh position={[0, -1.2, 0.2]} castShadow>
          <boxGeometry args={[2.6, 0.12, 0.4]} />
          <meshStandardMaterial color="#A0522D" metalness={0.1} roughness={0.7} />
        </mesh>
        {/* Window sill front edge */}
        <mesh position={[0, -1.2, 0.4]} castShadow>
          <boxGeometry args={[2.6, 0.12, 0.05]} />
          <meshStandardMaterial color="#8B4513" metalness={0.1} roughness={0.7} />
        </mesh>

        {/* Plants on window sill */}
        <WindowPlant position={[-0.6, -1.05, 0.25]} />
        <WindowPlant position={[0.3, -1.05, 0.25]} scale={0.8} />
        <WindowPlant position={[0.8, -1.05, 0.25]} scale={0.9} />
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

// Wall text component
const WallText = ({
  position,
  rotation,
  text,
  size = 0.1,
  color = '#00ff88',
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  text: string;
  size?: number;
  color?: string;
}) => {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    const scale = 4;
    canvas.width = text.length * 40 * scale;
    canvas.height = 80 * scale;
    const ctx = canvas.getContext('2d')!;
    
    // Add glow effect
    ctx.shadowColor = color;
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    
    ctx.fillStyle = color;
    ctx.font = `bold ${48 * scale}px "Space Mono", monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, [text, color]);

  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[size * text.length * 0.5, size * 0.8]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
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
