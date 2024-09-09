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
    <div className='container grid grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
      {cardsToDisplay.map((card, index) => (
        <Link 
          key={index} // Use index as key if there's no unique identifier
          href={`/${section}-${card.title?.replace(/[^A-Za-z0-9]+/g, "-")}`}
        >
          <div className="relative overflow-hidden w-full h-auto cursor-pointer">
            <Image 
              className="w-full h-auto"
              src={card.imgUrl}
              alt={card.title || 'Image'}
              width={369}  
              height={240} 
              layout="responsive"
            />
            <div className="py-2 md:py-4">
              <p className="line-clamp-3 text-lg lg:text-md">
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
