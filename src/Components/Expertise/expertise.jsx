import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function ExpertiseSection() {
    return (
        <>
            <div className="section">
                <div className="hero-container">
                    <div className="d-flex flex-column flex-lg-row gspace-5">
                        
                        {/* LEFT SIDE: Just the full, unblocked image now */}
                        <div className="expertise-img-layout">
                            <div className="image-container expertise-img" style={{ position: "relative", width: "100%" }}>
                                <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <img
                                        src="/assets/images/checkmate-expertise.webp" 
                                        alt="Checkmate Communication Expertise"
                                        className="img-fluid"
                                        style={{ borderRadius: "12px", width: "100%", objectFit: "cover" }}
                                    />
                                </AnimateOnScroll>
                            </div>
                        </div>

                        {/* RIGHT SIDE: Text content and the moved "Ready to Elevate" box */}
                        <div className="expertise-title">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div className="sub-heading">
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>Our Expertise</span>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <h2 className="title-heading">
                                    Data Driven Strategies, Measurable Results
                                </h2>
                            </AnimateOnScroll>
                            <p>
                                At Checkmate Communication, we specialize in crafting innovative digital marketing strategies that drive real business growth. Our expertise
                                ensures your brand stays ahead in the competitive digital landscape.
                            </p>
                            
                            <div className="d-flex flex-column flex-md-row gspace-2 mt-4">
                                <div className="expertise-list">
                                    <h5>What We Do Best</h5>
                                    <ul className="check-list">
                                        <li><a href="./single_services">Performance Marketing</a></li>
                                        <li><a href="./single_services">Social Media Growth</a></li>
                                        <li><a href="./single_services">Content Marketing</a></li>
                                        <li><a href="./single_services">PPC & Paid Ads</a></li>
                                        <li><a href="./single_services">Brand Strategy</a></li>
                                        <li><a href="./single_services">Conversion Optimization</a></li>
                                    </ul>
                                </div>

                                {/* MOVED CARD: Replaced 21+ Years with the Consultation Card */}
                                <AnimateOnScroll animation="fadeInUp">
                                    <div className="card card-expertise animate-box" style={{ height: "100%", justifyContent: "center" }}>
                                        <h4>Ready to Elevate Your Digital Presence?</h4>
                                        <p className="mt-2 mb-4">Let's create a custom strategy that fits your business goals.</p>
                                        <div className="d-flex align-items-center flex-row gspace-2 expertise-link">
                                            <a href="./contact">Get Free Consultation</a>
                                            <i className="fa-solid fa-circle-arrow-right"></i>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExpertiseSection;