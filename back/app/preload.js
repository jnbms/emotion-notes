const {ipcRenderer} = require("electron");

window.API = {
    check: () => console.log("connected is success"),
    DB: {
        list: {},
        history: {
            create : (data) => ipcRenderer.send("createData",{tableName: "history", arg: data}),
            readAll : () => {
                return new Promise(resolve => {
                    ipcRenderer.send("dataReqs",{tableName:"history"});
                    ipcRenderer.on("dataRes",(event,res) => resolve(res))
                })
            }
        }
    }
}