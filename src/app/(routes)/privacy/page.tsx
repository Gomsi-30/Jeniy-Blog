import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Container from '../../_components/container';
import { data } from './data'

const Privacy = () => {
  return (
    <div className="mt-[30px] flex flex-col gap-[50px] h-[1300px] w-full">
      {/* Breadcrumb */}
      <Container>
        <div className="flex flex-col gap-7 max-w-[550px] sm:max-w-full px-4">
          <div className="flex flex-row gap-1 justify-center items-center">
            <Link href="/" className="p-1 font-bold text-sm">
              Home
            </Link>
            <FaArrowRight />
            <p className="p-1 text-sm opacity-50">Privacy</p>
          </div>
        </div>
      </Container>
      
      {/* Content Section */}
      <div className='px-10 sm:px-[50px] md:px-[120px] lg:px-[170px]'>
        <div className='flex flex-col gap-10 max-w-full'>
          {data.map((i, index) => (
            <p key={index} className='text-sm'>{i}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Privacy;
