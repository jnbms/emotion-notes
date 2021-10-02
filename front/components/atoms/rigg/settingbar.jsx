import React from "react";
import {Link} from 'react-router-dom';
import {HoverScaleText, Text} from '../bone/text';
import { ButtonHoverScale, SettingBarPosition } from "../../styles/animation/animation";
// SettingBar2
import {Size, Row} from "../../styles/common/common";

function SettingBar(props){
    const {prevUrl, nextUrl, saveUrl, settingUrl} = props;
    return (
    <SettingBarPosition>
    <Link to={prevUrl? prevUrl: "#"}><HoverScaleText size="0.8" content="◁ 이전"/></Link>
    <Link to={nextUrl? nextUrl: "#"}><HoverScaleText size="0.8" content="▷ 다음"/></Link>
    <Link to={saveUrl? saveUrl: "#"}><HoverScaleText size="0.8" content="💾 저장"/></Link>
    <Link to={settingUrl? settingUrl: "#"}><HoverScaleText size="0.8" content="⚙️ 설정"/></Link>
    </SettingBarPosition>
    );
}
function SettingBar2(props){
    const {prev, next} = props;
    return  <Row justify="space-around" gap="2">
            <ButtonHoverScale>
                <Text
                size="0.8"
                content="◁ 이전"
                onClick={prev}
                />
            </ButtonHoverScale>
            <ButtonHoverScale>
                <Text
                size="0.8"
                content="💾저장"
                />
            </ButtonHoverScale>
            {/* <ButtonHoverScale>
                <Text size="0.8" content="⚙️ 설정"/>
            </ButtonHoverScale> */}
            <ButtonHoverScale>
                <Text
                size="0.8"
                content="▷ 다음"
                onClick={next}
                />
            </ButtonHoverScale>
        </Row>
}
export {SettingBar,SettingBar2};
