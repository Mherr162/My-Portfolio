"use client"

import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  technologies: string[]
}

export function ProjectCard({ title, description, image, link, technologies }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background p-2 hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden rounded-md bg-muted">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-muted-foreground text-sm">No image available</div>
          </div>
        )}
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            View Project →
          </Link>
        )}
      </div>
    </div>
  )
} 