import { CameraPosition, Section } from '@/types';

// Camera positions - adjusted for room view
export const CAMERA_POSITIONS: Record<'overview' | Section, CameraPosition> = {
  overview: {
    position: [2, 3.5, 5],
    target: [0, 1, 0],
    fov: 50,
  },
  about: {
    position: [0, 2, 1.5],
    target: [0, 1.6, -0.3],
    fov: 45,
  },
  contact: {
    position: [0.3, 1.6, 2],
    target: [0.3, 1.2, 0.5],
    fov: 40,
  },
  skills: {
    position: [-1, 1.8, 1.5],
    target: [-0.8, 1, 0],
    fov: 50,
  },
  experience: {
    position: [1.3, 1.8, 1.5],
    target: [1, 1.1, 0],
    fov: 45,
  },
  projects: {
    position: [1.5, 1.5, 1.8],
    target: [1.3, 1, 0.4],
    fov: 45,
  },
};

export const TRANSITION_DURATION = 1.5;
export const HOVER_SCALE = 1.05;

export const SECTION_LABELS: Record<Section, string> = {
  about: 'About Me',
  skills: 'Skills',
  experience: 'Experience',
  projects: 'Projects',
  contact: 'Contact',
};

// Object positions - adjusted for desk height 0.79
export const OBJECT_POSITIONS = {
  desk: [0, 0, 0] as [number, number, number],
  monitor: [0, 1.1, -0.5] as [number, number, number],
  laptop: [0.3, 0.79, 0.3] as [number, number, number],
  toolbox: [-0.8, 0.79, 0] as [number, number, number],
  bookStack: [1, 0.79, -0.3] as [number, number, number],
  folder: [1.3, 0.79, 0.35] as [number, number, number],
  mug: [-1, 0.79, 0.4] as [number, number, number],
  plant: [1.4, 0.79, -0.6] as [number, number, number],
};
