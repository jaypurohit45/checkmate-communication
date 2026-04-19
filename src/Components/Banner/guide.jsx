import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function GuideBannerSection() {
    return (
        <>
            <div className="section-guide">
                {/* Added the background image here using your requested file name */}
                <div 
                    className="guide-banner"
                    style={{
                        backgroundImage: "url('/assets/images/guide.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className="hero-container">
                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                            {/* Restored the original layout classes, completely removing the video container */}
                            <div className="guide-content">
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">
                                        Transform Your Business with Checkmate Communication!
                                    </h3>
                                    <p>
                                        Take your digital marketing to the next level with data-driven strategies and innovative solutions. Let's create something amazing together!
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GuideBannerSection;