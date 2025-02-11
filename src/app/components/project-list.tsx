import { ProjectProps } from "@/lib/types";
import Image from "next/image";
import rundwn from "@/app/assets/projects/rundwn.png";
import xno from "@/app/assets/projects/xno.png";
import { StackPill } from "./experience-list";
import Link from "next/link";
import { GithubIcon } from "../assets/icons/github-icon";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ ...props }: ProjectProps) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row rounded-lg group gap-5 w-full items-center p-4 overflow-hidden border border-neutral-800 drop-shadow-lg duration-300 bg-neutral-800/60">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src={props.image}
            alt={props.title}
            className=" h-full w-full object-cover rounded-lg"
            placeholder="blur"
          />
          {props.comingSoon && (
            <div className="rounded-lg absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
              <p className="text-2xl font-semibold text-neutral-400">
                Coming Soon
              </p>
            </div>
          )}
        </div>
        <div className="space-y-4  w-full">
          <div className="flex items-center justify-between w-full">
            <h4 className="text-2xl font-semibold">{props.title}</h4>
            <div className="flex items-center gap-6">
              <Link
                href={props.githubUrl}
                className=" fill-white hover:fill-sky-400 duration-200 ease-in"
                target="_blank"
              >
                <GithubIcon className="size-6" />
              </Link>
              {!props.comingSoon && (
                <Link
                  href={props.liveUrl}
                  className="flex items-center gap-1 duration-200 ease-in hover:text-sky-400"
                  target="_blank"
                >
                  Live Url <ArrowUpRight className="size-4 -translate-y-2" />
                </Link>
              )}
            </div>
          </div>
          <p className="text-sm md:text-base">{props.description}</p>
          <div className="flex flex-wrap gap-4">
            {props.stacks.map((stack) => (
              <StackPill key={stack} stack={stack} />
            ))}
          </div>
        </div>
      </div>
      <hr className="border-neutral-600" />
    </div>
  );
};

const PROJECTS: ProjectProps[] = [
  {
    title: "Rundwn",
    description:
      "Rundwn is a web app that uses the Spotify API to provide on-demand insights into users' listening habits. It highlights top artists and activity over the past month, six months, and year, offering a seamless and interactive experience inspired by Spotify Wrapped.",
    image: rundwn,
    liveUrl: "https://rundwn.kayodedev.com/",
    githubUrl: "https://github.com/kayode-dev/wrapped-anytime",
    stacks: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "A multiplayer Tic-Tac-Toe game that tracks grid locations using a two-dimensional array and evaluates win conditions with a predefined array of possible combinations. The winner is displayed via the browser's alert system",
    image: xno,
    liveUrl: "https://xno.kayodedev.com/",
    githubUrl: "https://github.com/kayode-dev/tic-tac-toe",
    stacks: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "dualmind AI",
    description:
      "An AI-powered chatbot built with the ChatGPT-3.5 Turbo API and Google Gemini's API to handle prompts and generate images. This project highlights the capabilities of both AI models, showcasing how prompt structure influences responses and outputs.",
    image: rundwn,
    liveUrl: "#",
    githubUrl: "https://github.com/kayode-dev/dualmind",
    stacks: ["React", "Next.js", "Tailwind CSS"],
    comingSoon: true,
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
