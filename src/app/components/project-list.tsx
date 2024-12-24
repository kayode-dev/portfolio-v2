import { ProjectProps } from "@/utils/types";
import Image from "next/image";
import rundwn from "@/app/assets/projects/rundwn.png";
import xno from "@/app/assets/projects/xno.png";
import { StackPill } from "./experience-list";
import Link from "next/link";
import { Github } from "lucide-react";
const ProjectCard = ({ ...props }: ProjectProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 w-full items-center p-4 rounded-lg">
      <Image
        src={props.image}
        alt=""
        className="md:w-1/4 md:h-max rounded-lg object-cover"
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
    description:
      "Rundwn is a web app that uses the Spotify API to provide on-demand insights into users' listening habits. It highlights top artists and activity over the past month, six months, and year, offering a seamless and interactive experience inspired by Spotify Wrapped.",
    image: rundwn,
    liveUrl: "https://sumn.com",
    githubUrl: "https://sumn.com",
    stacks: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "A multiplayer Tic-Tac-Toe game that tracks grid locations using a two-dimensional array and evaluates win conditions with a predefined array of possible combinations. The winner is displayed via the browser's alert system",
    image: xno,
    liveUrl: "https://sumn.com",
    githubUrl: "https://sumn.com",
    stacks: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "KayGpt",
    description:
      "An AI-powered chatbot built with the ChatGPT-3.5 Turbo API and Google Gemini's API to handle prompts and generate images. This project highlights the capabilities of both AI models, showcasing how prompt structure influences responses and outputs.",
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
