import styled from "styled-components";
import {typingText, blinkCaret} from "./keyframes";
const TypingAnimation = styled.div`
     overflow: hidden;
    white-space: nowrap;
    border-right: 1px solid rgb(100, 100, 100);
    letter-spacing: 0.2em;
    animation: 
        ${typingText} 1s steps(10,end),
        ${blinkCaret} 0.5s steps(2,end) infinite;  
`

const ButtonHoverAnimation = styled.div`
    width:100%; height: 100%;
    /* border:none; */
    border: 1px solid black;
    box-shadow: 4px 4px rgb(0, 0, 0, 0.125);
    transform:translate(-4px,-4px);
    &:hover{
        box-shadow: 0px 0px rgb(0, 0, 0, 0.125);
        transform: translate(0px,0px);
    }
`
const ButtonHoverTransition = styled.div`
    width:100%; height: 100%;
    &:hover{
        background-color: #f9f9f9;
    }
`
const ButtonHoverScale = styled.div`
        /* width:100%; height: 100%; */
    &:hover{
        transform: scale(1.1);
    }
`
// STATE
const SettingBarPosition = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    right: 20px;
    bottom: 20px;
    height: 20%;
    padding: 4px;
    justify-content: space-around;
    align-items: flex-end;
    overflow: hidden;
    white-space:nowrap;
    transition: width 1s;
    z-index: 1;

    opacity: 0.5;
    &:hover{
        opacity: 1;
    }
`
const TextHoverColor = styled.div`
    color: ${props => props.color};
    &:hover{
        color: ${props => props.hoverColor};
    }
`

export {TypingAnimation, ButtonHoverAnimation,
    ButtonHoverTransition, ButtonHoverScale,
    SettingBarPosition, TextHoverColor,
};