const path = require('path');
const {app, BrowserWindow, dialog, globalShortcut, ipcMain} = require('electron');
// require('electron-reload')(__dirname,{
//     electron: path.join(__driname,'node_modules','.bin','electron')
// })
let window;
app.on('ready',()=>{
    ipcMain.on('sendPopup',(event,message)=>{
        dialog.showMessageBox({
        type: "question",
        title: message.title,
        detail: message.detail,
        buttons: message.buttons,
        })
        .then((res)=>{
        event.sender.send('receivePopup',res.response);
        })});

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
    // 웹팩으로 완성된 로컬 파일도 Database 정상 작동
    // window.loadURL(path.join(__dirname,'../dist/index.html'));
    // webContents.openDevTools();
    // 단축키 설정
    globalShortcut.register('f5',()=>{
        window.reload();
    })
    // 송신 - BACKEND CONSOLE
});
app.on('window-all-closed',()=>{app.quit()});
