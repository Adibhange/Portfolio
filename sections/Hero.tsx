import BackgroundCircles from "@/components/ui/BackgroundCircle";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-x-clip py-32 xs:py-36 sm:py-44 md:py-48 xl:py-60"
    >
      <BackgroundCircles />

      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rounded-lg border border-border bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
            Hi, I am Aditya Bhange
          </div>
        </div>

        <div className="mx-auto max-w-lg md:max-w-xl">
          <h1 className="mt-8 text-center text-3xl font-extrabold tracking-wide md:text-4xl">
            Building Next-Generation Web Experiences
          </h1>
          <p className="mt-4 text-center tracking-tighter text-foreground/70 md:text-lg">
            I&apos;m a MERN stack developer specializing in creating scalable,
            high-performance web applications. With expertise in Next.js and
            TypeScript, I transform ideas into seamless digital solutions.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button variant="outline" rounded="xl">
            Check My Resume <Download />
          </Button>
          <Button rounded="xl">👋 Let&apos;s Connect</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
