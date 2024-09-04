import Container from '../container';
import Image from 'next/image';
import data from './data.json'; // Adjust the path as needed

const NewCard = () => {
  return (
    <Container>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full'>
        {data.map(card => (
          <div key={card.id} className="relative overflow-hidden w-full h-auto">
            <Image 
              className="w-full h-auto"
              src={card.image}
              alt={card.alt}
              width={369}  
              height={240} 
              layout="responsive"
            />
            <div className="px-2 py-2 md:py-4">
              <p className="text-gray-700 text-sm md:text-base">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default NewCard;

