import React, { useState } from "react";
import {Link} from "react-router-dom";
import Calendar from "../../components/atoms/rigg/calendar";
// import styles from '../public/styles/pages/watertap.module.scss';
import {ButtonStyle, Column, Row, Space, Size, Center} from '../../components/styles/common/common';
import {Text} from '../../components/atoms/bone/text';
import { ButtonHoverTransition, TextHoverColor} from "../../components/styles/animation/animation";
import {SettingBar} from "../../components/atoms/rigg/settingbar";
import WritedContent from "../../components/atoms/rigg/WritedContent";
import CreateContent from "../../components/atoms/rigg/createContent";

function read(){
    const [selectedDay,GetDay] = useState({year: 0, month: 0, day: 0});
    return (
        <Size height="100vh">
            <Center>
                <Size width="70%" height="50%">
                    <Row justify="center" align="center" gap="2">
                        {/* Calendar */}
                        <Size width="100%" height="100%">
                            <Column align="center">
                                <Calendar getDay={GetDay} />
                            </Column>
                        </Size>
                        {/* List */}
                        <Size width="100%" height="100%" style={{overflow:'scroll'}}>
                            <Space padding="0.2">
                                <Size>
                                    <Column justify="center" gap="1">
                                        <Text content={selectedDay.month +"월 " + selectedDay.day + "일 LIST"}/>
                                        <WritedContent textSize="236" spaceSize="983"/>
                                        <CreateContent/>
                                    </Column>
                                </Size>
                            </Space>
                        </Size>

                    </Row>
                </Size>
                <SettingBar
                    prevUrl="/"
                    nextUrl="/write/create"
                    settingUrl="/write/setting"
                />
            </Center>
        </Size>
    );
}
export default read;