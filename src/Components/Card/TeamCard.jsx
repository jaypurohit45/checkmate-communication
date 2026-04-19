import React, { useState } from "react";

const TeamCard = ({ name, title, image, socials }) => {
  const [hovered, setHovered] = useState(false);

  const iconStyle = {
    color: "#ffffff",
    fontSize: "1.4rem",
    display: "inline-block",
    visibility: "visible",
    opacity: 1,
  };

  const linkStyle = {
    color: "#ffffff",
    fontSize: "1.4rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.15)",
    visibility: "visible",
    opacity: 1,
  };

  return (
    <div className="col">
        <div className="d-flex flex-column">
            <div
                className="image-team"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{ position: "relative", cursor: "pointer" }}
            >
                <img src={image} alt={name} className="img-fluid" />

                <div style={{
                    position: "absolute",
                    top: 0, left: 0,
                    width: "100%", height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.55)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                    opacity: hovered ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    borderRadius: "inherit",
                    zIndex: 10,
                }}>
                    {socials?.facebook && (
                        <a href={socials.facebook} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                            <i className="fa-brands fa-facebook" style={iconStyle}></i>
                        </a>
                    )}
                    {socials?.instagram && (
                        <a href={socials.instagram} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                            <i className="fa-brands fa-instagram" style={iconStyle}></i>
                        </a>
                    )}
                    {socials?.linkedin && (
                        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                            <i className="fa-brands fa-linkedin" style={iconStyle}></i>
                        </a>
                    )}
                </div>
            </div>

            <div className="team-profile">
                <h4>{name}</h4>
                <span className="title">{title}</span>
            </div>
        </div>
    </div>
  );
};

export default TeamCard;