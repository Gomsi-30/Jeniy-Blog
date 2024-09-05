
import Banner from "../../_components/banner/banner"
import GridCard from "../../_components/grid-cards/grid-cards"
import Banner2 from "../../_components/banner2/banner2"
import Header from '../../_components/header'
import BlogCard from '../../_components/card/blog-card'
import NewCard from '../../_components/new-card/newCard'

const Brands = () => {
  return (
    <div className=' flex flex-col gap-12 h-auto'>
      <Banner label='Brands' check='b' />

      {/* banner 2 */}
      <div className='px-[250px]'><Banner2 check='b' /></div>

      <Header label='BRANDS' />
        
      {/* new card */}
      <NewCard />

      {/* header */}
      <Header label='CONTENT CREATION' />

      {/* blog card */}
      <BlogCard label="/Rectangle 3.png" />

     
      {/* BLOG-COMPONENT */}
      <Header label='Trends' />
      <BlogCard label="/Rectangle 3.png" />
      

      {/* Influencer marketing */}
      <Header label={`WHAT's MORE`} />
      <GridCard />
    </div>
  );
}

export default Brands;