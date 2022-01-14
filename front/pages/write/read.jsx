import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Calendar from "../../components/atoms/rigg/calendar";
// import styles from '../public/styles/pages/watertap.module.scss';
import {ButtonStyle, Column, Row, Space, Size, Center} from '../../components/styles/common/common';
import {Text} from '../../components/atoms/bone/text';
import { ButtonHoverTransition, TextHoverColor} from "../../components/styles/animation/animation";
import {SettingBar} from "../../components/atoms/rigg/settingbar";
import WritedContent from "../../components/atoms/rigg/WritedContent";
import CreateContent from "../../components/atoms/rigg/createContent";
const DB = window.API.DB.history;

function read(){
    const [selectedDay,GetDay] = useState({year: 0, month: 0, day: 0});
    const [lists, setLists] = useState([{},{},{},{},{}]);

    const openList = page => location.href = `/write/create/${page}`;

    useEffect(() => {
        DB.readAll().then((result) => setLists(result))
    }, []) 
    return (
        <Size height="100vh">
            <Center>
                <Size width="80%" height="60%">
                    <Row justify="center" align="center" gap="2">
                        {/* Calendar */}
                            <Column align="center">
                                <Calendar getDay={GetDay} />
                            </Column>
                        {/* List */}
                        <Size width="100%" height="100%" style={{overflow:'scroll'}}>
                            <Space padding="0.2">   
                                <Column justify="center" gap="0.2">
                                    <Text content={selectedDay.month +"월 " + selectedDay.day + "일 LIST"}/>
                                    {lists.map((list,index) => 
                                    <WritedContent
                                        key={index}
                                        textSize={list.textSize}
                                        spaceSize={list.spaceSize}
                                        onClick={() => openList(list.id)}
                                    />
                                    )}
                                    <CreateContent/>
                                </Column>
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

// function Calender