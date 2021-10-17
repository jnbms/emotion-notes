import {useState, useEffect} from 'react';
const {ipcRenderer} = window.require('electron');

function usePopup(option,initalValue = null,action = function(){}){
    const [value,setValue] = useState(initalValue);
    const open = () => {
        const {title, detail, buttons} = option;
        ipcRenderer.send('sendPopup',{...option});
    }
    ipcRenderer.on('receivePopup',(event,res)=> setValue(res));
    useEffect(action,[value])    // EXIT 페이지 - HOOK으로 간소화 연구해보기

    return {value, open};
}

export default usePopup;
