import Banner from '../../_components/banner2/banner2';
import GridCard from '../../_components/grid-cards/grid-cards';
import Header from '../../_components/global/header';
import Link from 'next/link';
import { allData } from '../../_components/articles/all-data'; 


export const generateStaticParams = () => {
    return allData.map(({ title }) => ({
      title: title.replace(/[^A-Za-z0-9]+/g, "-"),
    }));
};


export const generateMetadata = ({ params: { title } }: { params: { title: string } }) => {
    const article = allData.find(({ title: articleTitle }) => {
      return articleTitle.replace(/[^A-Za-z0-9]+/g, "-") === title;
    });
    return {
      title: article?.title || 'Default Title',
      description: article?.contents[0] || 'Default description',
      openGraph: {
        url: `/${title}`,
        title: article?.title,
        description: article?.contents[0],
        images: [`/articleassets/${article?.imgUrl}`],
      },
      twitter: {
        card: "summary_large_image",
        title: article?.title,
        description: article?.contents[0],
        images: [`/articleassets/${article?.imgUrl}`],
      },
    };
};

// Dynamic article page component
const DynamicArticle = ({ params }: { params: { article: string; title: string } }) => {
    let { title } = params;
    
    // Find the article based on the title parameter
    let articleData = allData.find(item => item.title?.replace(/[^A-Za-z0-9]+/g, "-") === title);

  
    const updateHeadings = (articleData: any) => {
        articleData.contents = articleData.contents.map((content: string) => {
            if (content.startsWith('***') ) {
                // Convert the line to an HTML <h2> tag
                return `<h2 class='font-bold'>${content.slice(3).trim()}</h2>`;
            }
            if (content.startsWith('**') ) {
                // Convert the line to an HTML <h2> tag
                return `<p >${content.slice(3).trim()}</p>`;
            }
            return content;
        });
    };

    if (articleData) {
        updateHeadings(articleData);
    }

    // Filter and limit data for related articles
    const filteredData = allData
      .filter(item => item.title?.replace(/[^A-Za-z0-9]+/g, "-") !== title)
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
                    <p className="text-sm font-semibold opacity-70">{articleData?.title}</p>
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

            {/* Article Content */}
            <div className="px-4 sm:px-8 md:px-16 lg:px-[280px] mx-auto max-w-7xl">
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
