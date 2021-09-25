import {useState, useEffect} from 'react';
const {ipcRenderer} = window.require('electron');

function usePopup(option,initalValue = null){
    const [value,setValue] = useState(initalValue);
    const open = () => {
        const {title, detail, buttons} = option;
        ipcRenderer.send('sendPopup',{...option});
    }
    ipcRenderer.on('receivePopup',(event,res)=> setValue(res));
    return {value, open};
}
export default usePopup;
