const GHOST_API = process.env.NEXT_PRIVATE_GHOST_API_KEY;
const GHOST_URL = process.env.NEXT_PRIVATE_GHOST_URL;

/**
 * Fetch all posts with Incremental Static Regeneration (ISR) enabled.
 */
export async function getPosts() {
  const response = await fetch(
    `${GHOST_URL}/ghost/api/content/posts/?key=${GHOST_API}&limit=3`,
    {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }

  const data = await response.json();
  return data.posts; // Return the array of posts
}

/**
 * Fetch a single post by slug.
 */
export async function getPostBySlug(slug) {
  const response = await fetch(
    `${GHOST_URL}/ghost/api/content/posts/slug/${slug}/?key=${GHOST_API}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch post: ${response.statusText}`);
  }

  const data = await response.json();
  return data.posts[0]; // Return the first post
}
