import type { StaticImageData } from "next/image";

import YTCLone from "@/assets/Project-Thumbnail/Project-1.png";
import BookShare from "@/assets/Project-Thumbnail/Project-2.png";
import BlogApp from "@/assets/Project-Thumbnail/Project-3.png";
import ShoppyGlobe from "@/assets/Project-Thumbnail/Project-4.png";
import ToDoListReact from "@/assets/Project-Thumbnail/Project-5.png";

export interface ProjectData {
  title: string;
  desc: string;
  image: StaticImageData;
  live: boolean;
  technologies: string[];
  link: string;
  github: string;
}

export const ProjectData: ProjectData[] = [
  {
    title: "YouTube Clone",
    desc: "This project is a full-stack YouTube clone that replicates key functionalities of the original platform. It supports video uploads, playback, user authentication, and interactions like comments or likes. The project demonstrates your ability to build a scalable, responsive video platform that handles media streaming and dynamic content management.",
    image: YTCLone,
    live: false,
    technologies: [
      "ReactJS",
      "NodeJS",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JavaScript",
    ],
    link: "https://github.com/Adibhange/YouTube-Clone",
    github: "https://github.com/Adibhange/YouTube-Clone",
  },
  {
    title: "BookShare",
    desc: "BookShare is a modern, fully responsive web application designed for book enthusiasts. The frontend is built with ReactJS and Tailwind CSS, delivering an intuitive and visually appealing interface, while the backend is powered by NodeJS, Express, and MongoDB using JavaScript for secure user authentication and robust data management. Users can share their favorite books, write reviews, browse a curated collection of titles, and rely on community feedback to discover their next great read. BookShare combines strong functionality with elegant design to create an engaging platform that connects book lovers.",
    image: BookShare,
    live: true,
    technologies: [
      "ReactJS",
      "NodeJS",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JavaScript",
    ],
    link: "https://book-share-zeta.vercel.app/",
    github: "https://github.com/Adibhange/BookShare",
  },
  {
    title: "MERN Blog App",
    desc: "MERN BLOG is a modern, fully responsive blogging platform built using the MERN stack. It offers secure user authentication with login, registration, and logout functionalities, allowing users to effortlessly create, read, update, and delete blog posts. Authors can manage their content with a rich text editor and dynamic content management system, while readers enjoy seamless navigation and engaging design across all devices. With integrated search and filtering capabilities, MERN BLOG delivers a smooth and intuitive user experience that makes content creation and consumption both efficient and enjoyable.",
    image: BlogApp,
    live: true,
    technologies: ["ReactJS", "NodeJS", "Express", "MongoDB", "JavaScript"],
    link: "https://mern-blog-frontend-ochre.vercel.app/",
    github: "https://github.com/Adibhange/MERN_BLOG",
  },
  {
    title: "ShoppyGlobe",
    desc: "ShoppyGlobe is a simple, fully responsive e-commerce app built with React and styled with Tailwind CSS. It allows users to browse various product categories, add items to a shopping cart, and complete purchases through a smooth checkout process. The app leverages Redux for efficient state management, ensuring a seamless and engaging user experience.",
    image: ShoppyGlobe,
    live: false,
    technologies: ["ReactJS", "Tailwind CSS", "Redux"],
    link: "https://github.com/Adibhange/ShoppyGlobe-E-commerce-App-React-",
    github: "https://github.com/Adibhange/ShoppyGlobe-E-commerce-App-React-",
  },
  {
    title: "To-Do List React",
    desc: "Simple To-Do List is a task management application built with React and styled using Tailwind CSS. It allows users to add, edit, and delete tasks, as well as mark them as completed, providing an intuitive and responsive interface to organize daily activities.",
    image: ToDoListReact,
    live: false,
    technologies: ["ReactJS", "Tailwind CSS"],
    link: "https://github.com/Adibhange/To-Do-React-App",
    github: "https://github.com/Adibhange/To-Do-React-App",
  },
];
