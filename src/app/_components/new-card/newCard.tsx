import Image from 'next/image';
import Link from 'next/link';

type NewCardData = {
  imgUrl: string;
  title?: string;
  author?: string;
  authorImage?: string;
  readTime?: string;
  description?: string[];
  articleNumber?: number;
  section?: string;
};

type NewCardProps = {
  data: NewCardData[];
  section?: string;
};

const NewCard = ({ data, section = '' }: NewCardProps) => {
  // Limit to the first 4 items
  const cardsToDisplay = data.slice(0, 4);

  return (
    <div className="container grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {cardsToDisplay.map((card, index) => (
        <Link 
          key={index} // Use index as key if there's no unique identifier
          href={`/${section}-${card.title?.replace(/[^A-Za-z0-9]+/g, "-")}`}
        >
          <div className="w-full cursor-pointer">
            <div className="relative w-full h-[240px] overflow-hidden rounded-md">
              <Image 
                src={card.imgUrl}
                alt={card.title || 'Image'}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            {/* Content Below the Image */}
            <div className="py-2 md:py-4">
              <p className="text-lg lg:text-md font-semibold line-clamp-3">
                {card.title}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NewCard;
