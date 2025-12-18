export type Section = 'about' | 'skills' | 'experience' | 'projects' | 'contact';
export type Theme = 'dark' | 'light';

export interface CameraPosition {
  position: [number, number, number];
  target: [number, number, number];
  fov: number;
}

export interface Skill {
  name: string;
  level: number;
  years: number;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  duration: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string | null;
  live: string | null;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  openToRelocation: boolean;
  email: string;
  phone: string;
  social: {
    linkedin: string;
    github: string;
  };
  summary: string;
  languages: { name: string; level: string }[];
  interests: string[];
}

