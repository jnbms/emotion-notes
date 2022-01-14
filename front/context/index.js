import React, {createContext, useState, useEffect} from "react";
export const context = createContext();

const ContextProvider = (props) => {
    const temp = [];
    let sizeArray = 0;
    let onlySizeArray = 0;
    const [value,setValue] = useState({});
    const [save,setSave]= useState(false);
    const [textSize,setTextSize] = useState(0);
    const [onlyTextSize,setOnlyTextSize] = useState(0);
    // useEffect(()=>{console.log("save is .." + value)},[save])
    const pushValue = (value) => {temp.push(value); setValue(temp)};
    const pushTextSize = (value) => {sizeArray += value; setTextSize(sizeArray)};
    const pushOnlyTextSize = (value) => {onlySizeArray += value; setOnlyTextSize(onlySizeArray);};

    useEffect(()=>{
        // if(save){
        console.log("value is changed");
        // setSave(false);
        // }
    }
    ,[value]);

    return <context.Provider value={{
        value,pushValue,setSave,textSize,setTextSize,onlyTextSize,setOnlyTextSize,pushTextSize,pushOnlyTextSize
        }}>
        {props.children}
    </context.Provider>;
}
export default ContextProvider;