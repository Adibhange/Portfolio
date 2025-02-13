"use client";

import React from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, GraduationCap } from "lucide-react";
import { Skills } from "@/Data/Skills";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="About Me"
          description="Get to know my background in building dynamic web applications using cutting-edge tools and frameworks."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Personal Info */}
          <Card className="bg-gray-800/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80">
              <p>
                I&apos;m a{" "}
                <span className="font-extrabold text-foreground">
                  MERN Stack Developer
                </span>{" "}
                building and managing web applications that drive product
                success. Check out some of my work in the{" "}
                <Link
                  href={"#projects"}
                  className="font-extrabold text-foreground underline underline-offset-2"
                >
                  Projects
                </Link>{" "}
                section and visit my{" "}
                <Link
                  href={"https://github.com/Adibhange"}
                  target="_blank"
                  className="font-extrabold text-foreground underline underline-offset-2"
                >
                  Github
                </Link>
                .
              </p>
              <p>
                I have a deep passion for learning and staying updated on the
                latest technologies and industry trends. My journey in web
                development is fueled by curiosity and the drive to create both
                functional and visually appealing applications.
              </p>
              <p>
                I&apos;m open to{" "}
                <span className="font-extrabold text-foreground">job</span>{" "}
                opportunities where I can contribute, learn, and grow. If you
                have an opportunity that matches my skills, feel free to{" "}
                <Link
                  href={"#contact"}
                  className="font-extrabold text-foreground underline underline-offset-2"
                >
                  contact me
                </Link>
                .
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-4">
            {/* Education  */}
            <Card className="bg-gray-800/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <h3 className="font-medium">
                    Bachelor of Engineering in Computer
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Savitribai Phule University, Pune
                  </p>
                  <p className="text-sm text-foreground/60">Graduate: 2024</p>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-gray-800/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative flex flex-wrap gap-2">
                  {Skills.map((skill) => (
                    <div
                      key={skill.title}
                      className="inline-flex items-center space-x-2 rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      {skill.icon}{" "}
                      <span className="text-lg">{skill.title}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
