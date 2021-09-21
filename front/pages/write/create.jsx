import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {SettingBar} from "../../components/atoms/rigg/settingbar";
import TextArea from "../../components/atoms/rigg/textarea";
import {Center, Column, Size, Space} from "../../components/styles/common/common";

function create(){
    const [day,setDay] = useState({year: 0,month: 0,day: 0});

    const waterTap = [
        {   
            question: "사건 기록",
            description : "겪었던 그 상황을 육하원칙에 따라 객관적으로 작성해보세요."
        },
        {   
            question: "내 감정을 자세하게 적어보기",
            description : 
                "모든 감정 포인트를 하나하나 설명하듯 적어보세요. "
                + "여러분들 혼자만의 공간에서 솔직하게 적어보세요."
        },
        {   
            question: "감정을 인정하고 다독여주기",
            description : 
                "아무것도 판단하지말고 여러분의 감정을 있는 그대로 인정해주세요."
                + "어른스럽기를 강요하지말고 여러분들의 마음 속의 5살난 아이를 달래주세요."
        },
        {   
            question: "왜?라고 질문 던져보기",
            description : 
                "당신의 감정에 스스로 왜 라는 질문을 던져보세요. "
                + "최대한 다양한 대상에게 질문해보세요 "
                + " - 나는 왜 기분이 나빳을까? "
                + " - 나는 왜 그 말이 그렇게까지 불편했을까? "
                + " - 나는 왜 그 행동을 그런 의미로 해석했을까? "
                
        },
        {   
            question: "스스로 답해보기 [대응메뉴얼 만들기]",
            description : 
                "스스로 답을 해나가다보면 자신의 마음을 더 깊이 이해할 수 있게 될 겂니다."
                + " 또 다시 그런 상황이 발생했을 때 어떻게 대처할 것인지 여러분들만의 행동 지침을 만들어보세요."
                + " 지금 이 상황에서 어떻게 행동하는 것이 최선인지 스스로 답을 구해보시기 바랍니다."
                
        },
    ];

    return <Size height="100vh">
        <Column align="center">
            <Size width="80%">
                    <Column justify="center" align="center" gap="2.5">
                        <Space margin="0"/>
                        <TextArea question={waterTap[0].question} description={waterTap[0].description}/>
                        <TextArea question={waterTap[1].question} description={waterTap[1].description}/>
                        <TextArea question={waterTap[2].question} description={waterTap[2].description}/>
                        <TextArea question={waterTap[3].question} description={waterTap[3].description}/>
                        <TextArea question={waterTap[4].question} description={waterTap[4].description}/>
                        <Space margin="0"/>
                    </Column>
                <SettingBar prevUrl="/write/read" nextUrl=""/>
            </Size>
        </Column>
    </Size>
}
export default create;