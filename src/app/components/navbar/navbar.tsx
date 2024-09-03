"use client"

import Container from "../container";
import Logo from "./logo";
import Items from "./items";
import Brands from "./brands";
import { IoIosMenu } from "react-icons/io";
import {useState} from 'react';

const Navbar = () => {
  const [isOpen,setIsOpen] = useState<boolean>(false)
  const handle = ():void=>{
    setIsOpen(!isOpen);
  }
    return ( 
    <>
   
    <div className='fixed border-b-[1px] shadow w-full h-[85px] bg-white text-black py-5 px-2 z-20'>
      <Container>
        <div className='flex flex-row justify-between items-center'>
          {isOpen ? <h1></h1> : <Logo label='/InCb.png' />} 
          <Items checker={true} />
          <Brands color='black' />
          <div onClick={handle} className='md:hidden'>
             <IoIosMenu size={21}/>
          </div>
        </div>   
      </Container>

     
      </div>
      
 {/* Sliding Menu */}
 <div className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className='p-4'>
           <Items checker={false} />
        </div>
      </div>
      {/* </div> */}
    </> 
    );
}
 
export default Navbar;