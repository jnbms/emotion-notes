import React from 'react';
import ReactDOM from 'react-dom';
// 웹팩의 XMR 리로드 기능 시 일렉트론에서 연결이 끊기는 문제 발생
// import {} from 'react-hot-loader';
import Router from './router';


window.onload = () => {
ReactDOM.render(
    <Router/>
    ,document.getElementById('root'));
};