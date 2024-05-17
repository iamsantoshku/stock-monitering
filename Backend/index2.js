// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';

// const clint = new MongoClient(url);

// async function dbConnect(){
//     let result = await clint.connect();
//    let db =  result.db('santosh-code');
//    return db.collection('crud-op');

// }
const dbConnect = require('./mongooes');


const main = async ()=>{
    // console.log("main function called");
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data)
}
main();
// getData();