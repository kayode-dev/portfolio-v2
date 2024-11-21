import { LayoutSection } from "./components/layout-section";
import Image from "next/image";
import sideheroImage from "../app/assets/memojipeace.png";
import kayode from "../app/assets/kayode.jpg";
import { ExperienceList } from "./components/experience/experience-list";

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
              />
            </div>
            <Image
              src={sideheroImage}
              alt="Kayode Babalola"
              width={70}
              height={70}
              className="absolute bottom-0 right-0 z-10"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl md:text-5xl font-bold">Kayode Babalola</h2>
            <p className="md:text-xl text-neutral-400">Frontend Developer🏌🏾‍♂️</p>
            <p className="text-base md:text-balance md:text-lg">
              Hello! Im Kayode, a Front-end developer who loves implementing
              web-designs, meeting clients expectations and can easily center my
              div&apos;s. I am a self-taught developer who has been programming,
              hence my underlying interest in becoming a Fullstack Developer.
            </p>
          </div>
        </div>
        <LayoutSection id="exp" title="#exp">
          <ExperienceList />
        </LayoutSection>
        <LayoutSection id="stack" title="#stack">
          Stuff(Tech stack)
        </LayoutSection>
        <LayoutSection id="education" title="#education">
          Stuff(Education)
        </LayoutSection>
        <LayoutSection id="projects" title="#projects">
          <p>Stuff (Projects)</p>
        </LayoutSection>
      </div>
    </div>
  );
}
