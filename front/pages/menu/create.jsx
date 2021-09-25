import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
// import Textarea from '../components/atoms/textarea/textarea';
// import Button from '../components/atoms/button/button';
import { Column, Row, Size, Center, ButtonStyle} from '../../components/styles/common/common';
import {Text} from '../../components/atoms/bone/text';
import useInput from '../../hooks/useInput';
import {SettingBar2, SettringBar} from '../../components/atoms/rigg/settingbar';
import { ButtonHoverScale } from '../../components/styles/animation/animation';
import Input from '../../components/atoms/bone/input';
import useCount from '../../hooks/count';
import usePopup from '../../hooks/usePopup';

export default function Createmenu() {
    
    const count = useCount();
    const title = useInput("");
    const discription = useInput("");
    const clearText = () => {title.setValue(""); discription.setValue("");}
    const discriptionName = "설명하기"
    const titleName =  count.value == 0 ? "제목" : `질문 ${count.value}번`;

    // POPUP
    const popupOptions = {
        title: "삭제",
        detail: "작성 중인 내용이 있습니다.",
        buttons: ["삭제","취소"]
    };
    const popup = usePopup(popupOptions);
    useEffect(()=>{popup.value == 0 ? location.href = "/menu/read" : ""; console.log("effect")},[popup.value])    // EXIT 페이지

    // ARRAY
    const column = (title, discription) => {return {title: title, discription: discription}};
    useEffect(()=>{
        // CREATE NEW OBJECT
        let values = window.API.DB.menu.read(count.value);
        if(values == undefined){
            window.API.DB.menu.create(column("",""),count.value);
        } else {
            console.log(values);
            title.setValue(values.title); discription.setValue(values.discription); //reset value
        }
        // if(values.title == undefined) values.title = "";
        // if(values.discription == undefined) values.discription = "";
        // title.setValue(thisPageValue.title); discription.setValue(thisPageValue.discription); //reset value
    },[count.value])

    const prevPage = () => {
        if(count.value == 0){
            if(title.value.length == 0) location.href = "/menu/read";
            else popup.open();
        }
        else {count.decrease();}
    }
    const nextPage = () => {
        window.API.DB.menu.create(column(title.value,discription.value),count.value);
        count.increase();
        // const {title,discription} = window.API.DB.menu.read(count.value)
        // title.setValue(title); discription.setValue(discription);
    }

    return (
        <Size height="100vh">
           <Center>
                <Size width="50%">
                     <Column align="center" justify="center" gap="1">
                         
                        <Text size="1.1" content={titleName}/>
                        <Input maxLength="50" {...title}/>

                        {count.value == 0 ? "" : <>
                            <Text size="1.1" content={discriptionName}/>
                            <Input maxLength="100" {...discription}></Input>
                            </>
                        }
                       
                    <Size width="100%">
                        <SettingBar2 prev={prevPage} next={nextPage}/>
                    </Size>
                </Column>
              </Size>
            </Center>
        </Size>
    );
}
