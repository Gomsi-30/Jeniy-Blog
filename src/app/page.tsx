import Banner from "./_components/banner/banner"
import GridCard from "./_components/grid-cards/grid-cards"
import Banner2 from "./_components/banner2/banner2"
import Header from './_components/header'
import BlogCard from './_components/card/blog-card'
import NewCard from './_components/new-card/newCard'
import {brandsData} from './_components/articles/brands-data'
import {socialData} from './_components/articles/social-media-data'
import {influencersData} from './_components/articles/influencers-data'
import {influencersMarketData} from './_components/articles/influencer-market-data'

const Home = () => {
  return (
    <div className=' flex flex-col gap-12 h-auto'>
      <Banner />

      {/* influencer */}
      <Header label='INFLUENCER' />
      <NewCard data={influencersData} section='influencer'/>

     {/* socialmedia */}
      <Header label='SOCIAL MEDIA' />
      <BlogCard data={socialData} section='socialmedia' />

      <Banner2 check='a' />

      {/* brands */}
      <Header label='BRANDS' />
      <GridCard data={brandsData} section='brands' />

      {/* Influencer marketing */}
      <Header label='INFLUENCER MARKETING' />
      <BlogCard data={influencersMarketData} section='influencer-marketing' />
    </div>
  );
}

export default Home;

