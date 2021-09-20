import React from "react";
import {TextStyle} from '../../styles/common/common';
import {ButtonHoverScale} from "../../styles/animation/animation";

const Text = (props) => {
const {className, content, size} = props;
    return <TextStyle {...props}>{content}</TextStyle>;
}

const HoverScaleText = (props) => {
    const {content} = props;
    return <ButtonHoverScale>
        <Text {...props}/>
    </ButtonHoverScale>
};
export {Text, HoverScaleText}