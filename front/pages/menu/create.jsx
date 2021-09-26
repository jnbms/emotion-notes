import React, {useEffect} from 'react';
// import Textarea from '../components/atoms/textarea/textarea';
// import Button from '../components/atoms/button/button';
import { Column, Row, Size, Center, ButtonStyle} from 'components/styles/common/common';
import {Text} from 'components/atoms/bone/text';
import {SettingBar2, SettringBar} from 'components/atoms/rigg/settingbar';
import { ButtonHoverScale } from '../../components/styles/animation/animation';
import Input from 'components/atoms/bone/input';
import {useInput, useCount, usePopup} from 'hooks';

export default function Createmenu() {
    
    const count = useCount();
    const title = useInput("");
    const subtitle = useInput("");
    const titleName =  count.value == 0 ? "제목" : `질문 ${count.value}번`;
    const subtitleName = "설명하기"
    const MENU = window.API.page.menu;
    const clearTitles = () => {title.setValue(""); subtitle.setValue("");}
    const saveTitles = () => MENU.create(column(title.value,subtitle.value),count.value);
    const column = (title, subtitle) => new Object({title: title, subtitle: subtitle});

    // POPUP
    const popupOptions = {
        title: "삭제",
        detail: "작성 중인 내용이 있습니다.",
        buttons: ["삭제","취소"]
    };
    const popup = usePopup(popupOptions);
    useEffect(()=>{if(popup.value == 0) location.href = "/menu/read";},[popup.value])    // EXIT 페이지 - HOOK으로 간소화 연구해보기
    // ARRAY
    useEffect(()=>{
        // CREATE NEW OBJECT
        const Count = count.value;
        const pageProps = MENU.read(Count);
        if(pageProps == undefined){
            MENU.create(null,Count);
        } else {
            console.log(pageProps);
            title.setValue(pageProps.title); subtitle.setValue(pageProps.subtitle); //reset value
        }
    },[count.value])
    useEffect(()=>{console.log(MENU.readAll())})

    const prevPage = () => {
        if(count.value == 0) { 
            title.value.length == 0 ? location.href = "/menu/read" : popup.open();
        }
        else {
            saveTitles();
            clearTitles();
            count.decrease();
        }
    }
    const nextPage = () => {
        saveTitles();
        clearTitles();
        count.increase();
    }

    return (
        <Size height="100vh">
           <Center>
                <Size width="50%">
                     <Column align="center" justify="center" gap="1">
                         
                        <Text size="1.1" content={titleName}/>
                        <Input maxLength="50" {...title}/>

                        {count.value == 0 ? "" : <>
                            <Text size="1.1" content={subtitleName}/>
                            <Input maxLength="100" {...subtitle}></Input>
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
