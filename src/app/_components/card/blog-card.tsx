import Image from 'next/image';
import Container from '../container';
import Link from 'next/link';
import { data2 } from '../data'; // Import the data

const BlogCard = () => {
  const mainCard = data2[0]; // First item for the main card
  const smallCards = data2.slice(1, 4); // Slice to get only the first 3 items

  return (
    <Container>
      <div className="flex flex-col md:flex-row md:justify-between gap-8 w-full">
        
        {/* Main Image Section */}
        <Link href={`/article/${mainCard.id}`} passHref>
          <div className="relative flex flex-col gap-2 w-full max-w-full md:max-w-lg cursor-pointer">
            <Image 
              className="object-cover"
              src={mainCard.image}
              alt={mainCard.text}
              width={769}
              height={450}
              layout="responsive"
            />
            <div>
              <p className="font-semibold text-lg lg:text-2xl leading-7">
                {mainCard.text}
              </p>
            </div>
          </div>
        </Link>

        {/* Small Cards Section */}
        <div className="flex flex-col gap-3 md:gap-6 w-full md:w-auto">
          {smallCards.map((card) => (
            <Link key={card.id} href={`/article/${card.id}`} passHref>
              <div className="relative flex flex-col sm:flex-row gap-3 h-[250px] sm:h-[150px] overflow-hidden cursor-pointer">
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
                  <p className="text-lg font-semibold md:text-md leading-8">
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
