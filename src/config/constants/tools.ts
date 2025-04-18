import { Laptop } from "lucide-react";

import { Tool } from "@/types/tool";
import { Icons } from "@/components/icons";

const {
  Chrome,
  Firefox,
  Github,
  JavaScript,
  NextJs,
  React,
  TypeScript,
  VSCode,
} = Icons;

export const tools: Tool[] = [
  {
    heading: "Technologies",
    items: [
      {
        name: "React",
        description: "A JavaScript library for building user interfaces",
        url: "https://react.dev/",
        icon: React,
      },
      {
        name: "Next.js",
        description: "The React Framework for Production",
        url: "https://nextjs.org/",
        icon: NextJs,
      },
    ],
  },

  {
    heading: "Languages",
    items: [
      {
        name: "JavaScript",
        description: "The language of the web",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: JavaScript,
      },
      {
        name: "TypeScript",
        description: "Superset of JavaScript with static type-checking",
        url: "https://www.typescriptlang.org/",
        icon: TypeScript,
      },
    ],
  },

  {
    heading: "Tools",
    items: [
      {
        name: "Visual Studio Code",
        description:
          "Code editing. Redefined. Free. Open source. Runs everywhere.",
        url: "https://code.visualstudio.com/",
        icon: VSCode,
      },
      {
        name: "GitHub",
        description: "Where the world builds software",
        url: "https://github.com/",
        icon: Github,
      },
      {
        name: "Google Chrome",
        description: "A fast, secure, and free web browser",
        url: "https://www.google.com/chrome/",
        icon: Chrome,
      },
      {
        name: "Firefox",
        description: "A fast, private and secure browser",
        url: "https://www.mozilla.org/en-US/firefox/new/",
        icon: Firefox,
      },
    ],
  },

  {
    heading: "Hardware",
    items: [
      {
        name: "MacBook M1",
        description: "My daily driver",
        url: " https://www.apple.com/macbook-air-m1/",
        icon: Laptop,
      },
    ],
  },
];
