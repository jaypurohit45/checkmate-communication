import React from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../Theme/themeswitch";
import { useNav } from "../Context/NavContext";

function Navbar() {
  const { isDropdownActive } = useNav();

  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-xl">
        <div className="navbar-container container-fluid">
          
          {/* LOGO CONTAINER */}
          <div className="logo-container">
            <NavLink className="navbar-brand d-block" to="/" style={{ padding: 0 }}>
              <img
                src="/assets/images/Checkmate Communication-logo.png"
                className="site-logo shadow-sm"
                alt="Logo"
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block"
                }}
              />
            </NavLink>
          </div>

          <button
            className="navbar-toggler nav-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            {/* NAV LINKS - Added whiteSpace: "nowrap" to the entire list */}
            <ul 
              className="navbar-nav mx-auto d-flex flex-row flex-nowrap align-items-center" 
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
                {/* STRICT NOWRAP added directly to the Contact Us link */}
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

          {/* ACTION BUTTONS */}
          <div className="navbar-action-container d-flex flex-row align-items-center" style={{ gap: "12px" }}>
            <div className="navbar-action-button m-0 p-0">
              <ThemeSwitcher />
            </div>
            
            {/* Custom Contact Pill Container */}
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