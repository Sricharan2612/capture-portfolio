import React from "react";
// import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

import { About, Description, Image } from "../styles";
import styled from "styled-components";

import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (
        <Services variants={scrollReveal} ref={element} animate={controls} initial='hidden'>
            <Description>
                <h2>High <span>quality</span> services.</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clockIcon" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamworkIcon" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragmIcon" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="moneyIcon" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="" />
            </Image>
        </Services>
    );
};

const Services = styled(About)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 80%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width:1300px){
         justify-content: center;
      }
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;


        }
    }
`;

export default ServicesSection;