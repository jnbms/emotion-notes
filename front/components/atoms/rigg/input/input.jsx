import React, {useState} from "react";
import styles from './input.module.scss';
import {Column, Row, Space, Button, Size} from '../../../styledComponent/common'
import Text from '../';
import useInput from '../../../hooks/useInput';

// onChangeCapture - 캡처링 : 두 함수가 하나의 이벤트에 등록될 경우,
// Capture 프로퍼티에 등록하면 중복을 피해 순차대로 호출된다.

// 오류 : 지금 시스템의 Column Row의 Size 100% 속성과 autoReSize가 충돌한다.
function Input(props){
    // atom 1
    const text = useInput("");
    const textSize = text.value.length;
    const onlyTextSize = text.value.replace(/\s/g,'').length;
    // const whiteSpaceSize = textSize - onlyTextSize;

    // atom 2
    const {question, description}  = props;
    
    // atom 3
    const autoResize = (e) => {
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
        // console.log(e.target.scrollHeight);
    }
    return (
            <Column style={{gap:4}}>
                        {/* ATOM1 */}
                        <Space margin="0.2"/>
                            <Text size="1" content={question}/>
                        <Space margin="0.2">
                            <Text size="0.8" content={description}/>
                        </Space>
                        {/* ATOM2 */}
                        <textarea
                            spellCheck="false"
                            type="text"
                            placeholder="여기에 입력하세요."
                            className={styles.textarea}
                            {...text}
                            onChangeCapture={autoResize}
                            />
                    {/* ATOM3 */}
                    <Size height="1em">
                        <Row style={{gap:40}}>
                            <Text content={"공백 포함 :" + textSize + "자"}/>
                            <Text content={"공백 제외 :" + onlyTextSize + "자"}/>
                        </Row>
                    </Size>

                {/* <hr width="100%"/> */}
            </Column>   
    );
}
export default Input;