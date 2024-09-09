import Image from 'next/image';
import Link from 'next/link';

type GridCardData = {
  articleNumber: number;
  id: number;
  image: string;
  text: string;
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
  const validData = Array.isArray(data) ? data.filter(item => item !== undefined) : [];
  
  return (
    <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {validData.map(({ id, image, text }, index) => (
        <Link key={id} href={`/${section}/${text.replace(/[^A-Za-z0-9]+/g, "-")}/${id}`} passHref>
          <div
            className={`flex h-[130px] cursor-pointer overflow-hidden ${
              index >= validData.length - 4 && index!=validData.length-1 ? 'hidden sm:hidden md:block' : '' // Hide last 3 items on xs and sm
            } ${index === validData.length - 1 ? 'md:hidden' : ''}`} // Hide the last item on md
          >
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
              <p className="line-clamp-4 text-md sm:text-lg md:text-md xl:text-sm font-medium leading-6">
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
