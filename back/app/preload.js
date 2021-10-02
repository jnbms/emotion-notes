// const db = require('../data/models').sequelize;
// db.sync()
// .then(() => {
//     console.log('✓ DB connection success.');
//     console.log('  Press CTRL-C to stop\n');
//   })
//   .catch(err => {
//     console.error(err);
//     console.log('✗ DB connection error. Please make sure DB is running.')
//     process.exit();
//   });



let temp = [];
window.API = {
        menu: {
            create: (arg,num) => temp[num] = arg,
            read: (num) => temp[num],
            readAll: () => temp,
            upload: () => {
            }
        },
        // db: {
        //     list: {
        //         read: (id, attribute) => db.models.List.findOne({
        //             raw: true,
        //             attribute: [attribute],
        //             where: {id: id}
        //         }).then(result => console.log(result[attribute])),
        //     },
            // history: {
            //     create: ,
            //     read: ,
            //     update: ,
            //     delete: ,
            // }
        // }
    }
// const read = db.models.List.findAll().then(result=> JSON.stringify(result[0].title)).then(data => {return data});
// let data = await read;
// console.log(data)

