import { createFileRoute } from "@tanstack/react-router";
import { DesktopExperience } from "@/components/vijaya-os/desktop-experience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vijaya OS — Donthu Vijaya Sri’s Design Workspace" },
      {
        name: "description",
        content: "Step into Donthu Vijaya Sri’s personal design workspace and explore UI/UX projects, skills, journey, resume, and contact details.",
      },
      { property: "og:title", content: "Vijaya OS — Donthu Vijaya Sri’s Design Workspace" },
      {
        property: "og:description",
        content: "A personal design workspace for exploring Donthu Vijaya Sri’s UI/UX work and story.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DesktopExperience,
});
