import { ProjectProps } from "@/lib/types";
import Image from "next/image";
import { StackPill } from "./experience-list";
import Link from "next/link";
import { GithubIcon } from "../assets/icons/github-icon";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

const ProjectCard = ({
  image,
  title,
  comingSoon,
  githubUrl,
  liveUrl,
  description,
  stacks,
}: ProjectProps) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row rounded-lg group gap-5 w-full p-4 overflow-hidden border border-neutral-800 drop-shadow-lg duration-300 bg-neutral-800/60">
        <div className="relative rounded-lg overflow-hidden md:w-4/5">
          <Image
            src={image}
            alt={title}
            className="h-full w-full object-cover rounded-lg"
            placeholder="blur"
          />
          {comingSoon && (
            <div className="rounded-lg absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
              <p className="text-2xl font-semibold text-neutral-400">
                Coming Soon
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between gap-3 min-h-full w-full">
          <div className="flex items-center justify-between w-full">
            <h4 className="text-2xl font-semibold">{title}</h4>
            <div className="flex items-center gap-6">
              {githubUrl && (
                <Link
                  href={githubUrl}
                  className="fill-white hover:fill-sky-400 duration-200 ease-in"
                  target="_blank"
                >
                  <GithubIcon className="size-6" />
                </Link>
              )}
              {!comingSoon && (
                <Link
                  href={liveUrl}
                  className="flex items-center gap-1 duration-200 ease-in hover:text-sky-400"
                  target="_blank"
                >
                  Live Url <ArrowUpRight className="size-4 -translate-y-2" />
                </Link>
              )}
            </div>
          </div>
          <p className="text-sm md:text-base">{description}</p>
          <div className="flex flex-wrap gap-4">
            {stacks.map((stack) => (
              <StackPill key={stack} stack={stack} />
            ))}
          </div>
        </div>
      </div>
      <hr className="border-neutral-600" />
    </div>
  );
};

export const ProjectList = () => {
  return (
    <div className="space-y-6 ">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};
