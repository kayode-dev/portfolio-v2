import { StaticImageData } from "next/image";

export interface ExperienceProps {
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  employmentType: string;
  points?: string[];
  description: string;
  link: string;
  stacks: string[];
}

export interface ProjectProps {
  title: string;
  image: StaticImageData;
  description: string;
  liveUrl: string;
  githubUrl?: string;
  stacks: string[];
  comingSoon?: boolean;
}
