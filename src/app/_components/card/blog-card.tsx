import Image from 'next/image';
import Link from 'next/link';

type BlogCardData = {
  id: number;
  image: string;
  text: string;
  author?: string;
  authorImage?: string;
  readTime?: string;
  description?: string[];
  articleNumber?:number;
};

type BlogCardProps = {
  data: BlogCardData[];
  section: string;
};

const BlogCard = ({ data,section = ''}: BlogCardProps) => {
  
  const mainCard = data?.[0]; 
  const smallCards = data.length > 1 ? data.slice(1, 4) : []; 

  return (
   
      <div className="container flex flex-col md:flex-row md:justify-between gap-9 md:gap-5 w-full">
        
        <Link href={`/${section}/${mainCard.text.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
          <div className="relative flex flex-col gap-2 md:h-[400px] lg:h-auto w-full md:max-w-3xl  cursor-pointer">
            <Image 
              // className="object-fit"
              src={mainCard.image}
              alt={mainCard.text}
              width={250}
              height={350}
              layout="responsive"
            />
            <div>
              <p className="line-clamp-3 text-lg font-semibold lg:text-2xl md:leading-12 lg:leading-7 md:font-semibold md:text-1xl">
                {mainCard.text}
              </p>
            </div>
          </div>
        </Link>

        <div className="flex flex-col gap-3 lg:gap-5 w-full md:w-auto">
          {smallCards.map((card) => (
            <Link key={card.id} href={`/${section}/${card.text.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
              <div className="relative flex flex-row gap-3 h-[150px] sm:h-[120px] overflow-hidden cursor-pointer">
                <div className="w-1/3 sm:w-1/3 h-[110px] lg:h-full relative">
                  <Image 
                    className="object-cover"
                    src={card.image}
                    alt={card.text}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="line-clamp-3 font-regular text-lg lg:text-lg md:leading-5.5 lg:leading-6 lg:font-semibold">
                    {card.text}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
  );
};

export default BlogCard;
