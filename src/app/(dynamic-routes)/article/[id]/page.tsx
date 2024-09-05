import Banner from '../../../_components/banner2/banner2';
import GridCard from '../../../_components/grid-cards/grid-cards';
import Header from '../../../_components/header';
import Container from '../../../_components/container';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { data2 } from './data'; // Adjust the path as needed

const DynamicArticle = ({ params }) => {
    const { id } = params; // Extract the ID from the URL

    // Filter data based on the ID
    const articleData = data2.find(item => item.id === parseInt(id));

    return (
        <div className="mt-[30px] flex flex-col gap-[50px] h-full w-full">
            {/* Breadcrumb */}
            <Container>
                <div className="flex flex-col gap-7 max-w-[550px] sm:max-w-full px-4">
                    <div className="flex flex-row gap-1 justify-center items-center">
                        <Link href="/" className="p-1 font-bold text-sm">
                            Home
                        </Link>
                        <FaArrowRight />
                        <p className="p-1 text-sm opacity-50">Influencers</p>
                    </div>
                </div>
            </Container>

            {/* Banner Section */}
            <div className="w-full">
                <Banner
                    check="c"
                    headingText={articleData?.text || 'Default Heading'}
                    profileImage={articleData?.authorImage}
                    profileName={articleData?.author}
                    profileDate={articleData?.date}
                    articleImage={articleData?.image}
                />
            </div>

            {/* Content Section */}
            <Container>
                <div className="px-10 sm:px-[50px] md:px-[120px] lg:px-[170px]">
                    <div className="flex flex-col gap-10 max-w-full">
                        {articleData ? (
                            articleData.description.map((desc, index) => (
                                <p key={index} className="text-sm text-gray-700">
                                    {desc}
                                </p>
                            ))
                        ) : (
                            <p className="text-sm text-gray-500">Loading...</p>
                        )}
                    </div>
                </div>
            </Container>

            {/* Additional Section */}
            <Container>
                <Header label="WHAT's MORE"  />
                <div className="mt-12">
                    <GridCard />
                </div>
            </Container>
        </div>
    );
};

export default DynamicArticle;
