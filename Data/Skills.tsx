import type { StaticImageData } from "next/image";
import HTMLIcon from "@/assets/Icons/HTML.png";
import CSSIcon from "@/assets/Icons/CSS.png";
import TailwindCSSIcon from "@/assets/Icons/Tailwind CSS.png";
import JSIcon from "@/assets/Icons/JavaScript.png";
import TSIcon from "@/assets/Icons/TypeScript.png";
import ReactIcon from "@/assets/Icons/React JS.png";
import NextJSIcon from "@/assets/Icons/nextjs.png";
import NodeIcon from "@/assets/Icons/Node JS.png";
import ExpressIcon from "@/assets/Icons/Express JS.png";
import MongoDBIcon from "@/assets/Icons/MongoDB.png";
import GitIcon from "@/assets/Icons/Git.png";
import GitHubIcon from "@/assets/Icons/Github.png";
import PostmanIcon from "@/assets/Icons/Postman.png";
import ReduxIcon from "@/assets/Icons/Redux.png";
import VSCodeIcon from "@/assets/Icons/VS Code.png";

export interface Skill {
  title: string;
  icon: StaticImageData;
}

export const Skills: Skill[] = [
  {
    title: "HTML",
    icon: HTMLIcon,
  },
  {
    title: "CSS",
    icon: CSSIcon,
  },
  {
    title: "Tailwind CSS",
    icon: TailwindCSSIcon,
  },
  {
    title: "JavaScript",
    icon: JSIcon,
  },
  {
    title: "TypeScript",
    icon: TSIcon,
  },
  {
    title: "ReactJS",
    icon: ReactIcon,
  },
  {
    title: "NextJS",
    icon: NextJSIcon,
  },
  {
    title: "NodeJS",
    icon: NodeIcon,
  },
  {
    title: "ExpressJS",
    icon: ExpressIcon,
  },
  {
    title: "MongoDB",
    icon: MongoDBIcon,
  },
  {
    title: "Git",
    icon: GitIcon,
  },
  {
    title: "GitHub",
    icon: GitHubIcon,
  },
  {
    title: "Postman",
    icon: PostmanIcon,
  },
  {
    title: "Redux",
    icon: ReduxIcon,
  },
  {
    title: "VS Code",
    icon: VSCodeIcon,
  },
];
