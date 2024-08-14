import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";
// importing Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

// Animations
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim, Slider, sliderContainer, scrollReveal } from "../animation";

import { useScroll } from "../components/useScroll";
const OurWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return (
        <Work variants={pageAnimation} initial='hidden' animate='show' exit='exit' style={{ background: "#fff" }}>
            <motion.div variants={sliderContainer}>
                <Frame1 variants={Slider}></Frame1>
                <Frame2 variants={Slider}></Frame2>
                <Frame3 variants={Slider}></Frame3>
                <Frame4 variants={Slider}></Frame4>
            </motion.div>
            <Movie >
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={photoAnim} src={athlete} alt="movieImage" />
                    </Hide>
                </Link>
            </Movie>
            <Movie variants={fade} ref={element} animate={controls} initial="hidden">
                <h2>The Racer</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <Hide>
                        <img variants={photoAnim} src={theracer} alt="movieImage" />
                    </Hide>
                </Link>
            </Movie>
            <Movie variants={fade} ref={element2} animate={controls2} initial="hidden">
                <h2>Good Times</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <Hide>
                        <img variants={photoAnim} src={goodtimes} alt="movieImage" />
                    </Hide>
                </Link>
            </Movie>
            <ScrollTop />
        </Work >
    );
};

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;

    @media (max-width: 1300px){
        padding: 2rem 2rem;
    }
`;

const Movie = styled(motion.div)`
padding-bottom: 5rem;
h2{
    color: black;
    padding: 1rem 0rem;
}

.line{
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
}

img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}

`;

const Hide = styled.div`
    overflow: hidden;
`;

const Frame1 = styled(motion.div)`
    position: fixed;
    top: 10%;
    left: 0%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
    background: #8effa0;
`;



export default OurWork;