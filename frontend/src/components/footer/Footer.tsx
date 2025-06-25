import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
          Meet Shivakumar Dasari 💻
          <span>
            <Link
              style={{ color: "white" }}
              className="nav-link"
              to={"https://www.linkedin.com/in/dasari-shivakumar-fullstack38998/"}
            >
              here
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
