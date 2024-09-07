import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { data } from '../../constants/desclaimer-data'

const Desclaimer = () => {
  return (
    <div className="mt-[50px] flex flex-col gap-[50px] h-auto w-full">
      {/* Breadcrumb */}
      
              <div className="container flex flex-col gap-7 max-w-[550px] sm:max-w-full px-4">
              <div className="flex flex-row gap-2 justify-center items-center">
                <Link href="/" className="font-bold text-sm text-blue-600 hover:underline">
                 Home
                </Link>
              <FaArrowRight color='gray' size={10} />
              <p className="text-sm opacity-50">Desclaimer</p>
              </div>
             </div>
    

      <div className='px-6 sm:px-[50px] md:px-[120px] lg:px-[187px]'>
        <div className='flex flex-col gap-10 max-w-full'>
          {data.map((i, index) => (
            <p key={index} className='text-sm'>{i}</p>
          ))}
        </div>
      </div>
    </div>
    )
}

export default Desclaimer;