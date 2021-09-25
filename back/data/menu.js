const {Sequelize, DataTypes} = require('sequelize');
// CONFIG

const menuDB = new Sequelize({
    dialect:'sqlite',
    storage:'./database/menu.db',
})
menuDB.sync()
    .then(()=>{
        console.log('DB connection success.');
    })
    .catch(err=>{
        console.error(err);
    })
// MODEL(테이블) 정의(없는 경우, 생성)

const columns = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrementIdentity: true,
    },
    title: {
        type: DataTypes.STRING,
    },
    subtitle: {
        type: DataTypes.STRING,
    }
}
const column = {
    title
}

const createTable = (tableName,columns) => menuDB.define(tableName,columns);
// console.log(table === sequelize.models.table); //TRUE

// CONNECTION
// 실행 시 연결된 DB파일에 테이블이 생성된다.


function insert({title, subtitle}){
menuDB.models.table.create({title:title, subtitle:subtitle})
    .then(result=>{console.log(result)})
    .catch(err=>console.log(err));
}

// insert('dahyun',24);
// insert('nayeon',25);
// insert('tzuyu',22);


// UPDATE
function update(){
    menuDB.models.table.update({name:'BEOM'},{where:{id:1}})
}//     .then(()=>{console.log('YESS!')})
//     .catch((err)=>{console.log(err)});

// DELETE
// sequelize.models.table.destroy({restartIdentity:true,where:{id:2}});

// SELECT
// sequelize.models.user.findAll()
    // .then(result=>console.log(result))
    // .then(res=>console.log(res));

// export {menuDB,createTable};