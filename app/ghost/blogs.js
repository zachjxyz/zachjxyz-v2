const GHOST_API = process.env.NEXT_PUBLIC_GHOST_API_KEY;
const GHOST_URL = process.env.NEXT_PUBLIC_GHOST_URL;

if (!GHOST_API || !GHOST_URL) {
  throw new Error("Missing environment variables: GHOST_API_KEY or NEXT_PUBLIC_GHOST_URL");
}

/**
 * Fetch all posts with Incremental Static Regeneration (ISR) enabled.
 * This function runs only on the server.
 */

export async function getPosts() {
  try {
    const response = await fetch(
      `${GHOST_URL}/ghost/api/content/posts/?key=${GHOST_API}`,
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    const data = await response.json();
    return data.posts; // Return the array of posts
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error; // Re-throw the error to handle it higher up
  }
}

/**
 * Fetch a single post by slug.
 * This function runs only on the server.
 */
export async function getPostBySlug(slug) {
  try {
    const response = await fetch(
      `${GHOST_URL}/ghost/api/content/posts/slug/${slug}/?key=${GHOST_API}`,
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch post by slug: ${response.statusText}`);
    }

    const data = await response.json();
    return data.posts[0]; // Return the first post
  } catch (error) {
    console.error(`Error fetching post by slug (${slug}):`, error);
    throw error; // Re-throw the error to handle it higher up
  }
}