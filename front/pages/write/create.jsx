import React, {useState,useEffect,useContext} from "react";
import { context } from "../../context";
import {SettingBar} from "../../components/atoms/rigg/settingbar";
import TextArea from "../../components/atoms/rigg/textarea";
import {Center, Column, Size, Space} from "../../components/styles/common/common";
import Sequence from "../../functions/Sequence";
import {useToggle, usePopup} from "hooks";
const {ipcRenderer} = window.require('electron');
const DB = window.API.DB.history;


function create(props){

    useEffect(() => {
        ipcRenderer.send('dataReqs',{tableName:"list"})
        ipcRenderer.on('dataRes',(event,res)=> setTitle(res))
        console.log(props.match.params.page + " page")
    },[])

    const contextValue = useContext(context);
    const [emitter,Emitter] = useToggle();

    const popupOptions = {
        title:"저장",
        detail:"저장하시겠습니까?",
        buttons:["예","아니오"]
    }
    const popupAction = () => {
        if(popup.value == 0){
            DB.create({
                text1: contextValue.value[0],
                text2: contextValue.value[1],
                text3: contextValue.value[2],
                text4: contextValue.value[3],
                text5: contextValue.value[4],
                textSize: contextValue.textSize,
                spaceSize: contextValue.onlyTextSize,
            })
            location.href = "/write/read"
        }
    }
    const popup = usePopup(popupOptions,null,popupAction);

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

    return (
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
            <SettingBar prevUrl="/write/read" saveUrl="#" createData={createData}/>
        </Column>
    );
}
export default create;