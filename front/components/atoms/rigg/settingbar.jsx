import React from "react";
import {Link} from 'react-router-dom';
import {HoverScaleText} from '../bone/text';
import { SettingBarPosition } from "../../styles/animation/animation";

function SettringBar(props){
    const {prevUrl, nextUrl} = props;
    return (
    <SettingBarPosition>
    <Link to={prevUrl}><HoverScaleText size="0.8" content="◁ 이전"/></Link>
    <Link to={nextUrl}><HoverScaleText size="0.8" content="▷ 다음"/></Link>
    <HoverScaleText size="0.8" content="💾 저장"/>
    <HoverScaleText size="0.8" content="⚙️ 설정"/>
    </SettingBarPosition>
    );
}
export default SettringBar;