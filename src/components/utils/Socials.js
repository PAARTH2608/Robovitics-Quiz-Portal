import styled from "styled-components";
import {
  FaYoutube,
  FaGithub,
  FaGlobe,
  FaMailBulk,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 40vh;
`;

const Socials = () => {
  return (
    <Div>
      <Link to="https://www.youtube.com/channel/UCFiwOI-W5b06NweratR-RdA">
        <a target="_blank">
          <FaYoutube size={25} style={{ color: "white" }} />
        </a>
      </Link>
      <Link to="https://github.com/RoboVITics">
        <a target="_blank">
          <FaGithub size={25} style={{ color: "white" }} />
        </a>
      </Link>
      {/* <Link to="/">
        <a target="_blank">
          <FaGlobe size={25} style={{ color: "white" }} />
        </a>
      </Link>
      <Link to="/">
        <a target="_blank">
          <FaMailBulk size={25} style={{ color: "white" }} />
        </a>
      </Link> */}
      <Link to="https://www.linkedin.com/company/robovitics/">
        <a target="_blank">
          <FaLinkedin size={25} style={{ color: "white" }} />
        </a>
      </Link>
      <Link to="https://www.facebook.com/robovitics">
        <a target="_blank">
          <FaFacebookF size={25} style={{ color: "white" }} />
        </a>
      </Link>
      <Link to=" https://instagram.com/robovitics?utm_medium=copy_link">
        <a target="_blank">
          <FaInstagram size={25} style={{ color: "white" }} />
        </a>
      </Link>
    </Div>
  );
};

export default Socials;
