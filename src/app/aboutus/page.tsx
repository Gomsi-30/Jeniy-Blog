import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About-Us",
};

const AboutUs = () => {
    return (
        <div className='container mt-[40px] flex flex-col gap-8 px-4 md:px-6 lg:px-3 py-8'>
          
              <div className="flex flex-col gap-7 max-w-[550px] sm:max-w-full px-4">
              <div className="flex flex-row gap-2 justify-center items-center">
              <Link href="/" className="font-regular text-sm text-red-400 hover:underline">
            Home
          </Link>
          /
          <p className="text-sm font-semibold opacity-70">About us</p>
              </div>
             </div>
          

            {/* Main Content */}
            
            <div className='container w-full max-w-7xl mt-[15px]'>
                <div className='flex flex-col gap-11'>
                    {/* Instantdiy Section */}
                    <div className='flex flex-col gap-5'>
                        <h1 className='font-bold text-2xl sm:text-3xl'>What is Instantdiy?</h1>
                        <p className='text-sm sm:text-base opacity-90'>
                            {`Welcome to Instantdiy, your ultimate destination for everything related to Instantdiy, social media, brands, and Instantdiy. We’re here to provide you with in-depth insights, expert advice, and the latest trends in the dynamic world of digital Instantdiy. Whether you’re an Instantdiy, a brand looking to collaborate, or simply passionate about social media, Instantdiy is your go-to resource for valuable information and inspiration.`}
                        </p>
                    </div>

                    {/* Our Mission Section */}
                    <div className='flex flex-col gap-5'>
                        <h1 className='font-bold text-2xl sm:text-3xl'>Our Mission</h1>
                        <p className='text-sm sm:text-base opacity-90'>
                            {`At Instantdiy, our mission is to bridge the gap between Instantdiy and brands, helping both parties navigate the ever-evolving landscape of social media marketing. We understand the power of Instantdiy and strive to empower our readers with the knowledge and tools they need to succeed in this exciting industry.`}
                        </p>
                    </div>

                    {/* Our Story Section */}
                    <div className='flex flex-col gap-5'>
                        <h1 className='font-bold text-2xl sm:text-3xl'>Our Story</h1>
                        <p className='text-sm sm:text-base opacity-90'>
                            {`Instantdiy was founded by a team of marketing professionals and social media enthusiasts who recognized the need for a comprehensive platform dedicated to the nuances of Instantdiy. Frustrated by the fragmented and often superficial information available, we set out to create a space where industry insiders and newcomers alike could access high-quality content, practical advice, and actionable insights.`}
                        </p>
                        <p className='text-sm sm:text-base opacity-90'>
                            {`From our humble beginnings, Instantdiy has grown into a leading source of information for Instantdiy and brands around the globe. Our team is passionate about exploring the latest trends, sharing best practices, and offering thought leadership to help you stay ahead in the competitive world of social media.`}
                        </p>
                        <p className='text-sm sm:text-base opacity-90'>
                            {`Thank you for visiting Instantdiy. We invite you to explore our blogs, engage with our content, and join us on this exciting journey through the world of Instantdiy!`}
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className='flex flex-col sm:flex-row gap-6'>
                        <div className='flex-1'>
                            <Image
                                className='w-full h-auto'
                                src='/aboutus2.jpg'
                                alt='Instantdiy Image'
                                height={100}
                                width={100}
                                layout="responsive"
                            />
                        </div>
                        <div className='flex-1'>
                            <Image
                                className='w-full h-auto'
                                src='/aboutus1.jpg'
                                alt='Instantdiy Image'
                                height={100}
                                width={100}
                                layout="responsive"
                            />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AboutUs;
