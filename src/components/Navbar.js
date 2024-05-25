import React from 'react';
import { Link } from "react-router-dom";
import logo from '../image/logo.png';
import SearchBar from "./SearchBar";
import Slid_text from './Slid_text';
import { FaMicrophone } from "react-icons/fa";
import micro from "../image/microphone.svg";
import { SlCamrecorder } from "react-icons/sl";
import { GoBell, GoBellFill } from "react-icons/go";
import { MdOutlineAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <div className=''>
      <div className=' flex justify-between items-center'>
        <div className=' flex items-center  h-10 pl-4'>
          <div style={{gap:'5px'}} className=' flex flex-col'> 
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>

          <Link to="/">
            <img src={logo} alt="logo" className='w-24 h-5' />
          </Link>  
        </div>
        <div className=' flex justify-center items-center '>
          <div className=''style={{width:'640px', height: '46px'}}>
            <SearchBar /> 
          </div>
          <div className='bg-gray-100 hover:bg-gray-200 ml-3 mb-1 rounded-3xl w-10 h-10 flex justify-center items-center'>
            <img src={micro} alt="micro" className='h-6 w-6'/>
          </div>
        </div>
        <div className=' flex justify-center items-center mt-3 mr-5 ' >
          <div className=' hover:bg-gray-200 ml-3 mb-1 rounded-3xl w-10 h-10 flex justify-center items-center'>
            <SlCamrecorder className='h-5 w-5'/>
          </div>
          <div className='hover:bg-gray-200 rounded-3xl ml-3 mb-1 w-10 h-10 flex justify-center items-center'>
            <GoBell className='h-5 w-5'/>
          </div>
          <div className=' hover:bg-gray-200 rounded-3xl ml-3 mb-1  w-10 h-10 flex justify-center items-center'>
            <MdOutlineAccountCircle className='h-7 w-7'/>
          </div>
        </div>
      </div>
      <div>
      
      </div>
    </div>
  )
}

export default Navbar




// <div className=' flex justify-between items-center'>
// <div className=' flex items-center  h-10 pl-4'>
//   <div style={{gap:'5px'}} className=' flex flex-col'> 
//     <div className='line'></div>
//     <div className='line'></div>
//     <div className='line'></div>
//   </div>

//   <Link to="/">
//     <img src={logo} alt="logo" className='w-24 h-5' />
//   </Link>  
// </div>
// <div className=' flex justify-center items-center '>
//   <div className=''style={{width:'640px', height: '46px'}}>
//     <SearchBar /> 
//   </div>
//   <div className='bg-gray-100 hover:bg-gray-200 ml-3 mb-1 rounded-3xl w-10 h-10 flex justify-center items-center'>
//     <img src={micro} alt="micro" className='h-6 w-6'/>
//   </div>
// </div>
// <div className=' flex justify-center items-center mt-3 mr-5 ' >
//   <div className=' hover:bg-gray-200 ml-3 mb-1 rounded-3xl w-10 h-10 flex justify-center items-center'>
//     <SlCamrecorder className='h-5 w-5'/>
//   </div>
//   <div className='hover:bg-gray-200 rounded-3xl ml-3 mb-1 w-10 h-10 flex justify-center items-center'>
//     <GoBell className='h-5 w-5'/>
//   </div>
//   <div className=' hover:bg-gray-200 rounded-3xl ml-3 mb-1  w-10 h-10 flex justify-center items-center'>
//     <MdOutlineAccountCircle className='h-7 w-7'/>
//   </div>
// </div>
// </div>
// <div>

// </div>