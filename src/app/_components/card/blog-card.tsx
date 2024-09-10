import Image from 'next/image';
import Link from 'next/link';

type BlogCardData = {
  imgUrl: string;
  title?: string;
  authorName?: string;
  authorImage?: string;
  readTime?: string;
  description?: string[];
  articleNumber: number; // Ensure articleNumber is included and is unique
};

type BlogCardProps = {
  data: BlogCardData[];
  section: string;
};

const BlogCard = ({ data, section = '' }: BlogCardProps) => {
  const mainCard = data?.[0];
  const smallCards = data.length > 1 ? data.slice(1, 4) : [];

  return (
    <div className="container flex flex-col lg:flex-row md:justify-between gap-9 lg:gap-5 w-full">
      <Link href={`/${section}-${mainCard.title?.replace(/[^A-Za-z0-9]+/g, '-')}`}>
        <div className="relative flex flex-col gap-2 md:h-[496px] lg:h-auto w-full md:max-w-3xl cursor-pointer">
          <Image
            src={mainCard.imgUrl}
            alt={mainCard.title || 'Blog Image'}
            width={250}
            height={350}
            layout="responsive"
          />
          <div>
            <h1 className="line-clamp-3 text-lg font-regular lg:text-2xl md:leading-12 lg:leading-8 md:font-semibold md:text-2xl">
              {mainCard.title}
            </h1>
          </div>
        </div>
      </Link>

      <div className="flex flex-col gap-2 lg:gap-5 w-full md:w-auto">
        {smallCards.map((card) => (
          <Link
            key={card.articleNumber} // Use articleNumber as the key
            href={`/${section}-${card.title?.replace(/[^A-Za-z0-9]+/g, '-')}`}
          >
            <div className="relative flex flex-row gap-3 h-[150px] sm:h-[120px] overflow-hidden cursor-pointer">
              <div className="w-1/3 sm:w-1/3 h-[110px] lg:h-full relative">
                <Image
                  className="object-cover"
                  src={card.imgUrl}
                  alt={card.title || 'Blog Image'}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex-1">
                <p className="line-clamp-3 font-regular md:text-1xl text-lg lg:text-lg md:leading-5.5 lg:leading-7 lg:font-semibold">
                  {card.title}
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
