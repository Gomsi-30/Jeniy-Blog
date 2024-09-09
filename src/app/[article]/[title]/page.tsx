import Banner from '../../_components/banner2/banner2';
import GridCard from '../../_components/grid-cards/grid-cards';
import Header from '../../_components/global/header';
import Link from 'next/link';
import { allData } from '../../_components/articles/all-data'; 
// export const generateStaticParams = () => {
//     return allData.map(({ title }) => ({
//       title: title.replace(/[^A-Za-z0-9]+/g, "-"),
//     }));
// };

// export const generateMetadata = ({ params: { title } }: Params) => {
//     const article = allData.find(({ title }) => {
//       return title.replace(/[^A-Za-z0-9]+/g, "-") === title;
//     }) as Article;
//     return {
//       title: article.title,
//       description: article.contents.at(-1),
//       openGraph: {
//         url: `/${title}`,
//         title: article.title,
//         description: article.contents.at(-1),
//         images: [`/articleassets/${article.image}`],
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: article.title,
//         description: article.contents.at(-1),
//         images: [`/articleassets/${article.imgUrl}`],
//       },
//     };
//   };

const DynamicArticle = ({ params }: {params:{article:string;title:string}}) => {
    let { article,title } = params; 
   
    const articleData = allData.find(item => item.text.replace(/[^A-Za-z0-9]+/g, "-") === title);
    const filteredData = allData.filter(item => item.text.replace(/[^A-Za-z0-9]+/g, "-") !== title) 
    .slice(0, 6);
    

    return (
        <div className="mt-[50px] h-auto flex flex-col gap-1 w-full">
          
            <div className="container flex flex-col gap-7 max-w-[550px] sm:max-w-full px-4">
                <div className="flex flex-row gap-2 justify-center items-center">
                <Link href="/" className="font-regular text-sm text-red-400 hover:underline">
                     Home
                </Link>
                  /
            <p className="text-sm font-semibold opacity-70">{article}</p>
                </div>
            </div>

           
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

            
            <Header label="WHAT's MORE" />
            <div className="mt-8">
                <GridCard data={filteredData} section={article} />
            </div>
        </div>
    );
};

export default DynamicArticle;
