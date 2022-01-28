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

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height:40vh;
`;

const Socials = () => {
  return (
    <Div>
      <FaYoutube size={25} style={{color:"white"}}/>
      <FaGithub size={25} style={{color:"white"}}/>
      <FaGlobe size={25} style={{color:"white"}}/>
      <FaMailBulk size={25} style={{color:"white"}}/>
      <FaLinkedin size={25} style={{color:"white"}}/>
      <FaFacebookF size={25} style={{color:"white"}}/>
      <FaInstagram size={25} style={{color:"white"}}/>
    </Div>
  );
};

export default Socials;
