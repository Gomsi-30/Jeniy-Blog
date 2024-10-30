import Banner from "../_components/banner/banner";
import GridCard from "../_components/grid-cards/grid-cards";
import Banner2 from "../_components/banner2/banner2";
import Header from '../_components/global/header';
import BlogCard from '../_components/card/blog-card';
import NewCard from '../_components/new-card/newCard';
import { interiors } from "../_components/articles/interiors";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interiors",
};

const Influencers = () => {
  const section = 'interiors';


  const randomIndex = Math.floor(Math.random() * interiors.length);
  const randomInfluencerItem = interiors[randomIndex];

  const newCardData = interiors.slice(0, 4); 
  const blogCardData1 = interiors.slice(4, 8); 
  const blogCardData2 = interiors.slice(8, 12);
  const gridCardData = interiors.slice(12, 18); 

  return (
    <div className='flex flex-col gap-12 h-auto'>
      <Banner label='Interiors' />

      <div className='px-4 md:px-[100px] lg:px-[250px]'>
        <Banner2 
          check='b' 
          articleImage={randomInfluencerItem.imgUrl} 
          headingText={randomInfluencerItem.title} 
          section={section} 
        /> 
      </div>

      <NewCard data={newCardData} section={section} />

      {/* Header for Content Creation */}
      <Header label='Interiors' />

      {/* Blog Card Section */}
      <div className='px-1'>
        <BlogCard data={blogCardData1} section={section} />
      </div>

      {/* Header for Trends */}
      <Header label='Trends' />
      
      <div className='px-1'>
        <BlogCard data={blogCardData2} section={section} />
      </div>

      {/* Influencer Marketing Section */}
      <Header label={`WHAT's MORE`} />
      
      {/* Grid Cards */}
      <div className='px-1'>
        <GridCard data={gridCardData} section={section} />
      </div>
    </div>
  );
}

export default Influencers;
