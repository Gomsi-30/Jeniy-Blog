
import Banner from "../../_components/banner/banner"
import GridCard from "../../_components/grid-cards/grid-cards"
import Banner2 from "../../_components/banner2/banner2"
import Header from '../../_components/header'
import BlogCard from '../../_components/card/blog-card'
import NewCard from '../../_components/new-card/newCard'
import {influencersData} from '../../_components/articles/influencers-data'

const Influencers = () => {
  return (
    <div className=' flex flex-col gap-12 h-auto'>
      <Banner label='Influencers' />

      {/* Responsive Banner 2 */}
      <div className='px-4 md:px-[100px] lg:px-[250px]'>
        <Banner2 check='b' />
      </div>

      {/* Header for Brands */}
      <Header label='INFLUECERS' />
      
      {/* New Card Section */}
      <NewCard data={influencersData} />

      {/* Header for Content Creation */}
      <Header label='CONTENT CREATION' />

      {/* Blog Card Section */}
      <div className='px-1'>
        <BlogCard data={influencersData} />
      </div>

      {/* Header for Trends */}
      <Header label='Trends' />
      
      <div className='px-1]'>
        <BlogCard data={influencersData} />
      </div>

      {/* Influencer Marketing Section */}
      <Header label={`WHAT's MORE`} />
      
      {/* Grid Cards */}
      <div className='px-1'>
        <GridCard data={influencersData} />
      </div>
    </div>
  );
}

export default Influencers;

