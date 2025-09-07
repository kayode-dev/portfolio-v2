import { EXPERIENCE } from "@/lib/constants";
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
      <div className="space-y-3 box-border group md:space-y-6">
        <h2 className="text-lg md:text-xl group-hover:text-sky-400 duration-500 font-semibold">
          {props.jobTitle} · {props.companyName}
        </h2>
        <p className="uppercase text-neutral-400 text-sm">
          {props.employmentType} · {props.startDate} - {props.endDate}
        </p>
        <p className="leading-relaxed font-medium text-neutral-400 text-sm md:text-lg">
          {props.description}
        </p>
        <ul className="space-y-3 list-disc list-outside text-sm md:text-base pl-5 text-neutral-400">
          {props.points?.map((p) => (
            <li key={p} className="">
              {p}
            </li>
          ))}
        </ul>

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

export const ExperienceList = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-8">
        {EXPERIENCE.map((exp) => (
          <ExperienceCard key={exp.companyName} {...exp} />
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
