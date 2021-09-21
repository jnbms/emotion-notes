import React from "react";
import {Link} from 'react-router-dom';
import {HoverScaleText, Text} from '../bone/text';
import { ButtonHoverScale, SettingBarPosition } from "../../styles/animation/animation";
// SettingBar2
import {Size, Row} from "../../styles/common/common";

function SettingBar(props){
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
function SettingBar2(props){
    return  <Row justify="center" gap="2">
            <ButtonHoverScale>
                <Link to="/menu/read">
                    <Text size="0.8" content="◁ 이전"/>
                </Link>
            </ButtonHoverScale>
            <ButtonHoverScale>
                <Text size="0.8" content="💾저장"/>
            </ButtonHoverScale>
            <ButtonHoverScale>
                <Text size="0.8" content="⚙️ 설정"/>
            </ButtonHoverScale>
            <ButtonHoverScale>
                <Text size="0.8" content="▷ 다음"/>
            </ButtonHoverScale>
        </Row>
}
export {SettingBar,SettingBar2};
