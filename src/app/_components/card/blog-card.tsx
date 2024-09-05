import Image from 'next/image';
import Container from '../container';

type BlogCardProps = {
  label: string;
};

const BlogCard = ({ label }: BlogCardProps) => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-8 w-full">
        {/* Main Image Section */}
        <div className="relative lg:flex flex-col gap-2 w-full max-w-full md:max-w-lg">
          <Image 
            className="object-cover"
            src={label}
            alt="Main Card Image"
            width={769}
            height={450}
            layout="responsive"
          />
          <div className="">
            <p className="font-semibold  text-lg text-1xl lg:text-2xl leaders-7">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>

        {/* Small Images Section */}
        <div className="flex flex-col gap-3 md:gap-6 w-full md:w-auto">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="relative flex flex-col sm:flex-row gap-3 h-[250px] sm:h-[150px] overflow-hidden">
              <div className="w-full sm:w-1/3 h-full relative">
                <Image 
                  className="object-cover"
                  src={label}
                  alt={`Small Card Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-semibold  text-lg md:text-md leaders-3 text-1xl">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BlogCard;
