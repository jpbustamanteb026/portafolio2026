import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { MarqueeSection } from "@/components/portfolio/MarqueeSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Juan Pablo Bustamante — Desarrollador Frontend" },
      {
        name: "description",
        content:
          "Juan Pablo Bustamante es un desarrollador frontend con experiencia en React, TypeScript y Angular — construyendo interfaces limpias y funcionales desde Cali, Colombia.",
      },
      {
        property: "og:title",
        content: "Juan Pablo Bustamante — Desarrollador Frontend",
      },
      {
        property: "og:description",
        content:
          "Portfolio de Juan Pablo Bustamante, desarrollador frontend enfocado en interfaces modernas y experiencias web interactivas.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main style={{ background: "var(--page-bg)", overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
