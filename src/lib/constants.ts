import dualmind from "@/app/assets/projects/dualmind.png";
import rundwn from "@/app/assets/projects/rundwn.png";
import picaso from "@/app/assets/projects/picaso.png";
import { ExperienceProps, ProjectProps } from "./types";

export const PROJECTS: ProjectProps[] = [
  {
    title: "picaso.mp3",
    description:
      "Audio processing tool where users can either upload an audio file or record their audio and the track is converted to a color palette based on the spectral kurtosis, spectral spread and kurtosis of the audio at different intervals.",
    image: picaso,
    liveUrl: "https://picaso.kayodedev.com/",
    stacks: ["React", "Meyda", "NextJS"],
  },
  {
    title: "dualmind",
    description:
      "An AI-powered chatbot built with the ChatGPT-3.5 Turbo API and Google Gemini's API to handle prompts and generate images. This project highlights the capabilities of both AI models, showcasing how prompt structure influences responses and outputs.",
    image: dualmind,
    liveUrl: "https://dualmind.kayodedev.com",
    githubUrl: "https://github.com/kayode-dev/dualmind",
    stacks: [],
  },
  {
    title: "Rundwn",
    description:
      "Rundwn is a web app that uses the Spotify API to provide on-demand insights into users' listening habits. It highlights top artists and activity over the past month, six months, and year, offering a seamless and interactive experience inspired by Spotify Wrapped.",
    image: rundwn,
    liveUrl: "https://rundwn.kayodedev.com/",
    githubUrl: "https://github.com/kayode-dev/wrapped-anytime",
    stacks: ["React", "Tailwind CSS", "NextJS"],
  },
];

export const EXPERIENCE: ExperienceProps[] = [
  {
    companyName: "Jetron Ticket",
    jobTitle: "Frontend Engineer",
    startDate: "June 2024",
    endDate: "Present",
    employmentType: "Full time",
    description:
      "Jetron Ticket is a platform focused on making events more accessible to attendees while maximizing event reach. I contributed to the development of major features such as the interactive event calendar, event timeline, and an AI-powered chat system. The project exposed me to new methodologies and, while challenging at first, it was an exciting journey that kept me motivated with fresh problems to solve every day.",
    link: "sumn",
    stacks: [
      "NEXT.js",
      "TailwindCSS",
      "TypeScript",
      "Apollo Client",
      "Graph QL",
      "HeadlessUI",
    ],
    points: [
      "Engineered high-performance webpages with Next.js, ensuring lightning-fast load times and seamless user experiences.",
      "Collaborated with backend teams to deliver smooth GraphQL data integration, powering reliable and scalable features.",
      "Built mission-critical features including Interactive Event Calendar, Event Timeline, Map Integration, and an AI-Powered Chat System.",
      "Developed reusable, documented components with Storybook, accelerating development and team-wide consistency.",
    ],
  },
  {
    companyName: "Ardels",
    jobTitle: "Frontend Engineer (Contract)",
    startDate: "Mar 2024",
    endDate: "June 2024",
    employmentType: "Part time",
    description:
      "This was a short-term project where I had full ownership of the frontend development. It was an exciting experience because I had complete control over the choice of technologies, which pushed me to research and understand why certain packages are preferred over others and the key factors to consider when selecting them. This project also marked my first hands-on experience working with a monorepo and Turbopack.",
    link: "sumn",
    stacks: ["Next.js", "TailwindCSS", "TypeScript", "Tanstack(React Query)"],
    points: [
      "Architected an optimal tech stack by carefully selecting tools and packages that balanced performance, maintainability, and efficiency.",
      "Collaborated with backend developers and stakeholders to ensure alignment with business goals and seamless system integration.",
      "Drove the end-to-end development of a modular HR platform, tailored to the unique needs of blue-collar workforce management.",
    ],
  },
  {
    companyName: "R3 Consulting Ltd",
    jobTitle: "Frontend Engineer",
    startDate: "Nov 2022",
    endDate: "Mar 2024",
    employmentType: "Full time",
    description:
      "R3 Consulting Ltd is a consulting firm specializing in the sales and implementation of ERP solutions from providers such as SAP and Microsoft. Many clients find out-of-the-box ERP systems overly complex, preferring simplified, user-friendly versions tailored to their specific business needs. At R3 Consulting, I worked with the team to design and build these customized solutions.",
    link: "sumn",
    stacks: [
      "Blazor",
      "C#",
      "React",
      "Javascript",
      "Typescript",
      "TailwindCSS",
      "Bootstrap",
      "Bulma",
    ],
    points: [
      "Created automation scripts for backup and restore processes in company products using JavaScript, enabling faster resolution of client issues.",
      "Contributed to project management features that supported internal task tracking and improved team coordination.",
      "Partnered with multiple clients to launch tailored in-house and outsourced solutions, ensuring timely and successful deployments.",
    ],
  },
];
