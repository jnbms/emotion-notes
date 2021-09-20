import React, { Fragment, useState } from "react";
import {Link} from "react-router-dom";
import Calendar from "../../components/atoms/rigg/calender/calendar";
// import styles from '../public/styles/pages/watertap.module.scss';
import {ButtonStyle, Column, Row, Space, Size, Center} from '../../components/styles/common/common';
import {Text} from '../../components/atoms/bone/text';
import { ButtonHoverTransition, TextHoverColor} from "../../components/styles/animation/animation";
import SettringBar from "../../components/atoms/rigg/settingbar";

function read(){

    const [selectedDay,GetDay] = useState({year: 0, month: 0, day: 0});
    return (
        <Size height="100vh">
            <Center>
                <Size width="80%" height="100%">
                    <Row align="center" gap="2">
                        <Size width="100%" height="70%">
                            <Column align="center">
                                <Calendar getDay={GetDay} />
                            </Column>
                        </Size>

                        <Column justify="center" gap="0.5">
                            <Text content={selectedDay.month +"월 " + selectedDay.day + "일 LIST"}/>
                            
                            <Size>
                            <ButtonHoverTransition>
                                <ButtonStyle border="solid">
                                    <Space padding="0.3">
                                        <Text content="공백 포함 :"/>
                                        <Text content="공백 포함 :"/>
                                        <Row justify="flex-end">
                                            <TextHoverColor hoverColor="red">
                                                <Text size="0.5" content="DELETE"/>
                                            </TextHoverColor>
                                        </Row>
                                    </Space>
                                </ButtonStyle>
                            </ButtonHoverTransition>
                            </Size>

                            <Size>
                                <Link to="/write/create">
                                <ButtonHoverTransition>
                                    <ButtonStyle border="dashed">
                                        <Space padding="0.5">
                                        <Text content="작성하기 (+)"/>
                                        </Space>
                                    </ButtonStyle>
                                </ButtonHoverTransition>
                                </Link>
                            </Size>

                        </Column>

                    </Row>
                </Size>
                <SettringBar prevUrl="/menu/read" nextUrl=""/>
            </Center>
        </Size>
    );
}
export default read;