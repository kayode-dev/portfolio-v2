interface LayoutSectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}
export const LayoutSection = ({ title, id, children }: LayoutSectionProps) => {
  return (
    <div className="section w-full space-y-4 md:space-y-8" id={id}>
      <h2 className="text-2xl font-semibold md:text-3xl italic underline">
        {title}
      </h2>
      {children}
    </div>
  );
};
