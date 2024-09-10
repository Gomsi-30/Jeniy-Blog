import Image from 'next/image';
import Link from 'next/link';

type GridCardData = {
  articleNumber: number;
  imgUrl: string;
  title?: string;
  author?: string;
  authorImage?: string;
  readTime?: string;
  description?: string[];
  section?: string;
};

type GridCardsProps = {
  data?: GridCardData[];
  section?: string;
};

const GridCards = ({ data = [], section = '' }: GridCardsProps) => {
  let validData = Array.isArray(data) ? data.filter(item => item !== undefined) : [];
  validData = validData.slice(0, 9);
  return (
    <div className='container grid grid-cols-1  lg:grid-cols-3 gap-5'>
      {validData.map(({ imgUrl, title,articleNumber }, index) => (
        <Link key={articleNumber} href={`${section}-${title?.replace(/[^A-Za-z0-9]+/g, "-")}`}>
          <div
            className={`flex h-[130px] cursor-pointer overflow-hidden ${index === validData.length - 1 ? ' ' : ''}`} 
          >
            <div className="relative w-[40%] h-full">
              <Image
                src={imgUrl}
                alt='Not-found'
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="w-[60%] px-3 flex items-start justify-start">
              <p className="line-clamp-4 text-md sm:text-lg md:text-md xl:text-sm font-semibold leading-6 xl:text-md">
                {title}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GridCards;
