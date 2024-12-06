import { LayoutSection } from "./components/layout-section";
import Image from "next/image";
import sideheroImage from "../app/assets/memojipeace.png";
import kayode from "../app/assets/kayode.jpg";
import { ExperienceList } from "./components/experience/experience-list";
import { ProjectList } from "./components/project-list";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full md:mt-8">
      <div className="space-y-20 w-full">
        <div className="flex flex-col w-full items-center gap-10 md:flex-row-reverse justify-between">
          <div className="relative">
            <div className="size-52 min-w-52 rounded-full border-4 border-sky-400 p-1 overflow-hidden">
              <Image
                src={kayode}
                alt="Kayode Babalola"
                className="w-full rounded-full"
                placeholder="blur"
              />
            </div>
            <Image
              src={sideheroImage}
              alt="Kayode Babalola"
              width={70}
              height={70}
              className="absolute bottom-0 right-0 z-10"
              placeholder="blur"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold">Kayode Babalola</h2>
            <p className="md:text-xl text-neutral-400">Frontend Developer🏌🏾‍♂️</p>
            <p className="text-base md:text-balance md:text-lg">
              I am a frontend developer with over three years of experience,
              specializing in React.js and Next.js. I’m also proficient with
              Microsoft frameworks like Blazor and Razor Pages. While I
              currently focus on frontend development, I have a strong interest
              in expanding my skills to become a fullstack developer. I thrive
              on solving problems, learning new technologies, and creating
              seamless, user-friendly web experiences. I enjoy tackling
              challenges, exploring innovative solutions, and continuously
              expanding my knowledge to grow as a developer.
            </p>
          </div>
        </div>
        <LayoutSection id="exp" title="#exp">
          <ExperienceList />
        </LayoutSection>
        <LayoutSection id="projects" title="#projects">
          <ProjectList />
        </LayoutSection>
        <LayoutSection id="contact" title="#contact">
          <Link href={"mailto:babalolakayode44@gmail.com"}>
            babalolakayode44@gmail.com
          </Link>
        </LayoutSection>
        <LayoutSection id="listening" title="now listening...">
          <iframe
            title="spotify playlist"
            className="rounded-2xl"
            src="https://open.spotify.com/embed/playlist/3g1wkGVS4b2vuhrTEOKGej?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            id="player"
          ></iframe>
        </LayoutSection>
      </div>
    </div>
  );
}
