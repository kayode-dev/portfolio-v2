import { ExperienceProps } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const StackPill = ({ stack }: { stack: string }) => {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-neutral-600/50 bg-neutral-800/60 px-4 py-1 text-xs">
      {stack}
    </div>
  );
};
export const ExperienceCard = ({ ...props }: ExperienceProps) => {
  return (
    <div className="space-y-8">
      <div className="space-y-2 box-border group md:space-y-6">
        <h2 className="text-lg md:text-xl group-hover:text-sky-400 duration-500 font-semibold">
          {props.jobTitle} · {props.companyName}
        </h2>
        <p className="uppercase text-neutral-400 text-sm">
          {props.employmentType} · {props.startDate} - {props.endDate}
        </p>
        <p className="leading-relaxed">{props.description}</p>

        <div className="flex flex-wrap gap-2">
          {props.stacks.map((stack) => (
            <StackPill key={stack} stack={stack} />
          ))}
        </div>
      </div>
      <hr className="border-neutral-600" />
    </div>
  );
};
const Experience: ExperienceProps[] = [
  {
    companyName: "Jetron Ticket",
    jobTitle: "Frontend Engineer",
    startDate: "June 2024",
    endDate: "Present",
    employmentType: "Full time",
    description:
      "I developed high-performance webpages using Next.js, delivering fast and seamless user experiences. Through collaboration with backend developers, I ensured smooth data integration and reliable functionality. By implementing features and application flows based on UI/UX designs, I contributed to improved user engagement. I consistently explore new technologies to enhance project efficiency and actively participate in code reviews and team knowledge sharing to drive continuous improvement",
    link: "sumn",
    stacks: [
      "NEXT.js",
      "React",
      "TailwindCSS",
      "TypeScript",
      "JavaScript",
      "HeadlessUI",
    ],
  },
  {
    companyName: "Ardels",
    jobTitle: "Frontend Engineer (Contract)",
    startDate: "Mar 2024",
    endDate: "June 2024",
    employmentType: "Part time",
    description:
      "I took full ownership of the frontend development for this project, building a scalable and responsive application from using Next.js. I carefully selected packages and tools to create an optimal tech stack that balanced performance, maintainability, and efficiency. Collaborating closely with backend developers and stakeholders, I aligned the frontend implementation with project goals and business needs. I designed reusable components and streamlined workflows to improve development efficiency and ensure consistent code quality.",
    link: "sumn",
    stacks: ["Next.js", "React", "TailwindCSS", "TypeScript", "JavaScript"],
  },
  {
    companyName: "R3 Consulting Ltd",
    jobTitle: "Frontend Engineer",
    startDate: "Nov 2022",
    endDate: "Mar 2024",
    employmentType: "Full time",
    description:
      "I collaborated with cross-functional teams to develop workflows and scripts using Next.js, Blazor WASM, and Minimal API. I provided technical support to clients, handling system updates and addressing inquiries efficiently. I engineered an in-house product using Blazor, Entra ID, and Minimal API to streamline processing client complaints and requests, significantly improving client satisfaction. Additionally, I created automation scripts for backup and restore processes in company products using JavaScript, enabling faster resolution of client issues.",
    link: "sumn",
    stacks: ["Blazor", "C#", "React", "Next.js", "TailwindCSS", "Bootstrap"],
  },
];

export const ExperienceList = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-8">
        {Experience.map((experience) => (
          <ExperienceCard key={experience.companyName} {...experience} />
        ))}
      </div>
      <Link
        href="https://docs.google.com/document/d/1lpm_fKDfbpaVqLn2wSG3UJ491TFyDZKoHFzKEQH7KPs/edit?usp=sharing"
        target="_blank"
        className="flex items-center text-neutral-500 text-lg"
      >
        View Full Resume <ArrowUpRight />
      </Link>
    </div>
  );
};
