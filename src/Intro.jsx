import "./Intro.css";
import Profile from "./Profile.png";
import Linkdin from "./linkedin.png";
import Github from "./Github.png";

export default function Intro() {
  const linkdin = () => {
    window.location.href = import.meta.env.VITE_LINKEDIN_URL; // Replace with your desired URL
  };
  const github = () => {
    window.location.href = import.meta.env.VITE_GITHUB_URL; // Replace with your desired URL
  };
  return (
    <div className="info" id="Intro">
      <div className="info-left">
        <p className="info-text">
          <b>Hi, I'm Manasi Deore.</b>
          <br />
          <br />
          <i>
            A MERN Stack Developer skilled in creating dynamic, user-friendly
            web applications. I turn ideas into scalable,seamless digital
            solutions.
          </i>
        </p>
        <div className="icons">
          <img
            src={Linkdin}
            alt="description"
            style={{ width: "35px", height: "35px" }}
            onClick={linkdin}
          />

          <img
            src={Github}
            alt="description"
            style={{ width: "35px", height: "36px" }}
            onClick={github}
          />
        </div>
      </div>

      <div className="info-right">
        <img
          src={Profile}
          alt="description"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}

//  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
//  import { faTwitter } from "@fortawesome/free-brands-svg-icons";

/* <FontAwesomeIcon icon={faTwitter} />
<FontAwesomeIcon icon={faEnvelope} /> */
