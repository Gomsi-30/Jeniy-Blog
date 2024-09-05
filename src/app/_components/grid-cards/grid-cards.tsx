import Image from 'next/image';
import Container from '../container';
import Link from 'next/link';
import { data } from './data'; // Adjust the path as needed

const GridCards = () => {
    return (
        <Container>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-[40px]'>
                {data.map(({ id, image, text }) => (
                    <Link key={id} href={`/article/${id}`} passHref>
                        <div className="h-[170px] overflow-hidden flex cursor-pointer">
                            <div className="w-[50%] relative h-full">
                                <Image
                                    src={image}
                                    alt="Card Image"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="px-3 py-0 w-[50%] ">
                                <p className="text-md leading-6">
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
