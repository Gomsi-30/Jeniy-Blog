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
    {/* <div className={`${isOpen ? 'w-full h-full bg-black/60' : 'w-full h-full bg-black/60'}`}> */}
    <div className='fixed border-b-[1px] shadow w-full h-[85px] bg-white text-black p-2'>
      <Container>
        <div className='flex flex-row justify-between items-center'>
          {isOpen ? <h1></h1> : <Logo />} 
          <Items checker={true} />
          <Brands />
          <div onClick={handle} className=' md:hidden'>
             <IoIosMenu size={21}/>
            
          </div>
         
         
        </div>   
      </Container>

      {/* {isOpen && 
             <div className='transition transform z-30 translate-x-[-30px] delay-1 ease-in-out duration-300  bg-white'>
                <div className='text-sm z-20'>
                  <Items checker={false} />
                </div>
              </div>
      } */}
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