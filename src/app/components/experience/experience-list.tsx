import { ExperienceProps } from "@/utils/types";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const StackPill = ({ stack }: { stack: string }) => {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-neutral-600/50 bg-neutral-800/60 px-4 py-1 text-sm">
      {stack}
    </div>
  );
};
export const ExperienceCard = ({ ...props }: ExperienceProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2 group md:space-y-4 p-3 md:p-4 rounded-lg border border-transparent duration-500 ease-in hover:border-neutral-600 hover:bg-neutral-800/60">
        <h2 className="text-lg md:text-xl group-hover:text-sky-400 duration-500 font-semibold">
          {props.jobTitle} · {props.companyName}
        </h2>
        <p className="uppercase text-neutral-400 text-sm">
          {props.employmentType} · {props.startDate} - {props.endDate}
        </p>
        <p>{props.description}</p>

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
    jobTitle: "Frontend Developer",
    startDate: "June 2024",
    endDate: "Present",
    employmentType: "Full time",
    description:
      "I have designed and developed high-performance websites using Next.js, delivering fast and seamless user experiences. Through collaboration with backend developers, I ensured smooth data integration and reliable functionality. By implementing features and application flows based on UI/UX designs, I contributed to improved user engagement. I consistently explore new technologies to enhance project efficiency and actively participate in code reviews and team knowledge sharing to drive continuous improvement",
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
    jobTitle: "Frontend Developer (Contract)",
    startDate: "Mar 2024",
    endDate: "June 2024",
    employmentType: "Part time",
    description: "sumn sumn sumn",
    link: "sumn",
    stacks: ["NEXT.js", "React", "TailwindCSS", "TypeScript", "JavaScript"],
  },
  {
    companyName: "R3 Consulting Ltd",
    jobTitle: "Frontend Developer",
    startDate: "Nov 2022",
    endDate: "Mar 2024",
    employmentType: "Full time",
    description: "sumn sumn sumn",
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
      <Link href="" className="flex items-center text-neutral-500 text-lg">
        View Full Resume <ArrowUpRight />
      </Link>
    </div>
  );
};
