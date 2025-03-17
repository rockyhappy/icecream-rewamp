// Import JSON data
import blogPostsData from '@/data/blogPosts.json';
import teamMembersData from '@/data/teamMembers.json';
import alumniData from '@/data/alumni.json';
import servicesData from '@/data/services.json';
import technologiesData from '@/data/technologies.json';

// Type definitions
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  skills: string[];
  socialLinks: {
    linkedin: string;
    github: string;
    twitter?: string;
    behance?: string;
    medium?: string;
    kaggle?: string;
    codepen?: string;
    instagram?: string;
    [key: string]: string | undefined;
  };
}

export interface Alumni {
  id: number;
  name: string;
  batch: string;
  company: string;
  position: string;
  image: string;
  testimonial: string;
  socialLinks: {
    linkedin: string;
    github?: string;
    [key: string]: string | undefined;
  };
}

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
}

export interface Technology {
  id: number;
  name: string;
  image: string;
  category: string;
  description: string;
}

// API functions
export const getBlogPosts = (): BlogPost[] => {
  return blogPostsData;
};

export const getBlogPostById = (id: number): BlogPost | undefined => {
  return blogPostsData.find(post => post.id === id);
};

export const getTeamMembers = (): TeamMember[] => {
  return teamMembersData;
};

export const getAlumni = (): Alumni[] => {
  return alumniData;
};

export const getServices = (): Service[] => {
  return servicesData;
};

export const getTechnologies = (): Technology[] => {
  return technologiesData;
};

// Simulating API calls with delay
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return getBlogPosts();
};

export const fetchBlogPostById = async (id: number): Promise<BlogPost | undefined> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return getBlogPostById(id);
};

export const fetchTeamMembers = async (): Promise<TeamMember[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return getTeamMembers();
};

export const fetchAlumni = async (): Promise<Alumni[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return getAlumni();
};

export const fetchServices = async (): Promise<Service[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return getServices();
};

export const fetchTechnologies = async (): Promise<Technology[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return getTechnologies();
}; 