import React, {useEffect} from 'react';
import { Column, Row, Size, Center, ButtonStyle} from 'components/styles/common/common';
import {Text} from 'components/atoms/bone/text';
import {SettingBar2, SettringBar} from 'components/atoms/rigg/settingbar';
import { ButtonHoverScale } from 'components/styles/animation/animation';
import Input from 'components/atoms/bone/input';
import {useInput, useCount, usePopup} from 'hooks';

const {ipcRenderer} = window.require('electron');

export default function WriteSetting() {
    
    const count = useCount(1,1,5);
    const title = useInput("");
    const subtitle = useInput("");
    const titleName =  `질문 ${count.value}번`;
    const subtitleName = "설명하기"
    // const LIST = window.API.DB.LIST;
    const clearTitles = () => {title.setValue(""); subtitle.setValue("");}
    // const saveTitles = () => MENU.create(column(title.value,subtitle.value),count.value);
    const column = (title, subtitle) => new Object({title: title, subtitle: subtitle});
    const prevURL = null;

    // POPUP
    const popupOptions = {
        title: "DELETE",
        detail: "작성 중인 내용이 있습니다.",
        buttons: ["확인","삭제"]
    };
    const popupInitialValue = 0;
    const popupAction = () => popup.value == 1 ? location.href = "/write/read" : "";
    const popup = usePopup(popupOptions,popupInitialValue,popupAction);
    // ARRAY    
    useEffect(()=>{
        const Count = count.value;
        ipcRenderer.send('dataReq',{tableName:"list",id: Count})
        ipcRenderer.on('dataRes',(event,res)=> title.setValue(res["title"]))
        ipcRenderer.on('dataRes',(event,res)=> subtitle.setValue(res["subtitle"]))
        // LIST.read(Count,"title").then(result => title.setValue(result));
        // LIST.read(Count,"subtitle").then(result => subtitle.setValue(result));
    },[count.value])

    const prevPage = () => {
        if(count.value == 1)
            popup.open();
        else {
            // saveTitles();
            count.decrease();
        }
    }
    const nextPage = () => {
        // saveTitles();
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
                        <Input height="5" maxLength="150" {...subtitle}></Input>
                       
                        <Size width="100%">
                            <SettingBar2 prev={prevPage} next={nextPage}/>
                        </Size>
                    </Column>
                </Size>
            </Center>
        </Size>
    );
}
