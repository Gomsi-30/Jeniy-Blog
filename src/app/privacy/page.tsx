import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Container from '../_components/container';
import {data} from './data.ts'

const Privacy = () => {
  return (
    <div className="mt-[30px] flex  flex-col gap-[50px] h-[1200px]">
      {/* Breadcrumb */}
      <Container>
        <div className="flex flex-col gap-7 w-[550px] sm:w-full">
          <div className="flex flex-row gap-1 justify-center items-center">
          <Link href="/" className="p-1 font-bold text-sm">
              Home
            </Link>
            <FaArrowRight />
            <p className="p-1 text-sm opacity-50">Privacy</p>
          </div>
        </div>
      </Container>
     <div className='px-[50px] md:px-[120px] lg:px-[170px]'>
        <div className='flex w-[485px] sm:w-full  flex flex-col gap-10'>
            {data.map((i)=>(
                <p className='text-sm'>{i}</p> 
            ))}
        </div>
    </div>
    </div>
  );
};

export default Privacy;
