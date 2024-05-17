const dbConnect = require('./mongooes');
const updatedata=async ()=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:'note 5'},{
            $set:{name:'max pro 5'}
        }
    )
    console.log(result)
}
updatedata()