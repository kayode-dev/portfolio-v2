import { MobileMenu } from "./mobile-menu";

const SECTIONS = [
  { name: "#exp", location: "#exp" },
  { name: "#stack", location: "#stack" },
  { name: "#projects", location: "#projects" },
  { name: "#contact", location: "#contact" },
];
export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <p className="font-mono">ICON</p>
      <ul className="items-center gap-4 min-h-full hidden md:flex">
        {SECTIONS.map((section) => (
          <SectionPointers key={section.name} {...section} />
        ))}
      </ul>
      <button className="size-8 bg-neutral-400">i</button>
      <MobileMenu SECTIONS={SECTIONS} />
    </div>
  );
}
export interface SectionPointerProps {
  name: string;
  location: string;
}

export const SectionPointers = ({ name, location }: SectionPointerProps) => {
  return (
    <li className="flex flex-col items-start">
      <a href={location} className="group flex gap-1 items-center">
        <span className="nav-indicator mr-2 h-px w-6 bg-white/50 transition-all group-hover:w-12 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none duration-300"></span>
        <p className="text-white/50 group-hover:text-white">{name}</p>
      </a>
    </li>
  );
};
