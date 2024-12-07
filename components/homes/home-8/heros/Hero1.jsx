import React from "react";
import Image from "next/image";
export default function Hero1() {
  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120 ">
      {/* Home Section Content */}
      <div className="home-content pb-sm-60 text-start position-relative">
        <h1 className="hs-title-5 font-alt overflow-hidden mb-30 mb-sm-20">
          <span className="d-block text-center wow fadeRotateIn">
            <Image
              className="hs-image-2 wow fadeInRight"
              data-wow-delay="0.8s"
              data-wow-offset={0}
              src="/assets/images/demo-modern/hs-image-2.jpg"
              width={208}
              height={208}
              alt="Image Description"
            />{" "}
            Zach Johnson
          </span>
          <span
            className="d-block wow fadeRotateIn"
            data-wow-delay="0.2s"
            data-wow-offset={0}
          >
            Strategy
          </span>
          <span
            className="d-block text-center wow fadeRotateIn"
            data-wow-delay="0.4s"
            data-wow-offset={0}
          >
            Technology{" "}
            <Image
              className="hs-image-3 wow fadeInLeft"
              data-wow-delay="0.8s"
              data-wow-offset={0}
              src="/assets/images/demo-modern/hs-image-3.jpg"
              alt="Image Description"
              width={362}
              height={208}
              style={{ height: "fit-content", width: "fit-content" }}
            />
          </span>
        </h1>
        <h2
          className="hs-title-6 font-alt text-center mb-sm-20 wow fadeInUp"
          data-wow-delay="0.6s"
          data-wow-offset={0}
        >
          Your last strategy consultant
        </h2>
        <p className="hs-paragraph-2 wow clipRightIn" data-wow-delay="0.8s">
          My specialties are scaling, automation, and execution
        </p>

        <div
          className="hs-line d-none d-sm-block wow fadeIn parallax-mousemove"
          data-offset={60}
          data-wow-delay="0.8s"
        >
          {" "}
        </div>
      </div>
      {/* End Home Section Content */}
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-wrap-2 wow fadeInUp"
        data-wow-offset={0}
      >
        <div className="full-wrapper text-end">
          <a href="#about" className="scroll-down-2">
            <Image
              src="/assets/images/demo-modern/arrow-down.svg"
              alt="Scroll Down"
              width={51}
              height={132}
            />
          </a>
        </div>
      </div>
      {/* End Scroll Down */}
      {/* Social Media Links */}
      <div className="hs-social left wow fadeInUp" data-wow-offset={0}>
        <a
          href="https://linkedin.com/in/zachjxyz"
          className="hs-social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="visually-hidden">LinkedIn</span>
          <i className="fa-linkedin" />
        </a>
        <a
          href="https://x.com/zachjxyz"
          className="hs-social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="visually-hidden">Twitter</span>
          <i className="fa-twitter" />
        </a>
        <a
          href="https://youtube.com/@zachjxyz"
          className="hs-social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="visually-hidden">Youtube</span>
          <i className="fa-youtube" />
        </a>
      </div>
      {/* End Social Media Links */}
    </div>
  );
}
