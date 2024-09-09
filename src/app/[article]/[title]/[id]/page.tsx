import Banner from '../../../_components/banner2/banner2';
import GridCard from '../../../_components/grid-cards/grid-cards';
import Header from '../../../_components/global/header';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { allData } from '../../../_components/articles/all-data'; 

const DynamicArticle = ({ params }: any) => {
    let { id, article } = params; 
    
    const articleData = allData.find(item => item.id === parseInt(id));
    const filteredData = allData.filter(item => item.id !== articleData?.id);
    const randomSix = filteredData
    .sort(() => Math.random() - 0.5) 
    .slice(0, 6); 

    return (
        <div className="mt-[50px] h-auto flex flex-col gap-1 w-full">
            {/* Breadcrumb */}
            <div className="container flex flex-col gap-7 max-w-[550px] sm:max-w-full px-4">
                <div className="flex flex-row gap-2 justify-center items-center">
                <Link href="/" className="font-regular text-sm text-red-400 hover:underline">
            Home
          </Link>
          /
          <p className="text-sm font-semibold opacity-70">{article}</p>
                </div>
            </div>

            {/* Banner Section */}
            <div className="w-full">
                <Banner
                    check="c"
                    headingText={articleData?.text || 'Default Heading'}
                    profileImage={articleData?.authorImage}
                    profileName={articleData?.author}
                    articleImage={articleData?.image}
                    profileReadTime={articleData?.readTime}
                    articleNumber={articleData?.articleNumber}
                />
            </div>

            {/* Content Section */}
            <div className="px-4 sm:px-8 md:px-16 lg:px-[280px] mx-auto max-w-7xl">
                <div className="flex flex-col gap-6 md:gap-10">
                    {articleData ? (
                        articleData.description.map((desc, index) => (
                            <p key={index} className="text-lg md:text-lg text-2xl text-gray-700 leading-relaxed">
                                {desc}
                            </p>
                        ))
                    ) : (
                        <p className="text-sm text-gray-500">Loading...</p>
                    )}
                </div>
            </div>

            {/* Additional Section */}
            <Header label="WHAT's MORE" />
            <div className="mt-8">
                <GridCard data={randomSix} section={article} />
            </div>
        </div>
    );
};

export default DynamicArticle;
