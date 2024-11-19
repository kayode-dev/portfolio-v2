import { SectionPointerProps, SectionPointers } from "./navbar";

interface MobileMenuProps {
  SECTIONS: SectionPointerProps[];
}

export const MobileMenu = ({ SECTIONS }: MobileMenuProps) => {
  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full bg-neutral-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-red-500 w-full">
        <ul className="gap-4 min-h-full space-y-6">
          {SECTIONS.map((section) => (
            <SectionPointers key={section.name} {...section} />
          ))}
        </ul>
      </div>
    </div>
  );
};
