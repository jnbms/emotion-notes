import React from 'react';
import {Size, Space, Row, ButtonStyle} from "../../styles/common/common";
import { Text } from "../bone/text";
import {
    ButtonHoverTransition,
    TextHoverColor,
} from "../../styles/animation/animation";
import {usePopup} from "hooks";

function WritedContent(props){
    const {textSize, spaceSize, onClick} = props;
    const popup = usePopup({title:"DELETE",detail:"삭제할까요?",buttons:["확인","취소"]})
    return <Size onClick={onClick}>
    <ButtonHoverTransition>
        <ButtonStyle border="solid">
            <Space padding="0.3">
                <Text content={`공백 포함 : ${textSize}자`}/>
                <Text content={`공백 포함 : ${spaceSize}자`}/>
                <Row justify="flex-end">
                    <TextHoverColor hoverColor="red">
                        <Text
                            size="0.5"
                            content="DELETE"
                            onClick={(e)=>{
                            e.stopPropagation();
                            popup.open();
                            }}
                        />
                    </TextHoverColor>
                </Row>
            </Space>
        </ButtonStyle>
    </ButtonHoverTransition>
    </Size>
}
export default WritedContent;