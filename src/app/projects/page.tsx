import type { Metadata } from "next";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata: Metadata = {
  title: "HDZ Revamped Projects | Before & After Painting & Drywall San Diego",
  description:
    "View our painting & drywall before & after projects. Kitchen remodels, exterior painting & more in San Diego County. Licensed contractor #1146147.",
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
