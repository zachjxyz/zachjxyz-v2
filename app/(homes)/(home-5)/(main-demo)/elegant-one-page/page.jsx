import Footer5 from "@/components/footers/Footer5";

import Header5 from "@/components/headers/Header5";
import Home5 from "@/components/homes/home-5";
import Hero1 from "@/components/homes/home-5/heros/Hero1";
import { elegantOnepage } from "@/data/menu";
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export const metadata = {
  title:
    "Home 5 Main Demo Onepage || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home5MainDemoOnepage() {
  return (
    <>
      <div className="theme-elegant">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header5 links={elegantOnepage} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="home-section bg-dark-alpha-30 parallax-5 light-content z-index-1 scrollSpysection"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-elegant/section-bg-1.jpg)",
              }}
              id="home"
            >
              <Hero1 />
            </ParallaxContainer>

            <Home5 onePage />
          </main>
          <footer className="bg-dark-1 light-content footer z-index-1 position-relative">
            <Footer5 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
