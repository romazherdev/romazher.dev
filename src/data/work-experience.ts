import type { WorkExpItem } from '../models/work-exp-item';

export const WORK_EXPERIENCE: WorkExpItem[] = [
  {
    company: 'Pure Storage',
    location: 'Prague, Czechia',
    dateStart: 'Apr 2023',
    dateEnd: 'Now',
    title: 'Senior Software Engineer',
    projects: [
      {
        description: 'Maintaining multiple frontend applications (including microfrontend),'
          + ' designing and integrating new features into a big microservice ecosystem,'
          + ' making sure nothing explodes :)',
        technologies: ['Angular', 'single-spa', 'K8S', 'Gradle', 'Java'],
      },
    ],
  },
  {
    company: 'EPAM Systems',
    location: 'Prague, Czechia',
    dateStart: 'Sep 2019',
    dateEnd: 'Jan 2023',
    title: 'Software Engineer -> Lead Software Engineer',
    projects: [
      {
        description:
          'Leading a frontend team that is building a food delivery service',
        technologies: ['NEXT.js', 'GraphQL', 'Apollo Client'],
      },
      {
        description:
          'Playing a key developer role in a frontend team, creating an AI solution for annotating compliance conditions in documents',
        technologies: ['Nx', 'Angular', 'NestJS', 'NgRx'],
      },
      {
        description:
          'Participating in development of a cargo delivery tracking system with complex itineraries',
        technologies: ['Angular'],
      },
    ],
  },
  {
    company: 'AIS Novations',
    location: 'Gomel, Belarus',
    dateStart: 'Jun 2018',
    dateEnd: 'Aug 2019',
    title: 'Full Stack Developer (Angular + Node)',
    projects: [
      {
        description:
          'Leading a small frontend team that was developing a frontend- application for a real-time irrigation control system',
        technologies: ['Angular', 'Socket.io'],
      },
      {
        description:
          'Building a UI of a kiosk application for a well-known fast food franchise',
        technologies: ['Angular'],
      },
      {
        description:
          'Developing plenty of SEO friendly websites with SSR, and custom admin panels',
        technologies: ['Angular', 'SSR', 'Express', 'MongoDB'],
      },
    ],
  },
  {
    company: 'Freelance',
    dateStart: '2016',
    dateEnd: '2018',
    projects: [
      {
        description: 'Developing corporate websites with popular CMS/CMF',
        technologies: ['HTML', 'Sass', 'jQuery', 'Gulp', 'MODX', 'Wordpress'],
      },
    ],
  },
];
