"use client"
import {useRouter} from 'next/navigation';
import { FaArrowRight } from "react-icons/fa6";

const ContactUs = () => {
    const navigate = useRouter()
    const handleClick = ()=> {
        navigate.push('/')
    }
    return (
       <div className=''>
             {/* home > contactus */}
             <div className='flex flex-row gap-1 justify-center items-center'>
                 <button className='p-1 text-sm' onClick={handleClick}>Home</button>
                 <FaArrowRight />
                 <p className='p-1 text-sm' onClick={handleClick}>Contact-Us</p>
             </div>
       </div>
    )
}

export default ContactUs;