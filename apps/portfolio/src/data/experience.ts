import { Experience } from '@/types';

export const experience: Experience[] = [
  {
    company: 'DomDom',
    role: 'Freelance Developer',
    period: '01/2025 – Present',
    duration: '1 year 2 months',
    description:
      'Configured ERP systems and built custom manufacturing web tools and AI integrations.',
    highlights: [
      'Installed and configured Odoo ERP for a local manufacturing business, setting up modules for inventory, billing, and production.',
      'Built a custom ERP-like web tool (DomDom) tailored to manufacturing workflows, currently in active development.',
      'Created a custom Model Context Protocol (MCP) server using Node.js to connect the Odoo ERP system with AI assistants.',
      'Managed deployment, maintenance, and user training to ensure smooth adoption.',
    ],
    technologies: ['Node.js', 'TypeScript', 'React.js', 'Odoo ERP', 'Model Context Protocol (MCP)'],
  },
  {
    company: 'Toptal',
    role: 'Frontend Engineer (Core Team)',
    period: '02/2022 – 10/2024',
    duration: '2 years 8 months',
    description:
      'Worked on multiple projects as a Frontend Engineer, focusing on UI development, API integrations, and reducing technical debt in a fully remote team.',
    highlights: [
      'Worked with the engineering team to build a new UI for the enterprise Client Portal using Figma designs, increasing client conversion by 20%.',
      'Helped rebuild the Talent Portal onboarding workflow, connecting GraphQL queries and reducing candidate profile completion time from 6 weeks to 3 weeks.',
      "Helped build a new technical assessment platform and added new features to 'Picasso,' an internal Material UI-based component library.",
      'Reduced technical debt by fixing over 50 legacy tickets, using feature flags for safe rollouts, and restoring disabled Jest test suites.',
      'Maintained platform reliability by investigating Sentry bug reports, writing Jest and Cypress tests, and doing daily code reviews.',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'GraphQL',
      'Jest',
      'Cypress',
      'React Query',
      'Sentry',
      'Git',
      'Ruby',
    ],
  },
  {
    company: 'Akeoplus',
    role: 'Frontend & Mobile Engineer',
    period: '09/2018 – 02/2022',
    duration: '3 years 5 months',
    description:
      'Worked in a fast-paced startup environment building IoT dashboards, mobile apps, and maintaining full-stack legacy systems.',
    highlights: [
      'Built interactive React dashboards for IoT systems to display real-time machine data.',
      "Worked on 'Zest,' an energy monitoring project allowing users to track power usage and control devices via smart plugs.",
      'Created a Cordova-based mobile app for the Zest project to enable remote monitoring from smartphones.',
      'Designed and coded frontend user interfaces from scratch, including a secure internal file-sharing tool with user permissions.',
      'Fixed bugs and added features to a legacy Laravel project, integrating REST APIs and optimizing SQL queries.',
    ],
    technologies: [
      'React.js',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Cordova',
      'REST APIs',
      'SQL',
      'PHP (Laravel)',
    ],
  },
];
