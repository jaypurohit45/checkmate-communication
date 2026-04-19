import React, { useState, useEffect } from "react";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Effect to handle the external "nav-btn" (usually in your Header)
    useEffect(() => {
        const menuBtn = document.querySelector(".nav-btn");
        
        const openSidebar = () => setIsOpen(true);
        menuBtn?.addEventListener("click", openSidebar);

        return () => menuBtn?.removeEventListener("click", openSidebar);
    }, []);

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    const closeSidebar = () => {
        setIsOpen(false);
        setActiveDropdown(null);
    };

    return (
        <>
            {/* The Background Overlay */}
            <div 
                className={`sidebar-overlay ${isOpen ? "active" : ""}`} 
                onClick={closeSidebar}
            ></div>

            {/* The Sidebar Body */}
            <div className={`sidebar ${isOpen ? "active" : ""}`}>
                <div className="sidebar-header">
                    <div className="logo">
                        <img 
                            src="/assets/images/Checkmate Communication-logo.png" 
                            className="site-logo img-fluid logo" 
                            alt="Checkmate Communication Logo" 
                        />
                    </div>
                    <button className="close-btn" onClick={closeSidebar}>
                        <span><i className="fa-solid fa-xmark"></i></span>
                    </button>
                </div>

                <ul className="menu">
                    <li><a href="/" onClick={closeSidebar}>Home</a></li>
                    <li><a href="about" onClick={closeSidebar}>About Us</a></li>

                    {/* SERVICES DROPDOWN */}
                    <li className={`sidebar-dropdown ${activeDropdown === 0 ? "active" : ""}`}>
                        <div className="dropdown-header">
                            <a href="#" onClick={(e) => e.preventDefault()}>Services</a>
                            <button className="sidebar-dropdown-btn" onClick={() => toggleDropdown(0)}>
                                <i className={`fa-solid fa-angle-${activeDropdown === 0 ? "up" : "down"}`}></i>
                            </button>
                        </div>
                        <ul className={`sidebar-dropdown-menu ${activeDropdown === 0 ? "active" : ""}`}>
                            <li><a href="service" onClick={closeSidebar}>Service</a></li>
                            <li><a href="single_services" onClick={closeSidebar}>Service Details</a></li>
                        </ul>
                    </li>

                    {/* PAGES DROPDOWN */}
                    <li className={`sidebar-dropdown ${activeDropdown === 1 ? "active" : ""}`}>
                        <div className="dropdown-header">
                            <a href="#" onClick={(e) => e.preventDefault()}>Pages</a>
                            <button className="sidebar-dropdown-btn" onClick={() => toggleDropdown(1)}>
                                <i className={`fa-solid fa-angle-${activeDropdown === 1 ? "up" : "down"}`}></i>
                            </button>
                        </div>
                        <ul className={`sidebar-dropdown-menu ${activeDropdown === 1 ? "active" : ""}`}>
                            <li><a href="case_studies" onClick={closeSidebar}>Case Studies</a></li>
                            <li><a href="team" onClick={closeSidebar}>Our Team</a></li>
                            <li><a href="partnership" onClick={closeSidebar}>Partnership</a></li>
                            <li><a href="pricing" onClick={closeSidebar}>Pricing Plan</a></li>
                            <li><a href="testimonial" onClick={closeSidebar}>Testimonial</a></li>
                            <li><a href="faq" onClick={closeSidebar}>FAQs</a></li>
                            <li><a href="404_page" onClick={closeSidebar}>Error 404</a></li>
                        </ul>
                    </li>

                    {/* ARCHIVE DROPDOWN */}
                    <li className={`sidebar-dropdown ${activeDropdown === 2 ? "active" : ""}`}>
                        <div className="dropdown-header">
                            <a href="#" onClick={(e) => e.preventDefault()}>Archive</a>
                            <button className="sidebar-dropdown-btn" onClick={() => toggleDropdown(2)}>
                                <i className={`fa-solid fa-angle-${activeDropdown === 2 ? "up" : "down"}`}></i>
                            </button>
                        </div>
                        <ul className={`sidebar-dropdown-menu ${activeDropdown === 2 ? "active" : ""}`}>
                            <li><a href="blog" onClick={closeSidebar}>Blog</a></li>
                            <li><a href="single_post" onClick={closeSidebar}>Single Post</a></li>
                        </ul>
                    </li>

                    <li className="below-dropdown">
                        <a href="contact" onClick={closeSidebar}>Contact Us</a>
                    </li>
                </ul>

                {/* Optional: Add Social Links at the bottom like Desktop navs often have */}
                <div className="sidebar-footer" style={{ marginTop: "40px", padding: "20px" }}>
                    <div className="d-flex justify-content-center gap-3">
                        <a href="#" className="accent-color"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="accent-color"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" className="accent-color"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;