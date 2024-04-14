
import { z, defineCollection } from 'astro:content';

// Typescript validation for the Blog Content
const blogCollection = defineCollection({ type: 'content', 
  schema: ({ image }) => z.object({
    title: z.string().max(60, "For optimze SEO, please provide a title with 60 characters or less"),
    date: z.date(),
    excerpt: z.string().max(160, "For optimze SEO, please provide a excerpt/description with 160 characters or less"),
    author: z.enum(['Adrian "Nano" Alvarez', 'Dayana "Good Day" Abuin']),
    categories: z.array(z.string()),
    image: image(),
    imageAlt: z.string()
  }), })

  // Typescript validation for the Client Content
  const clientsCollection = defineCollection({ type: 'content',
    schema: () => z.object({
      title: z.string().max(60, "For optimze SEO, please provide a title with 60 characters or less"),
      excerpt: z.string().max(160, "For optimze SEO, please provide a excerpt/description with 160 characters or less"),
      date: z.date(),
    }),
  })

export const collections = {
  'blog': blogCollection,
  'clients': clientsCollection
};