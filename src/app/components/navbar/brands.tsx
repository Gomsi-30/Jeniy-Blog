import Link from 'next/link'
import { FaAmazon } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Brands = ()=>{
    return (
        <>
           <div className='hidden lg:flex flex-row gap-5 items-center opacity:50'>
            <Link href=''><FaAmazon size={22}/></Link>
            <Link href=''><FaFacebook size={22}/></Link>
            <Link href=''><FaAmazon size={22}/></Link>  
           </div>
        </>
    )
}

export default Brands;