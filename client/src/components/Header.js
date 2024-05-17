import React from 'react'
import Logo from './Logo'
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink,useNavigate } from 'react-router-dom';

const Header = () => {

  const nevigate = useNavigate();
    const logout = ()=>{
        // console.warn("hii santosh");
        localStorage.clear();
        nevigate('./signup')       

    }
    const auth = localStorage.getItem('user');
  return (

    <header className='h-16 shadow-md bg-white'>
      <div className="h-full container mx-auto flex items-center px-4 justify-between ">
        <div className=''>
          <NavLink to={"/"}>
          <Logo w={90} h={50} />

          </NavLink>
          
        </div>
        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2 '>
          <input type="text" placeholder='serach product here' className='w-full outline-none ' />
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <CiSearch />
          </div>
        </div>
        <div className='flex items-center gap-7 mr-4'>
        <div className='text-3xl cursor-pointer'>
          {/* user icon ad cards */}
          <FaRegUserCircle />

        </div>
        <div className='text-2xl relative'>
          <FaShoppingCart />
          <div className='bg-red-600 text-white w-s h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
            <p className='text-sm'>0</p>
          </div>
        </div>
        <div className='flex  justify-center'>
        <NavLink to={"/"} className='px-3 py-1 rounded-full text-white bg-red-500 hover:bg-red-700'>signup</NavLink>{
          auth ? <NavLink onClick={logout} to="/home" className='px-3 py-1 rounded-full text-white bg-red-500 hover:bg-red-700 mx-3'>Logout</NavLink>:
          <>
                <NavLink to="/home" className='px-3 py-1 rounded-full text-white bg-red-500 hover:bg-red-700 mx-5' >home</NavLink>
                <NavLink to="/login" className='px-3 py-1 rounded-full text-white bg-red-500 hover:bg-red-700 mx-2'> login</NavLink>
                 
                 </>
        }
        </div>
        <div>
          {/* <NavLink to={"/login"} className='px-3 py-1 rounded-full text-white bg-red-500 hover:bg-red-700'>login</NavLink> */}
          
        </div>
        {/* <div>
            <ul className="nav-ul">
                <li><NavLink to="/">Home</NavLink></li>               
                {
                    auth ? <NavLink onClick={logout} to="/signup">Logout</NavLink>:
                    <>
                <li><NavLink to="/signup">signup</NavLink></li>
                <li><NavLink to="/login">login</NavLink></li> 
                    </>
                }                
            </ul>
        </div> */}       
        </div>
       
      </div>
    </header >
  )
}

export default Header

