const {Sequelize, DataTypes} = require('sequelize');
// CONFIG
const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'./database/db.db',
});

// MODEL(테이블) 정의(없는 경우, 생성)
const table = sequelize.define('table',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrementIdentity: true,
    },
    name:{
        type: DataTypes.STRING,
    },
});
console.log(table === sequelize.models.table); //TRUE

// CONNECTION
// 실행 시 연결된 DB파일에 테이블이 생성된다.
sequelize.sync()
    .then(()=>{
        console.log('DB connection success.');
    })
    .catch(err=>{
        console.error(err);
    })

// INSERT
// function insert(name,age){
// sequelize.models.user.create({name:name,age:age})
//     .then(result=>{res.json(result)})
//     .catch(err=>console.log(err));
// }
function insert(name){
sequelize.models.table.create({name:name})
    .then(result=>{console.log(result)})
    .catch(err=>console.log(err));
}

// insert('dahyun',24);
// insert('nayeon',25);
// insert('tzuyu',22);


// UPDATE
sequelize.models.table.update({name:'BEOM'},{where:{id:1}})
//     .then(()=>{console.log('YESS!')})
//     .catch((err)=>{console.log(err)});

// DELETE
// sequelize.models.table.destroy({restartIdentity:true,where:{id:2}});

// SELECT
// sequelize.models.user.findAll()
    // .then(result=>console.log(result))
    // .then(res=>console.log(res));

// insert("June");