import { type CollectionEntry } from 'astro:content'
import { slugify } from "./utils";


export default function jsonLDGenerator({ type, post, url }: {type: string, post: CollectionEntry<'blog'>, url: URL }) {
  if (type === 'post') {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.data.title}",
        "description": "${post.data.excerpt}",
        "image": "${post.data.image.src}",
        "author": {
          "@type": "Person",
          "name": "${post.data.author}",
          "url": "/author/${slugify(post.data.author)}"
        },
        "datePublished": "${post.data.date}"
      }
    </script>`;
  }
  return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "SportsClub",
        "name": "Nano Fighters Club",
        "image": "/og-image.png",
        "@id": "",
        "url": "",
        "telephone": "+34647317214",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Mar Mediterráneo, 1",
          "addressLocality": "Marbella, Málaga",
          "postalCode": "29670",
          "addressCountry": "España"
        }  
      }
      </script>`;
      }