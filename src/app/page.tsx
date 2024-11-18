import { LayoutSection } from "./components/layout-section";

export default function Home() {
  return (
    <div className="w-full grid md:grid-cols-2 gap-8 md:mt-8">
      <div className="space-y-10">
        <LayoutSection id="about" title="About Me">
          Stuff(About)
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
