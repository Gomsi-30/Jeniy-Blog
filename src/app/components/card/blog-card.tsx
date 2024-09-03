import Image from 'next/image'
import Container from '../container'

interface BlogCardProps {
  label: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ label }) => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row md:justify-between gap-[40px] w-full">
        <div className=" overflow-hidden w-[769px] h-[480px]">
          <Image 
            className="w-full"
            src={label}
            alt="Card Image"
            width={769}  // or whatever appropriate width
            height={450}  // or whatever appropriate height
            layout="responsive"  // this will make the image responsive
          />
          <div className="px-6 py-4 w-full">
            <p className="text-gray-700 text-base">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-7 w-[769px] h-[480px]">
          <div className="h-[170px]  overflow-hidden  flex flex-row">
            <Image 
              className="w-full"
              src={label}
              alt="Card Image"
              width={170}
              height={170}
              layout="responsive"
            />
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="h-[170px]  overflow-hidden  flex flex-row">
            <Image 
              className="w-full"
              src={label}
              alt="Card Image"
              width={170}
              height={170}
              layout="responsive"
            />
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="h-[170px]  overflow-hidden  flex flex-row">
            <Image 
              className="w-full"
              src={label}
              alt="Card Image"
              width={170}
              height={170}
              layout="responsive"
            />
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default BlogCard;
