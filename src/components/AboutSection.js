import React from "react";
import home1 from "../img/home1.png";
//styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

// framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "../components/Wave";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dream</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade} initial="hidden" animate="show">
          Contact us for any photography and videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={fade} initial="hidden" animate="show">
          Contact Us
        </motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="fita me kamer" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
