import React from 'react';
import home1 from '../img/home1.png';
//styled
import styled from 'styled-components';
import {About, Description, Image, Hide} from '../styles';
const AboutSection = () =>
{
    return(
        <About>
        <Description>
        <div className="title">
        <h2>We work to make</h2>
       
        <Hide>
        <h2>your <span>dream</span> come</h2>
        </Hide>
        <Hide>
        <h2>true.</h2>
        </Hide>
        </div>
        <p> Contact us for any photography and videography ideas that you have. We have professionals with amazing skills</p>
        <button>Contact Us</button>
        </Description>
        <Image>
            <img src={home1} alt="fita me kamer"/>
        </Image>
        
       </About>
       

    )
       
    
}

export default AboutSection;