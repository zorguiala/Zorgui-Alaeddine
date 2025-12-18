import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useSection } from '@/hooks';
import { CAMERA_POSITIONS } from '@/utils/constants';

export const CameraRig = () => {
  const { camera } = useThree();
  const { activeSection } = useSection();
  
  const targetPosition = useRef(new THREE.Vector3(...CAMERA_POSITIONS.overview.position));
  const targetLookAt = useRef(new THREE.Vector3(...CAMERA_POSITIONS.overview.target));
  const currentLookAt = useRef(new THREE.Vector3(...CAMERA_POSITIONS.overview.target));

  // Update targets when section changes
  useEffect(() => {
    const config = activeSection ? CAMERA_POSITIONS[activeSection] : CAMERA_POSITIONS.overview;
    targetPosition.current.set(...config.position);
    targetLookAt.current.set(...config.target);
  }, [activeSection]);

  useFrame((_, delta) => {
    // Smooth interpolation factor
    const lerpFactor = Math.min(delta * 2.5, 1);

    // Lerp camera position
    camera.position.lerp(targetPosition.current, lerpFactor);

    // Lerp look-at target
    currentLookAt.current.lerp(targetLookAt.current, lerpFactor);
    camera.lookAt(currentLookAt.current);
  });

  return null;
};

