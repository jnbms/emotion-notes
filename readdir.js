const path = require('path');
const fs = require('fs');
const folderPath = path.join(__dirname,'./front/pages');

let fileNameArray = [];

fs.promises.readdir(folderPath, (err,files) => files.forEach(file => {
   const elm = file.replace(/\.[^/.]+$/, ""); fileNameArray.push(elm);
})).then(console.log(fileNameArray))//       files.forEach( file => {
//         const fileName = (file.replace(/\.[^/.]+$/, ""));
//         fileNameArray.push(fileName);
//         console.log(fileNameArray);
//     })
// })
// console.log(fileNameArray);
// fs.readFileSync(folderPath).then(files => console.log(files));
