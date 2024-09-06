import Image from 'next/image';
import Container from '../container';
import Link from 'next/link';
import { data2 } from '../data'; // Adjust the path as needed

const GridCards = () => {
    return (
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {data2.map(({ id, image, text }) => (
                    <Link key={id} href={`/article/${id}`} passHref>
                        <div className="flex h-[170px] cursor-pointer overflow-hidden ">
                            {/* Image Container with increased width */}
                            <div className="relative w-[60%] h-full">
                                <Image
                                    src={image}
                                    alt={text}
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute inset-0 w-full h-full"
                                />
                            </div>
                            {/* Text Container */}
                            <div className="w-1/2 px-3 flex items-start justify-start">
                                <p className="text-md font-medium leading-6">
                                    {text}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Container>
    );
};

export default GridCards;
