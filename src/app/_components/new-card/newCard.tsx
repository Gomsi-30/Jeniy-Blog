import Container from '../container';
import Image from 'next/image';

const NewCard = () => {
  return (
    <Container>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full'>
        {Array(4).fill(null).map((_, index) => (
          <div key={index} className="relative overflow-hidden bg-pink-200 w-full h-auto">
            <Image 
              className="w-full h-auto"
              src='/Rectangle 3.png'
              alt="Card Image"
              width={369}  
              height={240} 
              layout="responsive"
            />
            <div className="px-2 py-2 md:py-4">
              <p className="text-gray-700 text-sm md:text-base">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default NewCard;
