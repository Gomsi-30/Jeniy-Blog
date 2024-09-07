"use client"
import { RxCross2 } from "react-icons/rx";
import Logo from "./logo";
import Items from "./items";
import Brands from "./brands";
import { RiMenu3Fill } from "react-icons/ri";
import {useState} from 'react';

const Navbar = () => {
  const [isOpen,setIsOpen] = useState<boolean>(false)
  const handle = ():void=>{
    setIsOpen(!isOpen);
  }
    return ( 
    <>
   
    <div className='fixed border-b-[1px] shadow w-full h-[85px] bg-white text-black py-5 px-2 z-20'>
     
        <div className='container flex flex-row justify-between items-center'>
          {isOpen ? <h1></h1> : <div className=''><Logo label='/InCb.png' /></div>} 
          <Items checker={true} />
          <Brands color='black' />
         
          <div onClick={handle} className='sm:hidden'>
             <RiMenu3Fill size={34}/>
          </div>
          
        </div>   
      

     
      </div>
      
 {/* Sliding Menu */}
 <div className={`fixed px-6 py-6 flex flex-col gap-[20px] z-50 top-0 right-0 h-full w-[75%] max-w-sm bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : `translate-x-full`} transition-transform duration-300 ease-in-out`}>
        <div className='p-6'>
           <div onClick={handle} className='absolute top-5 left-5'><RxCross2 /></div>
           <Items checker={false} />
        </div>
      </div>
      {/* </div> */}
    </> 
    );
}
 
export default Navbar;