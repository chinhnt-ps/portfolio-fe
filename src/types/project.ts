/**
 * Project type definition for Projects Showcase feature
 */

export interface Project {
  id: string;
  slug: string; // URL-friendly identifier
  name: {
    en: string;
    vi: string;
  };
  description: {
    en: string;
    vi: string;
  };
  shortDescription: {
    en: string;
    vi: string;
  };
  thumbnail: string; // Image URL or path
  sourceCodeUrl: string; // GitHub/GitLab URL
  demoUrl?: string; // Optional demo URL (external)
  techStack: string[]; // Array of technologies
  features?: string[]; // Key features
  type: 'showcase' | 'demo' | 'sub-app'; // Project type
  route?: string; // Custom route if different from slug
  status: 'active' | 'coming-soon' | 'archived';
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
}

