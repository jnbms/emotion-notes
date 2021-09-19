const path = require('path');
const sqlite3 = require('sqlite3').verbose();
// const database = new sqlite3.Database('./database.sqlite3');
// const database = new sqlite3.Database('./db.db');
// database.run('CREATE TABLE user(id integer primary key,name text not null)');

// 테이블의 칼럼 추가
function addTable(id, name){
    const database = new sqlite3.Database(path.join(__dirname,"./database/database.sqlite3"));
    const query = `INSERT INTO user (id, name) VALUES (${id}, "${name}");`
    database.run(query,(err)=>{console.log(err);})
    database.close();
}
// AddTable(1,"bullshit");

// 테이블의 칼럼 읽기
function readTable(){
    const query = `SELECT * from user`
    database.all(query,[],(err,rows)=>{
        if(err) throw err;
        rows.forEach((row)=> console.log(row));
    });
}
// ReadTable();

// 테이블의 칼럼 제거
function removeTable(id){
    const query = `DELETE FROM user WHERE id=?`
    database.run(query,id,(err)=>{
        if(err) console.log(err);
        else console.log(`Row is deleted`);
    })
}
// RemoveTable(7);

// database.close();


module.exports = {addTable, readTable, removeTable};