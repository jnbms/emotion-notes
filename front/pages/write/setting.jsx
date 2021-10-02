import React, {useEffect} from 'react';
import { Column, Row, Size, Center, ButtonStyle} from 'components/styles/common/common';
import {Text} from 'components/atoms/bone/text';
import {SettingBar2, SettringBar} from 'components/atoms/rigg/settingbar';
import { ButtonHoverScale } from 'components/styles/animation/animation';
import Input from 'components/atoms/bone/input';
import {useInput, useCount, usePopup} from 'hooks';

export default function WriteSetting() {
    
    const count = useCount(1,1,5);
    const title = useInput("");
    const subtitle = useInput("");
    const titleName =  `질문 ${count.value}번`;
    const subtitleName = "설명하기"
    const MENU = window.API.menu;
    const clearTitles = () => {title.setValue(""); subtitle.setValue("");}
    const saveTitles = () => MENU.create(column(title.value,subtitle.value),count.value);
    const column = (title, subtitle) => new Object({title: title, subtitle: subtitle});
    const prevURL = null;

    // POPUP
    const popupOptions = {
        title: "DELETE",
        detail: "작성 중인 내용이 있습니다.",
        buttons: ["확인","삭제"]
    };
    const popup = usePopup(popupOptions);
    useEffect(()=>{if(popup.value == 1) location.href = "/write/read";},[popup.value])    // EXIT 페이지 - HOOK으로 간소화 연구해보기
    // ARRAY
    useEffect(()=>{
        // CREATE NEW OBJECT
        const Count = count.value;
        const pageProps = MENU.read(Count);
        if(pageProps == undefined){
            MENU.create(null,Count);
        } else {
            // console.log(pageProps);
            title.setValue(pageProps.title); subtitle.setValue(pageProps.subtitle); //reset value
        }
    },[count.value])
    useEffect(()=>{console.log(MENU.readAll())})

    const prevPage = () => {
        if(count.value == 1)
            popup.open();
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

                        <Text size="1.1" content={subtitleName}/>
                        <Input maxLength="100" {...subtitle}></Input>
                       
                    <Size width="100%">
                        <SettingBar2 prev={prevPage} next={nextPage}/>
                    </Size>
                </Column>
              </Size>
            </Center>
        </Size>
    );
}
