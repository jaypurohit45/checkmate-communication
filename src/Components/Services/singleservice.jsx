import React from "react";
import { services } from "../../Data/ServiceData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const SingleServiceSection = () => {
    return (
        <div className="section pb-0">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-5">
                    
                    {/* MAIN IMAGE BLOCK - Fixed to show full image without cutting */}
                    <div className="d-flex flex-column gspace-3">
                        <div className="image-container" style={{ width: "100%" }}>
                            <img
                                src="/assets/images/service-social-main.webp"
                                alt="Social Media Marketing Strategy"
                                className="single-service-img img-fluid shadow-sm"
                                style={{ borderRadius: "12px", width: "100%", objectFit: "cover" }}
                            />
                        </div>
                        
                        {/* Title block moved safely out of the image container so it doesn't overlap/cut */}
                        <div className="single-service-title-layout">
                            <div>
                                <div className="single-service-title-wrapper">
                                    <div className="single-service-title">
                                        <AnimateOnScroll animation="fadeInRight" speed="slow">
                                            <div className="sub-heading">
                                                <i className="fa-regular fa-circle-dot"></i>
                                                <span>Our Expertise</span>
                                            </div>
                                        </AnimateOnScroll>
                                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                                            <h3 className="title-heading">
                                                Boost Your Brand with Strategic Social Media Marketing
                                            </h3>
                                        </AnimateOnScroll>
                                        <p>
                                            Maximize engagement, build loyal communities, and drive conversions across all major platforms lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5 mt-4">
                        <div className="col col-lg-8">
                            <div className="d-flex flex-column gspace-2">
                                <h4>Overview</h4>
                                <p>
                                    At Checkmate Communication, we help brands grow through custom-tailored social media marketing strategies that connect with your audience. From content creation to campaign optimization, we make sure your presence on platforms like Instagram, Facebook, LinkedIn, and TikTok stands out. Whether you’re launching a new brand or scaling an existing one, our experts turn social media into a powerful growth engine.
                                </p>
                                
                                {/* The 2 Smaller Grid Images */}
                                <div className="row row-cols-md-2 row-cols-1 grid-spacer-2 grid-spacer-md-3">
                                    <div className="col">
                                        <div className="image-container" style={{ width: "100%" }}>
                                            <img
                                                src="/assets/images/service-social-1.webp"
                                                alt="Social Media Engagement"
                                                className="img-fluid"
                                                style={{ borderRadius: "12px", width: "100%", objectFit: "cover" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="image-container" style={{ width: "100%" }}>
                                            <img
                                                src="/assets/images/service-social-2.webp"
                                                alt="Social Media Analytics"
                                                className="img-fluid"
                                                style={{ borderRadius: "12px", width: "100%", objectFit: "cover" }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="card service-included mt-4">
                                    <h4>What's Included</h4>
                                    <div className="underline-accent-short"></div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis ac odio et efficitur. Proin velit neque, sollicitudin nec purus eu, suscipit feugiat tellus.
                                    </p>
                                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                                        <div className="col">
                                            <ul className="check-list">
                                                <li>Platform Strategy & Planning</li>
                                                <li>Creative Content Production</li>
                                                <li>Paid Ads Management</li>
                                                <li>Community engagement</li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <ul className="check-list">
                                                <li>Perfomance Reporting & Analytics</li>
                                                <li>Influencer Collaborations</li>
                                                <li>Social Listening & Trend Monitoring</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <h4 className="mt-4">Why Choose Checkmate Communication for Social Media Marketing?</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis ac odio et efficitur. Proin velit neque, sollicitudin nec purus eu, suscipit feugiat tellus.
                                </p>

                                <div className="row row-cols-1 row-cols-md-2">
                                    <div className="col">
                                        <div className="d-flex flex-column gspace-2">
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>Result-Driven Campaigns</h5>
                                                    <p>Focused on reach, engagement, and ROI</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>Dedicated Team</h5>
                                                    <p>Experts in every platform you use</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex flex-column gspace-2">
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>Tailored strategies</h5>
                                                    <p>No one-size-fits-all, we build for your brand</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>Analytics & insights</h5>
                                                    <p>Make smart decision with real data</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* RIGHT SIDEBAR - 100% Original */}
                        <div className="col col-lg-4">
                            <div className="d-flex flex-column flex-md-row flex-lg-column justify-content-between gspace-5">
                                <div className="card service-recent">
                                <h4>Recent Services</h4>
                                <div className="underline-accent-short"></div>
                                <ul className="single-service-list">
                                    {services.map((service) => (
                                        <li key={service.id}>
                                        <a href={service.link} className="hover:underline">
                                            {service.title}
                                        </a>
                                        </li>
                                    ))}
                                </ul>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceSection;