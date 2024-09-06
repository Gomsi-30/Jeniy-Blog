import Container from '../container';
import Image from 'next/image';
import Link from 'next/link';
import {data2} from '../data'; // Adjust the path as needed

const NewCard = () => {
  // Limit to the first 4 items
  const cardsToDisplay = data2.slice(0, 4);

  return (
    <Container>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
        {cardsToDisplay.map(card => (
          <Link key={card.id} href={`/article/${card.id}`} passHref>
            <div className="relative overflow-hidden w-full h-auto cursor-pointer">
              <Image 
                className="w-full h-auto"
                src={card.image}
                alt="Image description"
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
    </Container>
  );
};

export default NewCard;
