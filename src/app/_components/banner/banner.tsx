'use client'
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type BannerProps = {
  label?: string;
  params?: string;
};

const Banner = ({ label, params }: BannerProps) => {
  const path = usePathname();
  const banner = [
   
    { path: 'interiors', image: '/interior.jpg' },
    { path: 'homedecor', image: '/homedecor.jpg' },
    { path: 'festiveandpartydecor', image: '/festive.jpg' },
    { path: 'giftsandcards', image: '/giftandcard.jpg' }
  ];

 
  const firstPath = path?.split('/')[1]?.toLowerCase(); 
  
  const matchedBanner = banner.find(b => b.path === firstPath)?.image || '/home.jpg'; 
  return (
    <div className="relative h-[260px] md:h-[300px] lg:h-[360px] w-full min-w-full">
      <Image
        src={matchedBanner} 
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="bg-black opacity-30 h-full w-full"></div>
      <div className="absolute bottom-[20px] left-[30px] md:bottom-[80px] md:left-[100px] h-auto w-auto p-3 bg-white text-black font-bold md:text-2xl sm:text-1xl text-sm lg:text-3xl">
        {!label && <h1 className='font-bold text-1xl'>Instant DIY</h1>}
        {label && label}
      </div>
    </div>
  );
};

export default Banner;
