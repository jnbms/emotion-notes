
// import '../data/menu';


// 콘텍스트 격리 사용의 경우
// contextBridge.exposeInMainWorld(
//     'API',{
//         addTable: (id,name) => addTable(id,name),
//     }
// )
// 콘텍스트 격라 사용하지 않을 경우

let column = [];
window.API = {
    page : {
        menu : 
        {
            create: (arg,num) => column[num] = arg,
            read: (num) => column[num],
            readAll: () => column,
            upload: () => {

            }
        }
    }
}
window.data = {
    list : {},
}