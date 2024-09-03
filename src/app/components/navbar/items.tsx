'use client'
import Link from 'next/link'
import Logo from './logo'
interface itemsProps {
    checker : boolean
}
const Items:React.FC<itemsProps> = ({checker})=>{
    return (
        <div className={`px-4 py-2 ${checker ? 'hidden md:flex flex-row items-center gap-5' : 'flex flex-col gap-9 z-20'}`}>
            {checker ? '' : <Logo />}
            <div className='hover:underline text-sm font-semibold border-b-[1px]'>
               <Link href=''>Home</Link>
            </div >
            <div className='hover:underline text-sm font-semibold   border-b-[1px]'>
               <Link href=''>Influencers</Link>
            </div>
            <div className='hover:underline text-sm font-semibold   border-b-[1px]'>
               <Link href=''>Social Media</Link>
            </div>
            <div className='hover:underline text-sm font-semibold   border-b-[1px]'>
               <Link href=''>Brands</Link>
            </div>
            <div className='hover:underline text-sm font-semibold  border-b-[1px]'>
               <Link href=''>Influencer Marketing</Link>
            </div>
        </div>
    )
}

export default Items;