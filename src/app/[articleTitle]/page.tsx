import Banner from '../_components/banner2/banner2';
import GridCard from '../_components/grid-cards/grid-cards';
import Header from '../_components/global/header';
import Link from 'next/link';
import { allData } from '../_components/articles/all-data';
import Brands from '../_components/navbar/brands';


// type Params = { params: { title: string } };
const segments = ['socialmedia', 'brands', 'influencer','influencer-marketing'];

export const generateStaticParams = () => {
  return allData.flatMap(({ title }) => {
    const formattedTitle = title.replace(/[^A-Za-z0-9]+/g, "-"); // Clean and format the title

    return segments.map(segment => ({
      articleTitle: `${segment}-${formattedTitle}`, // Combine title with each segment
    }));
  });
};

  
  export const generateMetadata = ({ params }: any) => {
    const { articleTitle } = params;
    const parts = articleTitle ? articleTitle.split('-') : [];
    const remainingParts = parts.slice(1).join('-'); 

    const article = allData.find(({ title }) => {
        return title.replace(/[^A-Za-z0-9]+/g, "-") === remainingParts;
    }) as Article;

    if (article) {
        return {
            title: article.title,
            description: article.contents.at(-1),
            openGraph: {
                url: `/${articleTitle}`,
                title: article.title,
                description: article.contents.at(-1),
                images: [`/articleassets/${article.imgUrl}`],
            },
            twitter: {
                card: "summary_large_image",
                title: article.title,
                description: article.contents.at(-1),
                images: [`/articleassets/${article.imgUrl}`],
            },
        };
    }

    return {
        title: 'Article Not Found',
        description: 'No article found for the given parameters',
    };
};
  


const DynamicArticle = ({ params }:any) => {
    const {articleTitle} = params;
    const parts = articleTitle ? articleTitle.split('-') : [];
    const category = parts[0];
    const remainingParts = parts.slice(1).join('-'); 
    console.log(remainingParts)
    let articleData = allData.find(item => item.title?.replace(/[^A-Za-z0-9]+/g, "-") === remainingParts);

    const updateHeadings = (articleData: any) => {
        articleData.contents = articleData.contents.map((content: string) => {
            if (content.startsWith('***')) {
               
                return `<h2 class='font-bold'>${content.slice(3).trim()}</h2>`;
            }
          
            return content;
        });
    };

    if (articleData) {
        updateHeadings(articleData);
    }

    
    const filteredData = allData
        .filter(item => item.title?.replace(/[^A-Za-z0-9]+/g, "-") !== remainingParts)
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
                    <p className="text-sm font-semibold opacity-70">{category}</p>
                </div>
            </div>

            {/* Banner */}
            <div className="w-full">
                <Banner
                    check="c"
                    headingText={articleData?.title || 'Default Heading'}
                    profileImage={articleData?.imgUrl}
                    profileName={articleData?.authorName}
                    articleImage={articleData?.imgUrl}
                    profileReadTime={articleData?.readTime}
                    articleNumber={articleData?.articleNumber}
                />
            </div>
            <div className='flex justify-center w-full items-center'>
               <Brands articleTitle={remainingParts} />
            </div>
            {/* Article Content */}
            <div className="px-4 sm:px-8 md:px-16 lg:px-[280px] mx-auto max-w-7xl mt-[10px]">
                <div className="flex flex-col gap-6 md:gap-10">
                    {articleData ? (
                        articleData.contents.map((desc: string, index: number) => (
                            <div
                                key={index}
                                className="text-lg md:text-lg text-2xl text-gray-700 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: desc }} // Render content as HTML
                            />
                        ))
                    ) : (
                        <p className="text-sm text-gray-500">Loading...</p>
                    )}
                </div>
            </div>

            {/* Related Articles */}
            <Header label="WHAT'S MORE" />
            <div className="mt-8">
                <GridCard data={filteredData} section={articleData?.title || 'Related'} />
            </div>
        </div>
    );
};

export default DynamicArticle;
