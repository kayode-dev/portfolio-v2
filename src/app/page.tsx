import { LayoutSection } from "./components/layout-section";

export default function Home() {
  return (
    <div className="w-full md:mt-8">
      <div className="space-y-10 w-full">
        <LayoutSection id="about" title="About Me">
          <div className="flex flex-col w-full items-center gap-10 md:flex-row-reverse justify-between">
            <div className="size-52 min-w-52 rounded-full border-4 p-2">
              picture goes here
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl md:text-5xl font-bold">
                Kayode Babalola
              </h2>
              <p className="md:text-xl">Frontend Developer</p>
              <p className="text-sm text-balance md:text-base">
                Hello! Im Kayode, a Front-end developer who loves implementing
                web-designs, meeting clients expectations and can easily center
                my div&apos;s. I am a self-taught developer who has been
                programming, hence my underlying interest in becoming a
                Fullstack Developer.
              </p>
            </div>
          </div>
        </LayoutSection>
        <LayoutSection id="exp" title="Experience">
          Stuff(Experience)
        </LayoutSection>
        <LayoutSection id="stack" title="Tech Stack">
          Stuff(Tech stack)
        </LayoutSection>
        <LayoutSection id="education" title="Education">
          Stuff(Education)
        </LayoutSection>
        <LayoutSection id="projects" title="projects">
          <p>Stuff (Projects)</p>
        </LayoutSection>
      </div>
    </div>
  );
}
