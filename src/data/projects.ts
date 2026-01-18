/**
 * Projects data for Projects Showcase feature
 * Hardcoded data structure - easy to add new projects
 */

import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'wallet-app',
    slug: 'wallet-app',
    name: {
      en: 'Wallet App - Expense Manager',
      vi: 'Ứng dụng Quản lý Chi tiêu'
    },
    description: {
      en: 'Full-stack expense management application with multi-device sync, NLP text input via Gemini, and debt/loan tracking.',
      vi: 'Ứng dụng quản lý chi tiêu full-stack với đồng bộ đa thiết bị, nhập liệu bằng text qua Gemini, và theo dõi công nợ.'
    },
    shortDescription: {
      en: 'Expense manager with sync, NLP, and debt tracking',
      vi: 'Quản lý chi tiêu với đồng bộ, NLP, và theo dõi công nợ'
    },
    thumbnail: '/images/projects/wallet-app-thumbnail.svg',
    sourceCodeUrl: 'https://github.com/chinhnt-ps/wallet-app',
    techStack: ['React', 'TypeScript', 'Java Spring Boot', 'MongoDB', 'Gemini AI'],
    features: [
      'Multi-device sync',
      'NLP text input',
      'Debt/Loan tracking',
      'Budget management'
    ],
    type: 'sub-app',
    route: '/projects/wallet-app',
    status: 'active',
    createdAt: '2026-01-10',
    updatedAt: '2026-01-15'
  }
  // More projects can be added here
];

/**
 * Helper function to get project by slug
 * @param slug - Project slug
 * @returns Project or undefined if not found
 */
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

/**
 * Helper function to get active projects only
 * @returns Array of active projects
 */
export const getActiveProjects = (): Project[] => {
  return projects.filter(p => p.status === 'active');
};

