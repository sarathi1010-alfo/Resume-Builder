export interface Contact {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  website?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  location: string;
  description: string; // Will be split by newlines for bullets
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  current: boolean;
  location: string;
  score?: string; // GPA etc.
}

export interface ResumeData {
  contact: Contact;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string; // Comma separated for MVP
}
