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
};

type GridCardsProps = {
  data?: GridCardData[]; // data is now optional
};

const GridCards = ({ data = [] }: GridCardsProps) => {
  // Check if `data` is an array and filter out undefined items
  const validData = Array.isArray(data) ? data.filter(item => item !== undefined) : [];

  return (
    <Container>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {validData.map(({ id, image, text }) => (
          <Link key={id} href={`/article/${id}`} passHref>
            <div className="flex h-[170px] cursor-pointer overflow-hidden ">
              {/* Image Container with increased width */}
              <div className="relative w-[60%] h-full">
                <Image
                  src={image}
                  alt={text}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              {/* Text Container */}
              <div className="w-1/2 px-3 flex items-start justify-start">
                <p className="text-md font-medium leading-6">
                  {text}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default GridCards;
