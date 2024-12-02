import { ProjectProps } from "@/utils/types";
import Image from "next/image";
import rundwn from "@/app/assets/projects/rundwn.png";
import xno from "@/app/assets/projects/xno.png";
import { StackPill } from "./experience/experience-list";
import Link from "next/link";
import { Github } from "lucide-react";
const ProjectCard = ({ ...props }: ProjectProps) => {
  return (
    <div className="flex gap-5 w-full p-4 rounded-lg">
      <Image
        src={props.image}
        alt=""
        className="w-52 rounded-lg"
        placeholder="blur"
      />
      <div className="space-y-4  w-full">
        <div className="flex items-center justify-between w-full">
          <h4 className="text-2xl font-semibold">{props.title}</h4>
          <div className="flex items-center gap-4">
            <Link href={props.githubUrl}>
              <Github />
            </Link>
            <Link href={props.liveUrl}>Live</Link>
          </div>
        </div>
        <p>{props.description}</p>
        <div className="flex flex-wrap gap-4">
          {props.stacks.map((stack) => (
            <StackPill key={stack} stack={stack} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PROJECTS: ProjectProps[] = [
  {
    title: "Rundwn",
    description: "Sum  Sumn",
    image: rundwn,
    liveUrl: "https://sumn.com",
    githubUrl: "https://sumn.com",
    stacks: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Tic-Tac-Toe",
    description: "Sum  Sumn",
    image: xno,
    liveUrl: "https://sumn.com",
    githubUrl: "https://sumn.com",
    stacks: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "KayGpt",
    description: "Sum  Sumn",
    image: rundwn,
    liveUrl: "https://sumn.com",
    githubUrl: "https://sumn.com",
    stacks: ["React", "Next.js", "Tailwind CSS"],
  },
];

export const ProjectList = () => {
  return (
    <div className="space-y-6 ">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};
