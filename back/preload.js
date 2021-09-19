console.log("preload is running.");
const {addTable, readTable, removeTable} = require('./data/sqlite3');
// const {ipcRenderer} = require('electron');

// 콘텍스트 격리 사용의 경우
// contextBridge.exposeInMainWorld(
//     'API',{
//         addTable: (id,name) => addTable(id,name),
//     }
// )
// 콘텍스트 격라 사용하지 않을 경우
window.API = {
    addTable: (id,name) => addTable(id,name),
}

window.data = {
    list : {},
}