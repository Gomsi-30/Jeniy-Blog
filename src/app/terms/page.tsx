import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { data } from '../../constants/terms-data'

const Terms = () => {
  return (
    <div className="mt-[40px] flex flex-col gap-[50px] h-[1300px] w-full">
     
              <div className="container flex flex-col gap-7 max-w-[550px] sm:max-w-full px-4">
              <div className="flex flex-row gap-2 justify-center items-center">
              <Link href="/" className="font-regular text-sm text-red-400 hover:underline">
            Home
          </Link>
          /
          <p className="text-sm font-semibold opacity-70">Terms</p>
              </div>
             </div>
      
      
      {/* Content Section */}
      <div className='container px-6 sm:px-[50px] md:px-[120px] lg:px-[177px]'>
        <div className='flex flex-col gap-10 max-w-full'>
          {data.map((i, index) => (
            <p key={index} className='text-sm'>{i}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terms;