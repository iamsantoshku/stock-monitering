// const dbConnect = require('./mongooes');
const dbConnect = require('./mongooes');
const insert = async () =>{
    // console.log("insert function")
    const db = await dbConnect();
    const result =await db.insertOne(
        {name : 'note 5', brand : "vivo", price:300, category:'mobile'}
    );
    // console.log(result);
    if(result.acknowledged){
        console.log("data inserted");
    }
}
insert();