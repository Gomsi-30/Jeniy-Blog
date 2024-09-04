import Container from '../../_components/container';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className='h-[1000px] flex flex-col gap-8'>
            <Container>
                <div className="flex flex-col gap-7 w-[550px] sm:w-full">
                    <div className="flex flex-row gap-1 justify-center items-center">
                        <Link href="/" className="p-1 font-bold text-sm">
                            Home
                        </Link>
                        <FaArrowRight />
                        <p className="p-1 text-sm opacity-50">Contact Us</p>
                    </div>
                </div>
            </Container>
            <div className='px-[50px] md:px-[120px] lg:px-[170px]'>
                <div className='flex flex-col gap-11 w-[485px] sm:w-full'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='font-bold'>What is InfluencerCollab?</h1>
                        <p className='text-sm opacity-90'>{`Welcome to InfluencerCollab, your ultimate destination for everything related to influencers, social media, brands, and influencer marketing. We’re here to provide you with in-depth insights, expert advice, and the latest trends in the dynamic world of digital influence. Whether you’re an influencer, a brand looking to collaborate, or simply passionate about social media, InfluencerCollab is your go-to resource for valuable information and inspiration.`}
                        </p>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <h1 className='font-bold'>Our Mission</h1>
                        <p className='text-sm opacity-90'>{`
                At InfluencerCollab, our mission is to bridge the gap between influencers and brands, helping both parties navigate the ever-evolving landscape of social media marketing. We understand the power of influencer marketing and strive to empower our readers with the knowledge and tools they need to succeed in this exciting industry.`}
                        </p>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <h1 className='font-bold'>Our Story</h1>
                        <p className='text-sm opacity-90'>{`InfluencerCollab was founded by a team of marketing professionals and social media enthusiasts who recognized the need for a comprehensive platform dedicated to the nuances of influencer marketing. Frustrated by the fragmented and often superficial information available, we set out to create a space where industry insiders and newcomers alike could access high-quality content, practical advice, and actionable insights.`}
                        </p>
                        <p className='text-sm opacity-90'>{`From our humble beginnings, InfluencerCollab has grown into a leading source of information for influencers and brands around the globe. Our team is passionate about exploring the latest trends, sharing best practices, and offering thought leadership to help you stay ahead in the competitive world of social media.`}
                        </p>
                        <p className='text-sm opacity-90'>{`Thank you for visiting InfluencerCollab. We invite you to explore our blogs, engage with our content, and join us on this exciting journey through the world of influencer marketing!`}
                        </p>
                    </div>

                    <div className='flex flex-row gap-2 gap-[40px]'>
                        <div className='flex-1'>
                            <Image className='w-full h-auto' src='/football.png' alt='' height={100} width={100} />
                        </div>
                        <div className='flex-1'>
                            <Image className='w-full h-auto' src='/football.png' alt='' height={100} width={100} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutUs;