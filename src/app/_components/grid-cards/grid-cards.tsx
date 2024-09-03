import Image from 'next/image';
import Container from '../container';

const GridCards = () => {
    return (
        <Container>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-[40px]'>
                {[...Array(9)].map((_, index) => (
                    <div key={index} className="h-[170px] rounded overflow-hidden flex">
                        <div className="w-[50%] relative h-full">
                            <Image
                                src="/Rectangle 3.png"
                                alt="Card Image"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="px-2 py-1 w-[50%] flex items-center">
                            <p className="text-gray-700 text-sm leading-6">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default GridCards;
