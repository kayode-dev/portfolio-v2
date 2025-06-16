import Image, { StaticImageData } from "next/image";

interface LayoutSectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
  sectionMemoji?: StaticImageData;
}
export const LayoutSection = ({
  title,
  id,
  children,
  sectionMemoji,
}: LayoutSectionProps) => {
  return (
    <div className="section w-full space-y-4 md:space-y-8" id={id}>
      <div className="flex items-center gap-3">
        {sectionMemoji && (
          <Image src={sectionMemoji} alt={title} className="size-12" />
        )}
        <h2 className="text-2xl font-semibold md:text-3xl italic underline">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
};
