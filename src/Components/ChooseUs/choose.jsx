import React from "react";
import { whychooseus } from "../../Data/ChooseUsData";
import ChooseUsCard from "../Card/ChoooseUsCard"; // Note: Ensure this spelling matches your actual file name!
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function ChooseUsSection(){
    return(
        <>
            <div className="section">
                <div className="hero-container">
                    <div className="d-flex flex-column flex-lg-row gspace-5">
                        
                        {/* LEFT SIDE: The 3 Benefit Cards */}
                        <div className="chooseus-card-container">
                            <div className="d-flex flex-column gspace-2">
                                {whychooseus.slice(0, 3).map((item) => (
                                    <ChooseUsCard 
                                        key={item.id}
                                        icon={item.icon}
                                        title={item.title}
                                        content={item.content}
                                        link={item.link}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* RIGHT SIDE: Text, Image, and CTA */}
                        <div className="chooseus-content-container">
                            <div className="d-flex flex-column gspace-4">
                                
                                <AnimateOnScroll animation="fadeInDown" speed="normal">
                                    <div className="d-flex flex-column gspace-2">
                                        <div className="sub-heading">
                                            <i className="fa-regular fa-circle-dot"></i>
                                            <span>Why Choose Checkmate Communication</span>
                                        </div>
                                        <h2 className="title-heading">Your Success is Our Mission</h2>
                                        <p className="mb-0">In the fast-paced digital world, choosing the right marketing partner makes all the difference. At Checkmate Communication, we don’t just create campaigns—we craft strategies that deliver measurable success.</p>
                                    </div>
                                </AnimateOnScroll>
                                
                                {/* Unblocked Image: Beautifully formatted with border-radius */}
                                <div className="image-container" style={{ width: "100%" }}>
                                    <img 
                                        src="/assets/images/choose-us.webp" 
                                        alt="Why Choose Checkmate Communication" 
                                        className="chooseus-img img-fluid shadow-sm"
                                        style={{ borderRadius: "12px", width: "100%", objectFit: "cover" }} 
                                    />
                                </div>

                                {/* CTA Card: Neatly stacked below the image */}
                                {/* <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <div className="card card-chooseus-cta" style={{ width: "100%", margin: 0 }}>
                                        <h5>Partner with Checkmate Communication & take your brand to the next level.</h5>
                                        <div className="link-wrapper mt-3">
                                            <a href="./contact">Let's Talk Strategy</a>
                                            <i className="fa-solid fa-circle-arrow-right"></i>
                                        </div>
                                    </div>
                                </AnimateOnScroll> */}

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChooseUsSection;