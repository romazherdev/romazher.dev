export interface Project {
  description: string;
  technologies: string[];
}

export interface WorkExpItem {
  company: string;
  dateStart: string;
  dateEnd: string;
  projects: Project[];
  title?: string;
  location?: string;
}
