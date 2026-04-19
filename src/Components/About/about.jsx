import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function AboutSection(){

    return(
        <div className="section">
            <div className="hero-container">
                <div className="d-flex flex-column flex-lg-row gspace-5">
                    
                    {/* LEFT SIDE: Image Fixed for Taller Height */}
                    <div className="about-img-layout">
                        <div className="image-container about-img" style={{ position: "relative", width: "100%" }}>
                            <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <img
                                src="/assets/images/about.webp"
                                alt="About Us Image"
                                className="img-fluid"
                                style={{ 
                                    borderRadius: "12px", 
                                    width: "100%", 
                                    minHeight: "550px", /* This forces the 40% taller height */
                                    objectFit: "cover"  /* This ensures the image doesn't stretch or distort */
                                }}
                            />
                            </AnimateOnScroll>
                        </div>
                    </div>

                    {/* RIGHT SIDE: 100% Original Text & Layout */}
                    <div className="about-title">
                        <div className="d-flex flex-column gspace-2">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div
                                    className="sub-heading"
                                >
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>About Us</span>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <h2 className="title-heading">Who We Are & What Drives Us</h2>
                            </AnimateOnScroll>

                            <p>
                                At Checkmate Communication, we specialize in crafting innovative digital marketing strategies
                                that drive real business growth. Our about ensures your brand stays ahead
                                in the competitive digital landscape.
                            </p>
                            <p>
                                Get to know the passionate team behind the strategies, the values that
                                guide us, and the mission that fuels our growth.
                            </p>

                            <div className="d-flex flex-column flex-md-row gspace-1 gspace-md-5">
                                <div className="about-list">
                                    <ul className="check-list">
                                        <li><a href="./single_services">PPC & Paid Ads</a></li>
                                        <li><a href="./single_services">Brand Strategy</a></li>
                                        <li><a href="./single_services">Conversion Optimization</a></li>
                                    </ul>
                                </div>

                                <div className="about-list">
                                    <ul className="check-list">
                                        <li><a href="./single_services">Performance Marketing</a></li>
                                        <li><a href="./single_services">Social Media Growth</a></li>
                                        <li><a href="./single_services">Content Marketing</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AboutSection;