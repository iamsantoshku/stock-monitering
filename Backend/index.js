// const express = require('express');
// const cors = require("cors");
// require('./db/config');
// const User = require("./db/User");
// const mongoose = require('mongoose')
// const app = express();
// app.use(express.json());
// app.use(cors());

// app.post("/register",async(req, res)=>{
//     let user = new User(req.body);
//     let result = await user.save()
//     res.send(result);
// })

// app.post("/login", async(req, res)=>{
//     console.log(req.body);
    // const user =await User.findOne(req.body.email);
    // console.log(user);
//     if(req.body.email && req.body.password){
//        let user = await User.findOne(req.body).select("-password");
//        if(user){
//         res.send(user);
//        }
//        else{
//         res.send({user:'detail not found'});
//        }
//     }
//     else{
//         res.send({user:'detail not found'});

//     }  
// });

// connectDB();
// app.listen(4000);
const express = require('express');
const cors = require("cors");
require('./db/config');
const User = require("./db/User");
// const mongoose = require('mongoose')
const app = express();
app.use(express.json());
app.use(cors());

app.post("/register",async(req, res)=>{
    let user = new User(req.body);
    let result = await user.save()
    res.send(result);
})

app.post("/login", async(req, res)=>{
    console.log(req.body);
    if(req.body.password && req.body.email){
        let user =await User.findOne(req.body).select("-password");
       if(user){
        res.send(user);
       }
       else{
        res.send({user:'detail not found'});
       }

    }
    else{
        res.send({user:'detail not found'});

    }
   
});


app.listen(4000);