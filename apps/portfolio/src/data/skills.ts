import { Skill } from '@/types';

export const skills: Record<string, Skill[]> = {
  frontend: [
    { name: 'React.js', level: 95, years: 5 },
    { name: 'Next.js', level: 90, years: 4 },
    { name: 'TypeScript', level: 90, years: 4 },
    { name: 'JavaScript', level: 95, years: 6 },
    { name: 'HTML5/CSS3', level: 95, years: 6 },
    { name: 'styled-components', level: 85, years: 3 },
    { name: 'Apollo GraphQL', level: 80, years: 2 },
    { name: 'React Query', level: 85, years: 2 },
  ],
  testing: [
    { name: 'Jest', level: 85, years: 3 },
    { name: 'Cypress', level: 80, years: 2 },
    { name: 'Storybook', level: 75, years: 2 },
    { name: 'Happo', level: 70, years: 1 },
  ],
  backend: [
    { name: 'Node.js', level: 70, years: 3 },
    { name: 'Ruby on Rails', level: 60, years: 2 },
    { name: 'PHP/Laravel', level: 65, years: 2 },
  ],
  tools: [
    { name: 'Git/GitHub', level: 90, years: 5 },
    { name: 'Docker', level: 65, years: 2 },
    { name: 'Figma', level: 75, years: 3 },
    { name: 'Jira/Kanban', level: 85, years: 4 },
  ],
};
