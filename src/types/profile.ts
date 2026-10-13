export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  links: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
}

export interface WorkPreference {
  locations: string[];
  employment_types: string[];
  remote_only: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  company_url?: string;
  period: string;
  projects?: string[];
  tech_stack?: string[];
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  category?: 'mobile' | 'web' | 'canvas' | 'fullstack';
  description?: string;
  tech_stack: string[];
  live_url?: string;
  github_url?: string;
  highlights: string[];
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution?: string;
  period: string;
  details?: string;
  certificate_url?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date?: string;
  url?: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
}

export interface TechnicalSkills {
  languages: string[];
  frontend_core: string[];
  state_and_data: string[];
  canvas_and_graphics: string[];
  tools_and_platforms: string[];
}

export interface CandidateProfile {
  personal: PersonalInfo;
  target_roles: string[];
  work_preference: WorkPreference;
  summary: string;
  technical_skills: TechnicalSkills;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: (string | CertificationItem)[];
  languages: LanguageItem[];
}
