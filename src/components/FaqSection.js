import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { LayoutGroup } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <Faq variants={scrollReveal} ref={element} animate={controls} initial='hidden'>
            <h2>Any questions <span>FAQ</span></h2>
            <LayoutGroup>
                <Toggle title='How Do I Start?'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, ad!</p>
                    </div>
                </Toggle>
                <Toggle title='Daily Schedule'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, ad!</p>
                    </div>
                </Toggle>
                <Toggle title='Diffrent Payment Methods'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, ad!</p>
                    </div>
                </Toggle>
                <Toggle title='What Products Do You Offer'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, ad!</p>
                    </div>
                </Toggle>
            </LayoutGroup>
        </Faq>
    );
};

const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    
    h2{
        padding-bottom: 3rem;
        font-weight: lighter;
    }

    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .question{
        padding: 1.5rem 0rem;
        cursor: pointer;
    }

    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;