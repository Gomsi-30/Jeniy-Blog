import Image from 'next/image';
import Container from '../container';

type BlogCardProps = {
  label: string;
};

const BlogCard = ({ label }: BlogCardProps) => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-8 w-full">
        {/* Main Image Section */}
        <div className="relative w-full max-w-full md:max-w-lg">
          <Image 
            className="object-cover"
            src={label}
            alt="Main Card Image"
            width={769}
            height={450}
            layout="responsive"
          />
          <div className="px-4 md:px-6 py-4">
            <p className="text-gray-700 text-base">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>

        {/* Small Images Section */}
        <div className="flex flex-col gap-4 md:gap-6 w-full md:w-auto">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="relative flex flex-col sm:flex-row h-[250px] sm:h-[150px] overflow-hidden">
              <div className="w-full sm:w-1/3 h-full relative">
                <Image 
                  className="object-cover"
                  src={label}
                  alt={`Small Card Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex-1 px-4 md:px-6 py-4">
                <p className="text-gray-700 text-base">
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
