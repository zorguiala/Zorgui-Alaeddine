import { Experience } from '@/types';

export const experience: Experience[] = [
  {
    company: 'Toptal',
    role: 'Frontend Engineer (Core Team)',
    period: '02/2022 – 10/2024',
    duration: '2 years 8 months',
    description:
      'Worked on multiple projects as a Frontend Engineer, as well as long-term support and maintenance.',
    highlights: [
      'Designed and developed a technical assessment platform for HR teams',
      'Improved Talent Portal onboarding: reduced time from 6 weeks to ~3 weeks',
      'Redesigned Client Portal UI: 15% increase in hiring completion rate',
      'Built applications using React, Next.js, TypeScript, GraphQL',
      'Extended backend APIs using Ruby on Rails',
      'Performed code reviews and participated in Agile ceremonies',
      'Monitored errors with LogRocket and Sentry',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Apollo', 'Jest', 'Cypress', 'Rails'],
  },
  {
    company: 'Akeoplus',
    role: 'Frontend / Backend / Mobile Engineer',
    period: '09/2018 – 02/2022',
    duration: '3 years 5 months',
    description:
      'Worked on industrial and IoT-focused projects involving web, mobile, and backend systems.',
    highlights: [
      'Developed hybrid mobile app for monitoring industrial machines (Cordova)',
      'Built web app with 3D product visualizations using Three.js',
      'Created dashboards displaying real-time machine statuses',
      'Maintained middleware services with Laravel (PHP)',
    ],
    technologies: ['JavaScript', 'HTML/CSS', 'Cordova', 'Three.js', 'Laravel', 'PHP'],
  },
];

