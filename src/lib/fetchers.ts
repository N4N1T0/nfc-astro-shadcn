import { getCollection } from "astro:content";

export async function getCategories() {
  const posts = await getCollection("blog");

  const categories = [
    ...new Set(posts.map((post) => post.data.categories).flat())
  ];

  return categories;
}

export async function getPosts() {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return posts;
}

export async function getPostsByCategory(category: string) {
  const posts = (await getCollection("blog"))
    .filter((post) => post.data.categories.includes(category))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return posts;
}