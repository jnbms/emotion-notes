import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
// 웹팩의 XMR 리로드 기능 시 일렉트론에서 연결이 끊기는 문제 발생
// import {} from 'react-hot-loader';
import Router from './router';
import GlobalStyle from 'components/styles/GlobalStyle';
import ContextProvider from '../context';


export default function App(){
ReactDOM.render(
    <Fragment>
        <GlobalStyle/>
        <ContextProvider>
            <Router/>
        </ContextProvider>
    </Fragment>
   ,
    document.getElementById('root')
)}
App();

// .router 안에서 react의 리렌더링 기능이 작동하면, 웹팩의 HMR(Hot reload)가 서버를 끄지 않고 render()함수를 재실행 한다.
if(module.hot){
    // module.hot.accept('./router.jsx',() => {
    //     render();
    // })
    module.hot.accept();
}