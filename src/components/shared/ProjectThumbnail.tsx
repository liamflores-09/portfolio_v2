import Image from "next/image";
import { FaImage } from "react-icons/fa6";
import type { Project } from "@/data/projects";

export function ProjectThumbnail({ project, sizes, compact }: { project: Project; sizes: string; compact?: boolean }) {
  if (!project.image) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-surface">
        {compact ? (
          <FaImage className="h-4 w-4 text-muted/40" />
        ) : (
          <span className="px-6 text-center text-xs font-semibold tracking-widest text-muted/40 uppercase">
            Preview coming soon
          </span>
        )}
      </div>
    );
  }

  return <Image src={project.image} alt={project.title} fill sizes={sizes} className="object-cover" />;
}
