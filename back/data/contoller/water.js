const waterData = require('../question');
const db = require('../models');
db.sequelize.sync().then(()=>console.log("conneted"))
// for(let num in waterData){
//     console.log(waterData[num]["title"]);
//     console.log(num);
// }
for(num in waterData){
    db["list"].create({
        title:waterData[num]["title"],
        subtitle:waterData[num]["subtitle"],
    });   
}
