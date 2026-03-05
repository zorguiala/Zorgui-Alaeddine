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
    id: 'NICE on Success',
    title: 'NICE on Success',
    description:
      'The extension automatically plays meme celebratory sounds when your tasks and commands succeed, and different sounds when they fail.',
    technologies: ['TypeScript', 'VScode Extensions', 'JavaScript'],
    github: 'https://github.com/zorguiala/NICE-on_Success',
    live: 'https://marketplace.visualstudio.com/items?itemName=Alaeddinezorgui.nice-on-success',
    status: 'completed',
  },
  {
    id: 'Odoo mcp',
    title: 'Odoo MCP',
    description:
      'An extension for Odoo that provides a modern UI for managing and customizing your Odoo instance.',
    technologies: ['TypeScript', 'VScode Extensions', 'JavaScript'],
    github: 'https://github.com/zorguiala/Odoo-MCP',
    live: null,
    status: 'completed',
  },
];
