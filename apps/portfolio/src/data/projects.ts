import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Interactive 3D Portfolio',
    description: 'This portfolio! An interactive 3D experience built with React and Three.js.',
    technologies: ['React', 'Three.js', 'TypeScript', 'styled-components'],
    github: 'https://github.com/zorguiala/Zorgui-Alaeddine',
    live: null,
    status: 'completed',
  },
  {
    id: 'placeholder-1',
    title: 'Coming Soon',
    description: 'New project in development...',
    technologies: [],
    github: null,
    live: null,
    status: 'upcoming',
  },
  {
    id: 'placeholder-2',
    title: 'Coming Soon',
    description: 'New project in development...',
    technologies: [],
    github: null,
    live: null,
    status: 'upcoming',
  },
];

