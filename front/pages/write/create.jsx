import React, {useState,useEffect,useContext} from "react";
import { context } from "../../context";
import {SettingBar} from "../../components/atoms/rigg/settingbar";
import TextArea from "../../components/atoms/rigg/textarea";
import {Center, Column, Size, Space} from "../../components/styles/common/common";
import Sequence from "../../functions/Sequence";
import {useToggle, usePopup} from "hooks";
const {ipcRenderer} = window.require('electron');


function create(){

    useEffect(() => {
        ipcRenderer.send('dataReqs',{tableName:"list"})
        ipcRenderer.on('dataRes',(event,res)=> setTitle(res))
    },[])

    const contextValue = useContext(context);
    const [emitter,Emitter] = useToggle();

    const popupOptions = {
        title:"저장",
        detail:"저장하시겠습니까?",
        buttons:["예","아니오"]
    }
    const popup = usePopup(popupOptions,null,()=>console.log(popup.value));

    // const [setter,Setter] = useState([]);

    const createData = () => {
        Emitter();
        // contextValue.setSave(true);
        popup.open();
    }

    // useEffect(()=>{createData()},[c])

    const [day,setDay] = useState({year: 0,month: 0,day: 0});
    const [title,setTitle] = useState([{},{},{},{},{}]);
    // const [text,setText] = us
    const sequence = Sequence(5);

    return <Size>
        <Column align="center">
            <Size width="80%">
                    <Column gap="2">
                        {sequence.map((index,item) => 
                        <TextArea
                            key={index}
                            question={title[item]["title"]}
                            description={title[item]["subtitle"]}
                            emitter={emitter}
                            />
                        )}
                        <Space margin="0"/>
                    </Column>
            </Size>
        </Column>
        <SettingBar
            prevUrl="/write/read"
            saveUrl="#"
            createData={createData}
            />
    </Size>
}
export default create;