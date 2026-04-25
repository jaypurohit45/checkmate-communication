import React from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../Theme/themeswitch";
import { useNav } from "../Context/NavContext";

function Navbar() {
  const { isDropdownActive } = useNav();

  return (
    <div className="navbar-wrapper">
      <style>{`
        /* 1. Mobile Logo Scaling: Ensures it fits on the same line as icons */
        .responsive-logo {
          height: 40px !important;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          transition: height 0.2s ease;
        }

        /* 2. Fixes the mobile sidebar so links stack vertically when opened */
        @media (max-width: 1199.98px) {
          .mobile-nav-stack {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding-top: 1rem;
          }
          .mobile-nav-stack .nav-item {
            width: 100%;
          }
        }

        /* 3. Desktop specific overrides (Untouched original size) */
        @media (min-width: 1200px) {
          .responsive-logo {
            height: 55px !important; 
          }
        }
      `}</style>

      {/* Standard Bootstrap navbar expand logic */}
      <nav className="navbar navbar-expand-xl">
        <div className="navbar-container container-fluid">
          
          {/* 1. LOGO: 'me-auto' forces it to the left and pushes everything else right */}
          <NavLink className="navbar-brand me-auto p-0 m-0" to="/">
            <img
              src="/assets/images/Checkmate-logo.png"
              alt="Logo"
              className="responsive-logo"
            />
          </NavLink>

          {/* 2. STRICTLY MOBILE ACTIONS: flex-row and flex-nowrap lock them in one horizontal line */}
          <div className="d-flex d-xl-none flex-row flex-nowrap align-items-center" style={{ gap: "8px" }}>
            <div className="m-0 p-0 d-flex align-items-center">
              <ThemeSwitcher />
            </div>
            
            {/* Mobile Phone CTA (Circular Icon Only) */}
            <div 
              className="d-flex justify-content-center align-items-center"
              style={{ 
                width: "36px", 
                height: "36px", 
                fontSize: "0.85rem", 
                backgroundColor: "var(--primary-color, #0d6efd)", 
                color: "#fff", 
                borderRadius: "50%",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                margin: 0,
                flexShrink: 0 /* Prevents icon from squishing */
              }}
            >
              <i className="fa-solid fa-phone-volume"></i>
            </div>

            {/* Hamburger Menu Toggler */}
            <button
              className="navbar-toggler nav-btn border-0 shadow-none p-1 ms-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ flexShrink: 0 }} /* Prevents button from squishing */
            >
              <i className="fa-solid fa-bars fs-4"></i>
            </button>
          </div>

          {/* 3. COLLAPSIBLE LINKS: Stays horizontal on laptop, stacks perfectly on mobile */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul 
              className="navbar-nav mx-auto d-flex flex-xl-row flex-xl-nowrap align-items-xl-center mobile-nav-stack" 
              style={{ columnGap: "1rem", margin: 0, padding: 0, whiteSpace: "nowrap" }}
            >
              <li className="nav-item">
                <NavLink to="/" className="nav-link" end style={{ padding: "0.5rem" }}>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className="nav-link" style={{ padding: "0.5rem" }}>
                  About
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${
                    isDropdownActive(["/service", "/single_services"]) ? "active" : ""
                  }`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ padding: "0.5rem" }}
                >
                  Services <i className="fa-solid fa-angle-down accent-color"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink to="/service" className="dropdown-item">Service</NavLink></li>
                  <li><NavLink to="/single_services" className="dropdown-item">Single Services</NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${
                    isDropdownActive([
                      "/case_studies", "/team", "/partnership", "/pricing", "/testimonial", "/faq", "/404_page",
                    ]) ? "active" : ""
                  }`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ padding: "0.5rem" }}
                >
                  Pages <i className="fa-solid fa-angle-down accent-color"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink to="/case_studies" className="dropdown-item">Case Studies</NavLink></li>
                  <li><NavLink to="/team" className="dropdown-item">Our Team</NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${
                    isDropdownActive(["/blog", "/single_post"]) ? "active" : ""
                  }`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ padding: "0.5rem" }}
                >
                  Archive <i className="fa-solid fa-angle-down accent-color"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink to="/blog" className="dropdown-item">Blog</NavLink></li>
                  <li><NavLink to="/single_post" className="dropdown-item">Single Post</NavLink></li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink 
                  to="/contact" 
                  className="nav-link" 
                  style={{ padding: "0.5rem", whiteSpace: "nowrap" }}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* 4. STRICTLY LAPTOP ACTIONS: Hidden completely on mobile, identical to your original design */}
          <div className="navbar-action-container d-none d-xl-flex flex-row align-items-center" style={{ gap: "12px" }}>
            <div className="navbar-action-button m-0 p-0">
              <ThemeSwitcher />
            </div>
            
            <div 
              className="d-flex align-items-center" 
              style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.05)", 
                borderRadius: "50px", 
                padding: "4px 12px 4px 4px", 
                gap: "8px",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}
            >
              <div 
                className="d-flex justify-content-center align-items-center"
                style={{ 
                  width: "30px", 
                  height: "30px", 
                  fontSize: "0.75rem", 
                  backgroundColor: "var(--primary-color, #0d6efd)", 
                  color: "#fff", 
                  borderRadius: "50%",
                  margin: 0
                }}
              >
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <span style={{ fontSize: "0.9rem", fontWeight: "600", whiteSpace: "nowrap", margin: 0 }}>
                +91 6355005608
              </span>
            </div>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;