import Home from "./_components/home";
import AboutUs from "./_components/about-us";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { FileText } from "lucide-react";
import { FloatingDock } from "@/_components/ui/floating-dock";
import Services from "./_components/services";

export default function Site() {
  return (
    <div className="relative">
      <Home />
      <AboutUs />
      <Services />

      <div className="fixed bottom-3 z-30 left-1/2 translate-x-[-50%]">
        <FloatingDock items={links} />
      </div>
    </div>
  );
}

const links = [
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Linkedin",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Instagram",
    icon: (
      <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Resume",
    icon: (
      <FileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
];
