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
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCFiwOI-W5b06NweratR-RdA"
      >
        <FaYoutube size={25} style={{ color: "white" }} />
      </a>
      <a target="_blank" href="https://github.com/RoboVITics">
        <FaGithub size={25} style={{ color: "white" }} />
      </a>
      <a target="_blank" href="https://www.linkedin.com/company/robovitics/">
        <FaLinkedin size={25} style={{ color: "white" }} />
      </a>
      <a target="_blank" href="https://www.facebook.com/robovitics">
        <FaFacebookF size={25} style={{ color: "white" }} />
      </a>
      <a
        target="_blank"
        href="https://instagram.com/robovitics?utm_medium=copy_link"
      >
        <FaInstagram size={25} style={{ color: "white" }} />
      </a>
    </Div>
  );
};

export default Socials;
