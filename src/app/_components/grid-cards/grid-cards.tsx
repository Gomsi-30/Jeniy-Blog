import Image from 'next/image';
import Container from '../container';
import Link from 'next/link';

// Type Definition
type GridCardData = {
  articleNumber: number;
  id: number;
  image: string;
  text: string;
  author?: string;
  authorImage?: string;
  readTime?: string;
  description?: string[];
  section?:string;
};

type GridCardsProps = {
  data?: GridCardData[]; 
};

const GridCards = ({ data = [],section }: GridCardsProps) => {
  const validData = Array.isArray(data) ? data.filter(item => item !== undefined) : [];

  return (
    
      <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {validData.map(({ id, image, text }) => (
          <Link key={id} href={`/${section}/${id}`} passHref>
            <div className="flex h-[130px] cursor-pointer overflow-hidden ">
              <div className="relative w-[40%] h-full">
                <Image
                  src={image}
                  alt={text}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              
              <div className="w-[60%] px-3 flex items-start justify-start">
                <p className="text-sm font-medium leading-6">
                  {text}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
  );
};

export default GridCards;
