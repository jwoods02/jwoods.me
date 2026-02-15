import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const home = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/home" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    tagline: z.string(),
    links: z.array(z.object({ label: z.string(), href: z.string() })),
    highlights: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        href: z.string(),

      }),
    ),
  }),
});

const cv = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/cv" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    location: z.string(),
    links: z.array(z.object({ label: z.string(), href: z.string() })),
    experience: z.array(
      z.object({
        company: z.string(),
        location: z.string(),
        role: z.string(),
        period: z.string(),
        bullets: z.array(z.string()),
        tech: z.array(z.string()),
        previousRole: z
          .object({ title: z.string(), period: z.string() })
          .optional(),
      }),
    ),
    education: z.object({
      school: z.string(),
      degree: z.string(),
      result: z.string(),
      period: z.string(),
      bullets: z.array(z.string()).optional(),
      tech: z.array(z.string()).optional(),
    }),

  }),
});

export const collections = { home, cv };
