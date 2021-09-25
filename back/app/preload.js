console.log("preload is running.");
// import '../data/menu';


// 콘텍스트 격리 사용의 경우
// contextBridge.exposeInMainWorld(
//     'API',{
//         addTable: (id,name) => addTable(id,name),
//     }
// )
// 콘텍스트 격라 사용하지 않을 경우

let column = [{title:"",discription:""}];

window.API = {
    DB : {
        menu : 
        {
            create: (arg,num) => column[num] = arg,
            read: (num) => column[num],
        }
    }
}
window.data = {
    list : {},
}