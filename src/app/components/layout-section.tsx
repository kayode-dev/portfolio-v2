interface LayoutSectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}
export const LayoutSection = ({ title, id, children }: LayoutSectionProps) => {
  return (
    <div className="section w-full" id={id}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
