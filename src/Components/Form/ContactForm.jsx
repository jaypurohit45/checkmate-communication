import React, { useState } from "react";

const ContactForm = () => {
  // Capture all inputs from your original design
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState(""); // "" | "loading" | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Send data to your Vercel API
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
            subject: formData.subject,
            message: formData.message
        }),
      });

      if (res.ok) {
        setStatus("success");
        // Clear the form back to empty
        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(""), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 4000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 4000);
    }
  };

  return (
    <div className="form-layout-wrapper">
        <div className="card form-layout">
            <h3 className="title-heading">Let's Talk About Your Next Project</h3>

            {/* Your exact original success message popup */}
            {status === "success" && (
            <div id="success-message" className="alert success">
                <span className="check-icon">
                    <i className="fa-solid fa-check"></i>
                </span>
                <p className="text-center">Thank you! Message sent successfully.</p>
            </div>
            )}

            {/* Your exact original error message popup */}
            {status === "error" && (
            <div id="error-message" className="alert error">
                <span className="cross-icon">
                <i className="fa-solid fa-xmark"></i>
                </span>
                <p className="text-center">Oops! Form submission failed. Please try again.</p>
            </div>
            )}

            <form
            onSubmit={handleSubmit}
            id="contactForm"
            className="form needs-validation"
            >
                <div className="row row-cols-md-2 row-cols-1 g-3">
                    <div className="col">
                        <input type="text" name="firstName" id="first-name" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="col">
                        <input type="text" name="lastName" id="last-name" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                    </div>
                </div>

                <div className="row row-cols-md-2 row-cols-1 g-3">
                        <div className="col">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col">
                            <input type="text" name="subject" id="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                        </div>
                </div>

                <textarea name="message" id="message" rows="5" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>

                <div className="form-button-container">
                        <button type="submit" className="btn btn-accent" disabled={status === "loading"}>
                            <span className="btn-title">
                                <span>{status === "loading" ? "Sending..." : "Send a Message"}</span>
                            </span>
                            <span className="icon-circle">
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default ContactForm;