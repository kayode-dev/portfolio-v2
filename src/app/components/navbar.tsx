const SECTIONS = [
  { name: "#exp", location: "exp" },
  { name: "#stack", location: "stack" },
  { name: "#projects", location: "projects" },
];
export default function Navbar() {
  return (
    <div className="md:flex items-center bg-teal-500  justify-between">
      <p className="font-mono">ICON</p>
      <ul className="flex items-center gap-4 bg-yellow-600 min-h-full">
        {SECTIONS.map((section) => (
          <SectionPointers key={section.name} {...section} />
        ))}
      </ul>
    </div>
  );
}
interface SectionPointerProps {
  name: string;
  location: string;
}

const SectionPointers = ({ name, location }: SectionPointerProps) => {
  return (
    <li className="flex flex-col items-start">
      <a href={`#${location}`} className="group flex gap-1 items-center">
        <span className="nav-indicator mr-4 h-px w-8 bg-white/50 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none duration-300"></span>
        <p className="text-white/50 group-hover:text-white">{name}</p>
      </a>
    </li>
  );
};
