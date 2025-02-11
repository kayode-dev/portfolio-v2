import Link from "next/link";
import { GithubIcon } from "../assets/icons/github-icon";
import { LinkedInIcon } from "../assets/icons/linkedin-icon";

const date = new Date();
const year = date.getFullYear();
export const Footer = () => {
  return (
    <footer className="flex text-neutral-500 justify-between place-self-end w-full border-t-2 border-neutral-500 min-h-16 mt-6 items-center md:text-lg">
      <p>&copy; kayode.dev {year}</p>
      <div className="flex items-center gap-6">
        <Link href="https://github.com/kayode-dev">
          <GithubIcon className="size-5 md:size-6 fill-neutral-500" />
        </Link>
        <Link href="https://www.linkedin.com/in/kayodedev/">
          <LinkedInIcon className="size-5 md:size-6 fill-neutral-500" />
        </Link>
      </div>
    </footer>
  );
};
