// import React from "react";

// const Signup = ()=>{
//     return(
//         <>
//         <div className="flex">
//         <div className="h-70vh w-50vw mt-20 mx-10 rounded-s-sm">
//             <img src="https://img.freepik.com/free-vector/forex-trading-with-candle-stick-chart_1017-30885.jpg" className="h-60vh w-60vw" alt="" />
//         </div>
//         <div>

//         </div>

//         </div>
        
//         </>
        

//     )
// }
// export default Signup;
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Signup = ()=>{
    // const[item,setitem] = useState("");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [num, setnum] = useState("")
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/home')
        }

    })

    const clickhand = async ()=>{
        console.warn(name,email,pass);
        let result = await fetch('http://localhost:4000/register', {
            method:'post',
            body: JSON.stringify({name, email, pass}),
            headers: {
                'Content-Type':'application/json'
            },

        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result)) ; 
        // if(result){
        navigate('/home')
        // }
    }
    return(
        <>
        {/* <div className="container1"> */}
        <div className="flex justify-between">
        <div className="img1">
            <img src="https://img.freepik.com/free-vector/forex-trading-with-candle-stick-chart_1017-30885.jpg"alt="" />
        </div>
        <div className="text-box">
            <h1>Create An Account</h1>
            <button className="butt1">Goggle</button>
            
            <input className="text" type="email"  value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email" />
            <input className="text" type="text"
             value={name} onChange={(e)=>setname(e.target.value)}  placeholder="Full Name"  />
            <input className="text" type="password" value={pass} onChange={(e)=>setpass(e.target.value)} placeholder="Password"  />
            
            
            <input className="text" type="number"  value={num} onChange={(e)=>setnum(e.target.value)} placeholder="Mob No" />
            <button onClick={clickhand} className="butt">Create New Account</button>
            <Link className="log1"to="/login">Back to login</Link>

        </div>

        </div>
        {/* </div> */}
        </>       
    )

}
export default Signup;