import Banner from "./_components/banner/banner"
import GridCard from "./_components/grid-cards/grid-cards"
import Banner2 from "./_components/banner2/banner2"
import Header from './_components/global/header'
import BlogCard from './_components/card/blog-card'
import NewCard from './_components/new-card/newCard'
import {brandsData} from './_components/articles/brands-data'
import {socialData} from './_components/articles/social-media-data'
import {influencersData} from './_components/articles/influencers-data'
import {influencersMarketData} from './_components/articles/influencer-market-data'

const Home = () => {
  return (
    <div className='flex flex-col gap-12 h-auto'>
      <Banner />

      <Header label='Interiors' />
      <BlogCard data={socialData} section='interiors' />

      <Header label='Gift & Cards' />
      <NewCard data={influencersData} section='giftandcards'/>

      <Banner2 check='a' />

      <Header label='Home Decor' />
      <GridCard data={brandsData} section='homedecor' />

      <Header label='Festive & Party Decor' />
      <BlogCard data={influencersMarketData} section='festiveandpartydecor' />
    </div>
  );
}

export default Home;

