import Image from "next/image";
import HTMLIcon from "@/assets/HTML.png";
import CSSIcon from "@/assets/CSS.png"
import TailwindCSSIcon from "@/assets/Tailwind CSS.png";
import JSIcon from "@/assets/JavaScript.png"
import TSIcon from "@/assets/TypeScript.png";
import ReactIcon from "@/assets/React JS.png"
import NextJSIcon from "@/assets/nextjs.png"
import NodeIcon from "@/assets/Node JS.png"
import ExpressIcon from "@/assets/Express JS.png"
import MongoDBIcon from "@/assets/MongoDB.png"
import GitIcon from "@/assets/Git.png"
import GitHubIcon from "@/assets/Github.png"
import PostmanIcon from "@/assets/Postman.png"
import ReduxIcon from "@/assets/Redux.png"
import VSCodeIcon from "@/assets/VS Code.png";


export interface Skill {
  title: string;
  icon: React.ReactNode;
}

export const Skills: Skill[] = [
  {
    title: "HTML",
    icon: <Image src={HTMLIcon} alt="HTML" width={30} height={30} />,
  },
  {
    title: "CSS",
    icon: <Image src={CSSIcon} alt="CSS" width={30} height={30} />,
  },
  {
    title: "Tailwind CSS",
    icon: (
      <Image src={TailwindCSSIcon} alt="Tailwind CSS" width={30} height={30} />
    ),
  },
  {
    title: "JavaScript",
    icon: <Image src={JSIcon} alt="JavaScript" width={30} height={30} />,
  },
  {
    title: "TypeScript",
    icon: <Image src={TSIcon} alt="TypeScript" width={30} height={30} />,
  },
  {
    title: "ReactJS",
    icon: <Image src={ReactIcon} alt="ReactJS" width={30} height={30} />,
  },
  {
    title: "NextJS",
    icon: <Image src={NextJSIcon} alt="NextJS" width={30} height={30} />,
  },
  {
    title: "NodeJS",
    icon: <Image src={NodeIcon} alt="NodeJS" width={30} height={30} />,
  },
  {
    title: "ExpressJS",
    icon: <Image src={ExpressIcon} alt="ExpressJS" width={30} height={30} />,
  },
  {
    title: "MongoDB",
    icon: <Image src={MongoDBIcon} alt="MongoDB" width={30} height={30} />,
  },
  {
    title: "Git",
    icon: <Image src={GitIcon} alt="Git" width={30} height={30} />,
  },
  {
    title: "GitHub",
    icon: <Image src={GitHubIcon} alt="GitHub" width={30} height={30} />,
  },
  {
    title: "Postman",
    icon: <Image src={PostmanIcon} alt="Postman" width={30} height={30} />,
  },
  {
    title: "Redux",
    icon: <Image src={ReduxIcon} alt="Redux" width={30} height={30} />,
  },
  {
    title: "VS Code",
    icon: <Image src={VSCodeIcon} alt="VS Code" width={30} height={30} />,
  },
];
