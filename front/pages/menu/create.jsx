import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// import Textarea from '../components/atoms/textarea/textarea';
// import Button from '../components/atoms/button/button';
import { Column, Row, Size, Center, ButtonStyle} from '../../components/styles/common/common';
import {Text} from '../../components/atoms/bone/text';
import useInput from '../../hooks/useInput';
import {SettingBar2, SettringBar} from '../../components/atoms/rigg/settingbar';
import { ButtonHoverScale } from '../../components/styles/animation/animation';
import Input from '../../components/atoms/bone/input';


export default function Createmenu() {

    const title = useInput();
    const subtitle = useInput();

    const Obj = {
        title: "제목",
        discription: "설명",
        subtitle : [
        {
            id: 1,
            subject: "주제1",
            discription: "설명1"
        },
        {
            id: 2,
            subject: "주제2",
            discription: "설명2"
        },
        ]
    }
    return (
        <Size height="100vh">
           <Center>
                <Size width="50%" height="50%">
                     <Column justify="center" align="center" gap="1">
                         
                        <Column align="flex-start" gap="0.5">
                            <Text size="1.1" content="제목."/>
                                <Input maxLength="50" height="2" {...title}></Input>
                        </Column>

                        <Column align="flex-start" gap="0.5">
                        <Text size="1.1" content="설명."/>
                            <Input maxLength="100" height="4" {...subtitle}></Input>
                        </Column>

                    {/* PAGE에 바로 오지 않고 molecules로 제작하여 가져오도록 수정. */}
                    {/* <SettringBar prevUrl="/menu/read"/> */}
                    <SettingBar2/>
                </Column>
              </Size>
            </Center>
        </Size>
    );
}
