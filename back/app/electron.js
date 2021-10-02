const path = require('path');
const {app, BrowserWindow, dialog, globalShortcut, ipcMain} = require('electron');
const db = require('../data/models');
let window;
app.on('ready',()=>{
    window = new BrowserWindow({
        width: 1200, height: 600,
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname,'./preload.js'),
            // 아래의 3가지 속성은 electron을 다른 js파일이나 react에서 require 사용 가능.
            // NODE 환경으로 설정
            nodeIntegration: true,
            // 콘텍스트 격리 FLASE의 경우 window 객체를 전역에서 접근 가능
            contextIsolation: false,
            enableRemoteModule: true,
            spellcheck: false, //스펠링 오류 시 빨간 밑줄 X
        }});
    // window.webContents.openDevTools(); //개발자 도구 창 실행
    window.loadURL('http://localhost:3000');
    globalShortcut.register('f5',()=>{
        window.reload();
    });
});
app.on('window-all-closed',()=>{app.quit()});

// 송신 - BACKEND CONSOLE
ipcMain.on('sendPopup',(event,message)=>{
    dialog.showMessageBox({
    type: "question",
    title: message.title,
    detail: message.detail,
    buttons: message.buttons,
    })
    .then((res)=>{
    event.sender.send('receivePopup',res.response);
    })
    .catch(err => console.error(err));
});

ipcMain.on("dataReq",(res,reqValues)=>{
    const {tableName, id} = reqValues;
    db[tableName].findOne({
        raw: true,
        where: {id: id}
        })
        // .then(resolve => {return resolve[attribute]});
        .then(resolve => res.sender.send('dataRes',resolve))
    // console.log(message);
})
ipcMain.on("dataReqs",(res,reqValues)=>{
    const {tableName} = reqValues;
    db[tableName].findAll({raw: true})
    // .then(resolve => res.sender.send('detaRes',resolve));
    .then(resolve => res.sender.send('dataRes',resolve));
})