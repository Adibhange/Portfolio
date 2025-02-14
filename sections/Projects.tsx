import ProjectModal from "@/components/ProjectModal";
import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectData } from "@/Data/ProjectData";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container py-20">
        <SectionHeader
          title="Projects"
          description="Explore my personal projects that showcase my skills in building web apps."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-2">
          {ProjectData.map((project) => (
            <Card key={project.title}>
              <CardHeader className="space-y-4 p-2 md:p-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="h-auto w-full rounded-xl xsm:h-40 xs:h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80"
                />
                <CardTitle className="space-x-4 inline-flex ">
                  <span className="text-xl md:text-2xl  ">{project.title}</span>
                  <span>
                    {project.live && (
                      <Badge variant="destructive" className="md:text-sm">
                        Live
                      </Badge>
                    )}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 p-2 md:p-4">
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
                <p className="line-clamp-4 text-foreground/70">
                  {project.desc}
                </p>
              </CardContent>

              <CardFooter>
                <ProjectModal {...project} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
