import Image from 'next/image';
import Link from 'next/link';

type NewCardData = {
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


type NewCardProps = {
  data: NewCardData[];
};

const NewCard = ({ data,section }: NewCardProps) => {
  // Limit to the first 4 items
  const cardsToDisplay = data.slice(0, 4);

  return (
    
      <div className='container grid grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
        {cardsToDisplay.map(card => (
          <Link key={card.id} href={`/${section}/${card.id}`} passHref>
            <div className="relative overflow-hidden w-full h-auto cursor-pointer">
              <Image 
                className="w-full h-auto"
                src={card.image}
                alt={card.text}
                width={369}  
                height={240} 
                layout="responsive"
              />
              <div className="py-2 md:py-4">
                <p className="text-md">
                  {card.text}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
  );
};

export default NewCard;
