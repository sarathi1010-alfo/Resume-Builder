import { useState, useEffect } from 'react';
import { ResumeData } from '@/types/resume';

const initialData: ResumeData = {
  contact: {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/johndoe',
  },
  summary: 'Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly.',
  experience: [
    {
      id: '1',
      company: 'Tech Solutions Inc.',
      position: 'Senior Software Engineer',
      startDate: 'Jan 2020',
      endDate: 'Present',
      current: true,
      location: 'San Francisco, CA',
      description: 'Led a team of 5 engineers to rebuild the core platform architecture.\nReduced load times by 40% resulting in a 15% increase in user retention.\nImplemented automated testing, achieving 90% code coverage.',
    },
    {
      id: '2',
      company: 'Web Innovations',
      position: 'Frontend Developer',
      startDate: 'Mar 2017',
      endDate: 'Dec 2019',
      current: false,
      location: 'New York, NY',
      description: 'Developed responsive user interfaces using React and Redux.\nCollaborated with designers to ensure pixel-perfect implementation.\nOptimized web applications for maximum speed and scalability.',
    }
  ],
  education: [
    {
      id: '1',
      institution: 'University of Technology',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: 'Sep 2013',
      endDate: 'May 2017',
      current: false,
      location: 'Boston, MA',
      score: '3.8 GPA'
    }
  ],
  skills: 'JavaScript, TypeScript, React, Next.js, Node.js, Python, SQL, Git, Docker, AWS',
};

export function useResumeStore() {
  const [data, setData] = useState<ResumeData>(initialData);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('resume-data');
    if (saved) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setData(JSON.parse(saved));
      } catch {
        console.error('Failed to parse saved resume data');
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to local storage on change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('resume-data', JSON.stringify(data));
    }
  }, [data, isLoaded]);

  const updateContact = (contact: Partial<ResumeData['contact']>) => {
    setData((prev) => ({ ...prev, contact: { ...prev.contact, ...contact } }));
  };

  const updateSummary = (summary: string) => {
    setData((prev) => ({ ...prev, summary }));
  };

  const updateSkills = (skills: string) => {
    setData((prev) => ({ ...prev, skills }));
  };

  const addExperience = () => {
    setData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now().toString(),
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          current: false,
          location: '',
          description: '',
        },
      ],
    }));
  };

  const updateExperience = (id: string, exp: Partial<ResumeData['experience'][0]>) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.map((e) => (e.id === id ? { ...e, ...exp } : e)),
    }));
  };

  const removeExperience = (id: string) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.filter((e) => e.id !== id),
    }));
  };

  const addEducation = () => {
    setData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: Date.now().toString(),
          institution: '',
          degree: '',
          field: '',
          startDate: '',
          endDate: '',
          current: false,
          location: '',
        },
      ],
    }));
  };

  const updateEducation = (id: string, edu: Partial<ResumeData['education'][0]>) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.map((e) => (e.id === id ? { ...e, ...edu } : e)),
    }));
  };

  const removeEducation = (id: string) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.filter((e) => e.id !== id),
    }));
  };

  return {
    data,
    updateContact,
    updateSummary,
    updateSkills,
    addExperience,
    updateExperience,
    removeExperience,
    addEducation,
    updateEducation,
    removeEducation,
  };
}
