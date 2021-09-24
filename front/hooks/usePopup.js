const {ipcRenderer} = window.require('electron');
import {useState} from 'react';

const sendPopup = (option) => {
    const {title, detail, buttons} = option;
    const popup = ipcRenderer.send('sendPopup',
    {
        title: title,
        detail: detail,
        buttons: buttons,
        // select: "구랭",
        // cancel: "아뉘",
    })
    return popup;
}

const receivePopup = () => {
    const [value,setValue] = useState(0);
    ipcRenderer.on('receivePopup',(res)=> {
        setValue(res);
    });
    return {value};
}

export {sendPopup, receivePopup}
