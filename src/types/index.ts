export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type:
    | "conference"
    | "journal"
    | "workshop"
    | "preprint"
    | "book"
    | "book-chapter";
  paper?: string;
  code?: string;
  website?: string;
  arxiv?: string;
  doi?: string;
  abstract?: string;
  featured?: boolean;
  note?: string; // For pen names, alternative author names, or other publication notes
  yourPenName?: string; // Your pen name if used in this publication (will be bolded like your real name)
  authorAnnotations?: { [authorName: string]: string }; // Map author names to annotations (e.g., "*", "†", "‡")
  authorNote?: string; // Explanation of author annotations (e.g., "* Equal contribution" or "‡ Corresponding author")
}

export interface Project {
  title: string;
  description: string[];
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  paper?: string;
  featured?: boolean;
  startDate?: string;
  endDate?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  gpa?: string;
  advisor?: string;
  focus?: string;
}

export interface Experience {
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  type: "research" | "industry" | "teaching" | "other";
}

export interface Profile {
  name: string;
  title: string;
  institution: string;
  department: string;
  email: string;
  bio: string;
  researchInterests: string[];
  socialLinks: SocialLinks;
  avatar?: string;
  cv?: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  scholar?: string;
  orcid?: string;
  semanticScholar?: string;
}

export interface Skill {
  category: string;
  items: string[];
}
