
import Banner from "../_components/banner/banner"
import GridCard from "../_components/grid-cards/grid-cards"
import Banner2 from "../_components/banner2/banner2"
import Header from '../_components/global/header'
import BlogCard from '../_components/card/blog-card'
import NewCard from '../_components/new-card/newCard'
import {influencersMarketData} from '../_components/articles/influencer-market-data'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Influencer Marketing",
};
const InfluencerMarketing = () => {
  const section = 'influencer-marketing'
  return (
    <div className=' flex flex-col gap-12 h-auto'>
      <Banner label='Influencer Marketing'/>

       {/* Responsive Banner 2 */}
       <div className='px-4 md:px-[100px] lg:px-[250px]'>
        <Banner2 check='b' articleImage={influencersMarketData[0].imgUrl} />
      </div>

      {/* Header for Brands */}
      <Header label='INFLUENCER MARKETING' />
      
      {/* New Card Section */}
      <NewCard data={influencersMarketData} section={section}/>

      {/* Header for Content Creation */}
      <Header label='CONTENT CREATION' />

      {/* Blog Card Section */}
      <div className='px-1'>
        <BlogCard data={influencersMarketData} section={section}/>
      </div>

      {/* Header for Trends */}
      <Header label='Trends' />
      
      <div className='px-1]'>
        <BlogCard data={influencersMarketData} section={section}/>
      </div>

      {/* Influencer Marketing Section */}
      <Header label={`WHAT's MORE`} />
      
      {/* Grid Cards */}
      <div className='px-1'>
        <GridCard data={influencersMarketData} section={section}/>
      </div>
    </div>
  );
}

export default InfluencerMarketing;