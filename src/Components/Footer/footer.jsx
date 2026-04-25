import React from "react";

const Footer = () => {
  return (
    <div className="section-footer">
      
      {/* Embedded CSS for Logo Adjustments */}
      <style>{`
        .responsive-footer-logo {
          max-width: 60% !important; /* Strictly limits max-width to 60% */
          height: auto;
          display: block; /* Required for auto margins */
          margin: 0 auto 1.5rem auto; /* Perfectly centers the logo and adds space below */
        }

        /* Mobile View Overrides */
        @media (max-width: 767.98px) {
          .responsive-footer-logo {
            max-width: 40% !important; /* Makes the logo notably smaller on mobile */
          }
          .footer-logo-container {
            text-align: center; /* Centers the text below the logo on mobile for a clean layout */
          }
        }
      `}</style>

      <div className="bg-footer-wrapper">
        <div className="bg-footer">
          <div className="hero-container position-relative z-2">
            <div className="d-flex flex-column gspace-2">
              <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 grid-spacer-5">
                
                {/* 1. Logo Column */}
                <div className="col col-lg-4">
                  <div className="footer-logo-container">
                    <div className="logo-container-footer">
                      {/* Applied the new responsive-footer-logo class here */}
                      <img 
                        src="/assets/images/Checkmate-logo.png" 
                        alt="Logo" 
                        className="site-logo img-fluid responsive-footer-logo" 
                      />
                    </div>
                    <h4>Driving Digital Growth with Innovation & Strategy</h4>
                    <p>
                      Lorem ipsum dolor si consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
                    </p>
                  </div>
                </div>

                {/* 2. Quick Links Column */}
                <div className="col col-lg-2">
                  <div className="footer-quick-links">
                    <h5>Quick Links</h5>
                    <ul className="footer-list">
                      <li><a href="/">Home</a></li>
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/service">Service</a></li>
                      <li><a href="/case_studies">Case Studies</a></li>
                      <li><a href="/blog">Blog</a></li>
                      <li><a href="/contact">Contact Us</a></li>
                    </ul>
                  </div>
                </div>

                {/* 3. Services Column */}
                <div className="col col-lg-3">
                  <div className="footer-services-container">
                    <h5>Services</h5>
                    <ul className="footer-list">
                      <li><a href="/single_services">Social Media Marketing</a></li>
                      <li><a href="/single_services">SEO Optimization</a></li>
                      <li><a href="/single_services">PPC Advertising</a></li>
                      <li><a href="/single_services">Content Marketing</a></li>
                      <li><a href="/single_services">Branding Strategy</a></li>
                      <li><a href="/single_services">Email Marketing</a></li>
                    </ul>
                  </div>
                </div>

                {/* 4. Contact Info Column */}
                <div className="col col-lg-3">
                  <div className="footer-contact-container">
                    <h5>Contact Info</h5>
                    <ul className="contact-list">
                      <li>hello@CheckmateCommunicationagency.com</li>
                      <li>+1 234 567 890</li>
                      <li>123 Digital Street, New York, USA</li>
                    </ul>
                    <div className="d-flex flex-column gspace-1">
                      <h5>Social Media</h5>
                      <div className="social-container">
                        <div className="social-item-wrapper">
                          <a href="https://facebook.com" className="social-item">
                            <i className="fa-brands fa-facebook"></i>
                          </a>
                        </div>
                        <div className="social-item-wrapper">
                          <a href="https://youtube.com" className="social-item">
                            <i className="fa-brands fa-youtube"></i>
                          </a>
                        </div>
                        <div className="social-item-wrapper">
                          <a href="https://instagram.com" className="social-item">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </div>
                        <div className="social-item-wrapper">
                          <a href="https://linkedin.com" className="social-item">
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="footer-content-spacer"></div>
            </div>

            <div className="copyright-container">
              <span className="copyright">© 2025 Checkmate Communication. All Rights Reserved.</span>
              <div className="d-flex flex-row gspace-2">
                <a href="#" className="legal-link">Terms of Service</a>
                <a href="#" className="legal-link">Privacy Policy</a>
              </div>
            </div>

            <div className="footer-spacer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;