import citiesData from '@/data/cities.json';
import jobsData from '@/data/job-titles.json';

export interface City {
  city: string;
  state: string;
  slug: string;
  companies: string[];
  avgSalary: string;
  jobBoard: string;
}

export interface JobTitle {
  title: string;
  slug: string;
  skills: string[];
  certifications: string[];
  salaryRange: string;
  sampleBullets: string[];
}

export const cities: City[] = citiesData;
export const jobTitles: JobTitle[] = jobsData;

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getJobBySlug(slug: string): JobTitle | undefined {
  return jobTitles.find((job) => job.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug);
}

export function getAllJobSlugs(): string[] {
  return jobTitles.map((job) => job.slug);
}
