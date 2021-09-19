import React,{useState, useEffect} from 'react';
import useInput from '../hooks/useInput';
import Component from '../component/component';
import {Link} from 'react-router-dom';
const {ipcRenderer} = window.require('electron');

function Home(props){
    useEffect(()=>{
        // console.log("useEffect load.");
        // window.API.connectDB();
    },[]);

    const list = [];
    const id = useInput(1);
    const name = useInput("");

    const addTable = () => {
        // useSate는 상태 변경(onChange)시 마다 function App()이 리렌더링 된다.
        // 그래서 파라미터로 state를 넣어버리면 이 함수도 실행 문제가 발생한다.
        console.log(id.value,name.value);
        window.API.addTable(id.value,name.value);
    }
    const getIPC = () => {
        // const {ipcRenderer} = window.require('electron');
        ipcRenderer.send('connect','IPC CONNECT');
        console.log("HELLO");
    }
    const pushList = () => {
        // console.log(window.data);
        list.push(1);
        console.log(list)
    }

    return <>

    <input type='number' {...id}/>
    <input type='text' {...name}/>
    <button onClick={addTable}>CLICK</button>
    <div onClick={getIPC}>HELLO!</div>
    <div onClick={pushList}>LIST</div>
    <Component/>
    <Link to='/test'>GO TO TEST PAGE</Link>
    {/* <div>THIS PATH IS {props.location.pathname}</div> */}
    </>
}
export default Home;