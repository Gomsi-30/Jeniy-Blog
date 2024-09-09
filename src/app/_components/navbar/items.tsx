'use client'
import Link from 'next/link'
import Logo from './logo'

type itemsProps = {
    checker: boolean,
    isOpen?: boolean,
    onClick?: () => void // New prop for handling item click
}

const Items = ({ checker, isOpen, onClick }: itemsProps) => {
    return (
        <div className={`px-4 py-2 ${checker ? 'hidden sm:flex flex-row items-center gap-5' : 'flex flex-col gap-[40px] z-20'}`}>
            {checker ? '' : <Logo label='/InCb.png' />}
            <div className='hover:underline text-sm font-semibold border-b-[1px]' onClick={onClick}>
                <Link href='/'>Home</Link>
            </div>
            <div className='hover:underline text-sm font-semibold border-b-[1px]' onClick={onClick}>
                <Link href='/influencers'>Influencers</Link>
            </div>
            <div className='hover:underline text-sm font-semibold border-b-[1px]' onClick={onClick}>
                <Link href='/socialmedia'>Social Media</Link>
            </div>
            <div className='hover:underline text-sm font-semibold border-b-[1px]' onClick={onClick}>
                <Link href='/brands'>Brands</Link>
            </div>
            <div className='hover:underline text-sm font-semibold border-b-[1px]' onClick={onClick}>
                <Link href='/influencer-marketing'>Influencer Marketing</Link>
            </div>
        </div>
    )
}

export default Items;
