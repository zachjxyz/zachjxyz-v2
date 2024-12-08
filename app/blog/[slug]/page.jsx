import { getPostBySlug, getPosts } from "@/app/ghost/posts"; // Adjust the path as needed
import Footer2 from "@/components/footers/Footer2";
import Header8 from "@/components/headers/Header8";
import dynamic from "next/dynamic";
import Image from "next/image";

import { modernMultipage } from "@/data/menu";
import Link from "next/link";
const onePage = false;
const dark = false;

// Dynamically load ParallaxContainer to prevent SSR issues
const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
  ssr: false,
});

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export const metadata = {
  title: "BLOG | Zach J | Strategy, Technology, & Psychology",
  description: "Your last strategy consultant",
};

export default async function ModernBlogSinglePage({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <div className="theme-modern">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header8 links={modernMultipage} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5">
                {/* Background Image */}
                <Image
                  src={post.feature_image || "/assets/images/full-width-images/section-bg-1.jpg"}
                  alt={post.title || "Blog Post Background"}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  priority
                  className="absolute inset-0 z-[-1]"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-[-1]" />
                {/* Title and Metadata */}
                <div className="container position-relative pt-30 pt-sm-50">
                  <div className="text-center">
                    <div className="row">
                      <div className="col-md-8 offset-md-2">
                        <h1 className="hs-title-1 mb-20 text-white">{post.title}</h1>
                        <div
                          className="blog-item-data mt-30 mt-sm-10 mb-0 wow fadeInUp"
                          data-wow-delay="0.2s"
                        >
                          <div className="d-inline-block me-3 text-white">
                            <i className="mi-clock size-16"></i>
                            <span className="visually-hidden">Date:</span>{" "}
                            {new Date(post.published_at).toLocaleDateString()}
                          </div>
                          <div className="d-inline-block me-3 text-white">
                            <i className="mi-user size-16"></i>
                            <span className="visually-hidden">Author:</span>{" "}
                            {post.primary_author?.name || "Zach J"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxContainer>
            </section>

            <section className="page-section">
              <div className="container relative">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <div
                      className="blog-item-body"
                      dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2 />
          </footer>
        </div>
      </div>
    </>
  );
}