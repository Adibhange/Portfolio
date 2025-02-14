import Image from "next/image";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import type { ProjectData } from "@/Data/ProjectData";
import { Badge } from "./ui/badge";
import Link from "next/link";

const ProjectModal: React.FC<ProjectData> = (project) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full">
            Show More
          </Button>
        </DialogTrigger>

        <DialogContent className="flex max-h-[calc(100vh-4rem)] flex-col xsm:max-w-[340px] xs:max-w-[456px] sm:max-w-[620px] md:max-w-[748px] lg:max-w-[1004px] xl:max-w-[1260px] 2xl:max-w-[1516px]">
          <DialogHeader className="flex flex-row items-center justify-start gap-4">
            <DialogTitle className="lg:text-2xl">{project.title}</DialogTitle>
            {project.live && (
              <Badge variant="destructive" className="md:text-sm lg:text-base">
                Live
              </Badge>
            )}
          </DialogHeader>

          <div className="flex-1 space-y-4 overflow-y-auto p-2">
            <Image
              src={project.image}
              alt={project.title}
              className="rounded-xl"
            />

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="md:text-sm lg:text-base"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* <p className="text-xs text-foreground/70 sm:text-sm md:text-base lg:text-lg">
              {project.desc}
            </p> */}

            <DialogDescription className="text-xs sm:text-sm md:text-base lg:text-lg">
              {project.desc}
            </DialogDescription>

            {/* Using *: we can give class to child */}
            <div className="flex gap-4 *:flex-1">
              <Button variant="secondary" asChild>
                <Link href={project.github} target="_blank">
                  View Git Repo
                </Link>
              </Button>

              <Button asChild className={project.live ? "" : "hidden"}>
                <Link href={project.link} target="_blank">
                  View Live
                </Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectModal;
