import Image from 'next/image'
import Container from '../container'

const BlogCard = ({label}) => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-[70px]">
        <div className="max-w-sm rounded overflow-hidden shadow-lg w-[569px]  h-[400px]">
          <img className="w-full" src={label} alt="Card Image" />
          <div className="px-6 py-4 w-full">
            <p className="text-gray-700 text-base">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="max-w-sm flex flex-col gap-7 w-[569px] h-[400px]">
          <div className="h-[170px] rounded overflow-hidden shadow-lg flex flex-row ">
            <img className="w-full" src={label} alt="Card Image" />
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className=" h-[170px] rounded overflow-hidden shadow-lg flex flex-row">
            <img className="w-full" src={label} alt="Card Image" />
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="h-[170px] rounded overflow-hidden shadow-lg flex flex-row">
            <img className="w-full" src={label} alt="Card Image" />
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



