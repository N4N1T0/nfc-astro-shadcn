import { getCollection } from "astro:content";

// Get all the categories af the Posts
export async function getCategories(lang: string) {
  const posts = await getCollection("blog", ({ id }) => { return id.startsWith(lang) });

  const categories = [
    ...new Set(posts.map((post) => post.data.categories).flat())
  ];
  return categories;
}

// Get all the posts
export async function getPosts(lang: string) {
  const posts = (await getCollection("blog", ({ id }) => { return id.startsWith(lang) })).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return posts;
}

// Get all the posts acording to the category
export async function getPostsByCategory(category: string, lang: string) {
  const posts = (await getCollection("blog", ({ id }) => { return id.startsWith(lang) }))
    .filter((post) => post.data.categories.includes(category))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return posts;
}

// Get all the posts acording to the category except the one in view
export async function getRelatedPosts(category: string, title: string) {
  const posts = (await getCollection("blog"))
    .filter((post) => post.data.categories.includes(category))
    .filter((post) => post.data.title !== title)

  return posts
}