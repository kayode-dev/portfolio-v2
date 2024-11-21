const date = new Date();
const year = date.getFullYear();
export const Footer = () => {
  return (
    <footer className="flex text-neutral-500 justify-between place-self-end w-full border-t-2 border-neutral-500 min-h-16 mt-6 items-center md:text-lg">
      <p>&copy; kayode.dev {year}</p>
    </footer>
  );
};
