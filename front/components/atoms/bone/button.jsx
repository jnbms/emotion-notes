import React from "react";
import {Text} from "./text";
import {ButtonStyle} from '../../styles/common/common';
import {TextHoverColor} from "../../styles/animation/animation";

const Button = (props) => {
    const {border, content} = props;
    return <ButtonStyle {...props}>
        <Text/>
    </ButtonStyle>
}
const HoverButton = (props) => {
    const {border, content, onHover,color, hoverColor} = props;
    return <TextHoverColor color={color} hoverColor={hoverColor}>
        <Text {...props}/>
    </TextHoverColor>
}
export {Button, HoverButton};