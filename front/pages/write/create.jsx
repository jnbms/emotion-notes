import React, {useState,useEffect} from "react";
import {SettingBar} from "../../components/atoms/rigg/settingbar";
import TextArea from "../../components/atoms/rigg/textarea";
import {Center, Column, Size, Space} from "../../components/styles/common/common";
const {ipcRenderer} = window.require('electron');

function create(){
    useEffect(() => {
        ipcRenderer.send('dataReqs',{tableName:"list"})
        ipcRenderer.on('dataRes',(event,res)=> setText(res))
    },[])

    const [day,setDay] = useState({year: 0,month: 0,day: 0});
    const [text,setText] = useState([{},{},{},{},{}]);
    
    return <Size>
        <Column align="center">
            <Size width="80%">
                    <Column gap="2">
                        {/* <Space margin="0"/> */}
                        <TextArea question={text[0]["title"]} description={text[0]["subtitle"]}/>
                        <TextArea question={text[1]["title"]} description={text[1]["subtitle"]}/>
                        <TextArea question={text[2]["title"]} description={text[2]["subtitle"]}/>
                        <TextArea question={text[3]["title"]} description={text[3]["subtitle"]}/>
                        <TextArea question={text[4]["title"]} description={text[4]["subtitle"]}/>
                        <Space margin="0"/>
                    </Column>
            </Size>
        </Column>
        <SettingBar prevUrl="/write/read"/>
    </Size>
}
export default create;