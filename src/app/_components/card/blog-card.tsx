import Image from 'next/image';
import Container from '../container';
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
  section?:string;
};

type BlogCardProps = {
  data: BlogCardData[];
};

const BlogCard = ({ data,section }: BlogCardProps) => {
  
  const mainCard = data?.[0]; 
  const smallCards = data.length > 1 ? data.slice(1, 4) : []; 

  return (
    <Container>
      <div className="flex flex-col md:flex-row md:justify-between gap-5 w-full">
        
        <Link href={`/${section}/${mainCard.id}`} passHref>
          <div className="relative flex flex-col gap-2 h-auto  w-full  md:max-w-3xl cursor-pointer">
            <Image 
              // className="object-fit"
              src={mainCard.image}
              alt={mainCard.text}
              width={250}
              height={250}
              layout="responsive"
            />
            <div>
              <p className="text-lg font-semibold lg:text-2xl leading-7 md:font-semibold md:text-base">
                {mainCard.text}
              </p>
            </div>
          </div>
        </Link>

        <div className="flex flex-col gap-3 md:gap-5 w-full md:w-auto">
          {smallCards.map((card) => (
            <Link key={card.id} href={`/article/${card.id}`} passHref>
              <div className="relative flex flex-col sm:flex-row gap-3 h-[250px] sm:h-[120px] overflow-hidden cursor-pointer">
                <div className="w-full sm:w-1/3 h-full relative">
                  <Image 
                    className="object-cover"
                    src={card.image}
                    alt={card.text}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-md font-semibold md:text-md leading-6 md:font-semibold">
                    {card.text}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BlogCard;
