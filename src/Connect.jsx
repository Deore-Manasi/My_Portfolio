import "./Connect.css";
// import "./.env";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const sheetDBUrl = import.meta.env.VITE_SHEETDB_URL; // Replace YOUR_API_ID with your actual SheetDB ID

    try {
      const response = await fetch(sheetDBUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: [formData] }), // Wrap formData in an array
      });

      if (response.ok) {
        setStatus("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        const error = await response.json();
        setStatus(`Failed to submit: ${error.error}`);
      }
    } catch (error) {
      setStatus("Error submitting form. Please check your API URL.");
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-left">
        <h2>Let’s connect and collaborate!</h2>
        <p>
          I'd love to hear from you!
          <br /> Whether it's a project, job opportunity, or just a chat.
        </p>
        <button
          onClick={() =>
            (window.location.href = import.meta.env.VITE_RESUME_URL)
          }
        >
          Resume
        </button>
        <div className="social-icons">
          <a
            href={import.meta.env.VITE_LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#25032c" }} />

            {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" style={{color: "#74C0FC",}} /> */}
          </a>
          <a
            href={import.meta.env.VITE_GITHUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} style={{ color: "#25032c" }} />
          </a>
          {/* <a
            href={import.meta.env.VITE_LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a> */}
        </div>
      </div>
      <div className="contact-right">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        <p>{status}</p>
      </div>
    </div>
  );
}
