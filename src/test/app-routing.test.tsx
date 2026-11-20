import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { portfolioProjects, profile } from "@/lib/portfolio-content";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("keeps the supplied contact details intact", () => {
    expect(profile.email).toBe("vijayasridonthu@gmail.com");
    expect(profile.phone).toBe("+91 79898 24727");
    expect(profile.location).toBe("Jangareddygudem, Andhra Pradesh, India");
  });

  it("presents the three supplied portfolio projects with their descriptions", () => {
    expect(portfolioProjects.map((project) => project.name)).toEqual(["VeriSight", "Plantiva", "FreshCart"]);
    expect(portfolioProjects.map((project) => project.description)).toEqual([
      "Designed intuitive interfaces and high-fidelity prototypes for a verification platform using Figma. Created wireframes and user flows to simplify verification tasks and improve usability.",
      "Designed a user-friendly plant ordering application that enables users to explore, select and purchase plants. Created interfaces to help users understand plant quality and product details before ordering.",
      "Designed a grocery delivery application interface using Figma. Created user flows and UI screens for browsing, cart, checkout and order tracking.",
    ]);
  });

  it("provides each project image and its case-study link", () => {
    expect(portfolioProjects.map((project) => project.artworkImage)).toEqual([
      "/verisight-case-study.png",
      "/plantiva-case-study.png",
      "/freshcart-case-study.png",
    ]);
    expect(portfolioProjects.map((project) => project.artworkAspectRatio)).toEqual([
      863 / 579,
      610 / 316,
      590 / 476,
    ]);
    expect(portfolioProjects.map((project) => project.caseStudyUrl)).toEqual([
      "https://www.figma.com/proto/VvburjjN77wZ0kD2Co3CzZ/project-1--team-6?node-id=31-16&starting-point-node-id=31%3A16&t=aOpHi6qJN8f6Xbp9-1",
      "https://www.figma.com/design/vZ0hFwF7XI3vBnbUqVT86L/plant-project?node-id=0-1&t=qmklWSjevFNPUBw9-1",
      "https://www.behance.net/gallery/255299187/Grocery-app-Case-study",
    ]);
  });
});
