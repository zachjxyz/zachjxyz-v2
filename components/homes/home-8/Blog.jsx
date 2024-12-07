"use client";
import { getPosts } from "@/app/ghost/posts"; // Import the getPosts function
import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogGrid from "./BlogGrid";
export default function Blog() {
  return (
    <>
      <div className="row">
        <div className="col-8 col-sm-7">
          <h3 className="hs-title-5 font-alt overflow-hidden mb-100 mb-md-40">
            <span className="d-block wow fadeRotateIn"> Latest </span>
            <span className="d-block text-end wow fadeRotateIn"> News </span>
          </h3>
        </div>
      </div>
      {/* Blog Grid */}
      <BlogGrid />
      {/* End Blog Grid */}
      {/* Newsletter Form */}
      <div className="row mt-100 mt-sm-60 wow fadeInUp">
        <div className="col-lg-8 offset-lg-2">
          <h2 className="section-title-tiny mb-30">
            <span className="icon-ellipse" /> Subscribe my newsletter
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            id="mailchimp"
            className="form newsletter-modern"
          >
            <div className="d-md-flex justify-content-between mb-40">
              <label htmlFor="newsletter-email" className="visually-hidden">
                Your email
              </label>
              <input
                placeholder="Enter your email"
                className="newsletter-field mb-sm-20 me-md-4"
                id="newsletter-email"
                name="newsletter-email"
                type="email"
                pattern=".{5,100}"
                required
                aria-required="true"
              />
              <div className="d-md-flex align-items-end">
                <button
                  type="submit"
                  aria-controls="subscribe-result"
                  className="btn btn-mod btn-border btn-medium btn-circle text-nowrap"
                  data-btn-animate="y"
                >
                  <span className="btn-animate-y">
                    <span className="btn-animate-y-1">Subscribe Now</span>
                    <span className="btn-animate-y-2" aria-hidden="true">
                      Subscribe Now
                    </span>
                  </span>
                </button>
              </div>
            </div>
            <div className="form-tip">
              <i className="icon-info size-16" /> By sending the form you agree
              to the <a href="#">Terms &amp; Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </div>
            <div
              id="subscribe-result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
        </div>
      </div>{" "}
    </>
  );
}
