import Image from 'next/image';
import {allData} from '../articles/all-data'
type BannerProps = {
  label?: string;
};

const Banner = ({ label }: BannerProps) => {
  const data = Math.floor(Math.random() * allData.length);
  const bannerImg = allData[data].imgUrl;
  return (
    <div className="relative h-[260px] md:h-[300px] lg:h-[360px] w-full min-w-full">
      
      <Image
        src={bannerImg}
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="bg-black opacity-30 h-full w-full"></div>
      <div className="absolute bottom-[20px] left-[30px] md:bottom-[80px] md:left-[100px] h-auto w-auto p-3 bg-white text-black font-bold md:text-2xl sm:text-1xl text-sm lg:text-3xl">
        {!label && <h1 className='font-bold text-1xl'>Influencer Collaboration</h1>}
        {label && label}
      </div>
    </div>
  );
};

export default Banner;
