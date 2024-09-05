import Link from 'next/link'
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

type BrandProps = {
    color:string
}

const Brands = ({color}:BrandProps)=>{
    return (
        <>
           <div className='hidden lg:flex flex-row gap-5 items-center opacity:50'>
                  <Link href="#!" className="opacity-80 hover:text-gray-300">
                    <FaTwitter size={18} />
                  </Link>
                  <Link href="#!" className="hover:text-gray-300">
                    <FaXTwitter size={18} />
                  </Link>
                  <Link href="#!" className="hover:text-gray-300">
                    <FaFacebookF size={18} />
                  </Link> 
                  <Link href="#!" className="hover:text-gray-300">
                    <FaLinkedinIn size={19} />
                  </Link>
           </div>
        </>
    )
}

export default Brands;