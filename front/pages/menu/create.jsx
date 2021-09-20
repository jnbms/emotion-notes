import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// import Textarea from '../components/atoms/textarea/textarea';
// import Button from '../components/atoms/button/button';
import { Column, Row, Size, Center, ButtonStyle} from '../../components/styles/common/common';
import {Text} from '../../components/atoms/bone/text';
import useInput from '../../hooks/useInput';
import { ButtonHoverScale } from '../../components/styles/animation/animation';
import SettringBar from '../../components/atoms/rigg/settingbar';

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
                <Size width="50%" height="40%">
                     <Column justify="center" align="center" style={{gap:8}}>
                         
                        <Column align="flex-start" style={{gap:4}}>
                            <Text size="1.1" content="제목."/>
                            {/* <Textarea {...title}></Textarea> */}
                        </Column>

                        <Column align="flex-start" style={{gap:4}}>
                        <Text size="1.1" content="설명."/>
                            {/* <Textarea {...subtitle}></Textarea> */}
                        </Column>

                    {/* PAGE에 바로 오지 않고 molecules로 제작하여 가져오도록 수정. */}
                    {/*                    
                    <Size height="" width="100%">
                        <Row justify="space-evenly" className="buttonGroupHoverScale">
                            <ButtonHoverScale>
                                <Link to="/menu/read"><Text size="0.8" content="◁ 이전"/></Link>
                            </ButtonHoverScale>
                            <ButtonHoverScale>
                                <Text size="0.8" content="💾저장"/>
                            </ButtonHoverScale>
                            <ButtonHoverScale>
                                <Text size="0.8" content="⚙️ 설정"/>
                            </ButtonHoverScale>
                            <ButtonHoverScale>
                                <Text size="0.8" content="추가 ▷"/>
                            </ButtonHoverScale>
                        </Row>
                    </Size> */}
                    <SettringBar prevUrl="/menu/read"/>

                    {/* <Row>
                        <Link href="/menu">
                            <Text size="0.8" content="PREV" style={{color:"blue"}}/>
                        </Link>
                    </Row> */}
                </Column>
              </Size>
            </Center>
        </Size>
    );
}
