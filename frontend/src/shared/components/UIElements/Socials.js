import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineLinkedin } from "react-icons/ai";


import './Socials.css';

const Socials = (props) => {
  return (
    <div className={props.SocialClassName}>
      <a href="https://www.linkedin.com/in/caneryanizca" title="Linked-in" target="_blank">
        <AiOutlineLinkedin/>
      </a>
      <a href="https://www.instagram.com/caneryanizca" title="Instagram" target="_blank">
        <AiOutlineInstagram/>
      </a>
      <a href="https://twitter.com/caneryanizca" title="Twitter" target="_blank">
        <AiOutlineTwitter/>
      </a>
    </div>
  );
};

export default Socials;
