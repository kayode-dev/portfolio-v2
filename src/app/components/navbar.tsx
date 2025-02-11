import Image from "next/image";
import Link from "next/link";
import navImage from "../assets/memojilightbulb.png";

const SECTIONS = [
  { name: "#exp", location: "#exp" },
  { name: "#projects", location: "#projects" },
  { name: "#contact", location: "#contact" },
];
export default function Navbar() {
  return (
    <div className="flex items-center justify-between md:mt-10">
      <Link href="/">
        <Image
          src={navImage}
          alt="kayode's memoji with a laptop"
          className="h-16 w-16 hidden md:block"
          placeholder="blur"
        />
      </Link>
      <ul className="items-center gap-4 min-h-full flex">
        {SECTIONS.map((section) => (
          <SectionPointers key={section.name} {...section} />
        ))}
      </ul>
      {/* <button className="size-10 bg-neutral-800/50 flex justify-center rounded-md items-center md:hidden">
        <Menu />
      </button> */}
      {/* <MobileMenu SECTIONS={SECTIONS} /> */}
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
        <span className="mr-2 h-px w-6 bg-white/50 transition-all group-hover:w-12 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none duration-300"></span>
        <p className="text-white/50 group-hover:text-white">{name}</p>
      </a>
    </li>
  );
};
