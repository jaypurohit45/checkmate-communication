import React from "react";
import { blogs } from "../../Data/BlogPostData";

const BlogPostSection = () => {
  return (
    <div className="section">
        <div className="hero-container">
            <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5">
                <div className="col col-lg-4 order-2 order-lg-1">
                    <div className="d-flex flex-column flex-md-row flex-lg-column gspace-5">
                        <div className="card recent-post">
                            <h4>Recent Blog</h4>
                            {blogs.map((blog) => (
                                <div
                                    className="d-flex flex-row w-100 gspace-1"
                                    key={blog.id}
                                >
                                    <div className="image-container">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="img-fluid"
                                    />
                                    </div>
                                    <div className="d-grid">
                                        <div className="d-flex flex-row gspace-1 align-items-center">
                                            <i className="fa-solid fa-calendar accent-color"></i>
                                            <span className="meta-data-post">{blog.date}</span>
                                        </div>
                                        <a href={blog.link} className="blog-link-post">
                                            {blog.title}
                                        </a>
                                    </div>
                                </div>
                                ))}
                        </div>
                        <div className="cta-service-banner" style={{ backgroundImage: "url('/assets/images/service-cta-bg.webp')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "12px" }}>

                            <div className="spacer"></div>
                            <h3 className="title-heading">Transform Your Business with Checkmate Communication!</h3>
                            <p>
                                Take your digital marketing to the next level with data-driven strategies and innovative solutions. Let's create something amazing together!
                            </p>
                            <div className="link-wrapper">
                                <a href="about">Read More</a>
                                <i className="fa-solid fa-circle-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-8 order-1 order-lg-2">
                    <div className="d-flex flex-column gspace-2">
                        <div className="post-image">
                            {/* Replaced dummy image with your new SEO webp image */}
                            <img
                            src="/assets/images/blog-growth-seo.webp"
                            alt="Recent Post"
                            className="img-fluid"
                            style={{ borderRadius: "12px" }}
                            />
                        </div>
                        <h3>How to Grow Your Digital Business</h3>
                        <div className="underline-muted-full"></div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                            <div className="d-flex flex-row align-items-center gspace-2">
                                <div className="d-flex flex-row gspace-1 align-items-center">
                                    <i className="fa-solid fa-calendar accent-color"></i>
                                    <span className="meta-data-post">March 27, 2025</span>
                                </div>
                                <div className="d-flex flex-row gspace-1 align-items-center">
                                    <i className="fa-solid fa-folder accent-color"></i>
                                    <span className="meta-data-post">SEO</span>
                                </div>
                            </div>
                            <div className="d-flex flex-row gspace-1 align-items-center">
                                <i className="fa-solid fa-user accent-color"></i>
                                <span className="meta-data">Checkmate Team</span>
                            </div>
                        </div>

                    <div>
                        <p>
                            In today's fast-paced digital landscape, growing a business online requires more than just a website and a few ads.
                            To achieve sustainable growth, digital businesses must implement a well-rounded strategy that includes brand positioning,
                            performance marketing, and customer retention. In this post, we'll explore actionable growth strategies to help your digital
                            business scale successfully.
                        </p>
                        <p>
                            The first pillar of growth is understanding your audience's search intent. By leveraging advanced SEO techniques, you ensure that your brand appears exactly when potential customers are looking for your services. Coupled with targeted PPC campaigns, you can capture both high-intent organic traffic and immediate leads. Remember, it is not just about driving traffic; it is about driving the *right* traffic to a highly optimized landing page that converts visitors into loyal clients.
                        </p>
                    </div>
                    <div className="quote-container">
                        <div>
                        <div className="icon-wrapper">
                            <div className="icon-box">
                            <i className="fa-solid fa-quote-right"></i>
                            </div>
                        </div>
                        </div>
                        <p className="quote">
                            "Marketing is no longer about the stuff that you make, but about the stories you tell and the measurable data you use to refine them."
                        </p>
                        <div>
                        <h5>Checkmate Strategy Team</h5>
                        <p className="quote-description">Digital Growth Experts</p>
                        </div>
                    </div>
                    <p>
                        Finally, never underestimate the power of consistent analysis. A/B testing your ad copy, adjusting your keywords based on monthly search volume trends, and refining your social media approach based on engagement metrics are what separate stagnant businesses from industry leaders. At Checkmate Communication, we handle this entire ecosystem so you can focus on what you do best: running your business.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BlogPostSection;