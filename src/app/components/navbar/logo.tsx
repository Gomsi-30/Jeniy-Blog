import Image from "next/image";

const Logo = ({label}) => {
    return ( 
    <>
       <Image src={label} alt='logo' height={60} width={60} className='text-white' />
    </> 
    );
}
 
export default Logo;


