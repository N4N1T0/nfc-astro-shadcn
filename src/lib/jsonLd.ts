import type { CollectionEntry } from "astro:content";

// Function to create a JsonLd acording to the type
export default function jsonLDGenerator({
	type,
	post,
}: { type: string; post: CollectionEntry<"blog"> | undefined }) {
	if (type === "post") {
		return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${post?.data.excerpt}",
  "image": "${post?.data.image.src}",  
  "author": {
    "@type": "Person",
    "name": "Adrian 'Nano' Alavrez"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "Nano Fighters Club",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.nanofighters.club/favicon.ico"
    }
  },
  "datePublished": "${post?.data.date}"
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
        "url": "https://www.nanofighters.club",
        "telephone": "+34647317214",
        "priceRange": "20$-30$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Huelin, Carretera de Cádiz, Málaga",
          "addressLocality": "Malaga Capital, Málaga",
          "postalCode": "29002",
          "addressCountry": "España"
        }  
      }
      </script>`;
}
