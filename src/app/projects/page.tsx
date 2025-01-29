import { Metadata } from "next";
import Image from "next/image";
import { Eye } from "lucide-react";

import { projects } from "@/config/constants";
import { siteConfig } from "@/config/site";
import { shuffle } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Project | ${siteConfig.author.name}`,
  description: `Explore projects built by ${siteConfig.author.name}`,
  openGraph: {
    title: `Project | ${siteConfig.author.name}`,
    url: `${siteConfig.url}/projects`,
    description: `Explore projects built by ${siteConfig.author.name}`,
  },
};

export default function Projects() {
  return (
    <main className="mx-auto max-w-7xl px-6 md:px-16">
      <header className="mb-16 max-w-2xl duration-700 animate-in slide-in-from-top-full">
        <h1 className="mb-6 font-incognito text-3xl font-black tracking-tight sm:text-5xl lg:leading-[3.7rem]">
          Projects
        </h1>

        <p className="font-sans text-base leading-relaxed text-foreground/60">
          I&apos;m actively working on various projects as I focus on learning
          and growing as a developer. Below are some of the projects I&apos;ve
          completed so far, reflecting my progress and passion for building
          meaningful solutions.
        </p>
      </header>

      <section className="mb-12 grid grid-cols-1 gap-5 duration-700 animate-in slide-in-from-top-full md:grid-cols-2 xl:grid-cols-3">
        {shuffle(projects).map(
          ({ projectUrl: { github, live }, logo, name, tagline }, i) => (
            <div
              key={i}
              className="group flex items-center gap-x-4 rounded-lg border bg-secondary/50 p-4 duration-300 hover:bg-secondary/90 hover:shadow-md"
            >
              <a
                href={github}
                target="_blank"
                className="flex items-center gap-x-4"
              >
                <Image
                  src={logo}
                  width={60}
                  height={60}
                  alt={name}
                  className="h-16 w-16 rounded-md bg-foreground/5 object-contain p-2 duration-300 group-hover:bg-foreground/10"
                />
                <div className="duration-1000 animate-in slide-in-from-bottom-full">
                  <h2 className="mb-1 text-lg tracking-wide">{name}</h2>
                  <div className="line-clamp-2 text-sm text-foreground/60">
                    {tagline}
                  </div>
                </div>
              </a>
              {live && (
                <a
                  href={live}
                  target="_blank"
                  className="ml-auto z-10 -mt-1 rounded-md border border-transparent p-1 text-foreground/50 duration-300 hover:border-border hover:text-foreground"
                >
                  <Eye className="h-5 w-5" />
                </a>
              )}
            </div>
          )
        )}
      </section>
    </main>
  );
}
