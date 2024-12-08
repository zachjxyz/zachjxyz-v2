"use client";

import { useState, useEffect } from "react";
import { getPosts } from "@/app/ghost/posts";
import Image from "next/image";
import Link from "next/link";

export default function BlogGrid() {
  const [blogs, setBlogs] = useState([]); // State to store blogs

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const posts = await getPosts(); // Fetch posts from Ghost CMS

        if (!posts || !posts.length) {
          console.error("No posts found in API response:", posts);
          return;
        }

        const formattedPosts = posts.map((post, index) => ({
          id: post.id,
          slug: post.slug, // Use the slug for linking
          imageSrc: post.feature_image || "/default-image.jpg", // Fallback image
          title: post.title,
          date: new Date(post.published_at).toLocaleDateString(), // Format the date
          rellaxY: "",
          rellaxSpeed: (index % 3) - 1, // Example rellaxSpeed logic
          rellaxPercentage: "0.37", // Static value as per your example
        }));
        setBlogs(formattedPosts);
      } catch (error) {
        console.error("Error loading blogs:", error);
      }
    };

    loadBlogs();
  }, []); // Load blogs on component mount

  if (blogs.length === 0) {
    return <p>Loading blogs...</p>; // Handle loading state or empty response
  }

  return (
    <div className="row gy-4">
      {/* Blog Posts */}
      {blogs.map((post, index) => (
        <div
          key={index}
          className={`post-prev-2 col-md-6 col-lg-4`}
          data-rellax-y={post.rellaxY}
          data-rellax-speed={post.rellaxSpeed}
          data-rellax-percentage={post.rellaxPercentage}
        >
          <div
            className={`
              ${index === 0 ? "mt-140 mt-md-0" : ""}
              ${index === 2 ? "mt-n140 mt-md-0" : ""}
            `}
          >
            <div className="post-prev-2-img">
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post.imageSrc}
                  width={700}
                  height={479}
                  alt={post.title || "Blog Image"}
                  priority={true}
                />
              </Link>
            </div>
            <h3 className="post-prev-2-title">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <div className="post-prev-2-info">{post.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
