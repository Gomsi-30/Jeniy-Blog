import Banner from "./_components/banner/banner"
import GridCard from "./_components/grid-cards/grid-cards"
import Banner2 from "./_components/banner2/banner2"
import Header from './_components/header'
import BlogCard from './_components/card/blog-card'
import NewCard from './_components/new-card/newCard'

const Home = () => {
  return (
    <div className=' flex flex-col gap-12 h-auto'>
      <Banner />
      <Header className='bg-pink-200' label='INFLUENCER' />

      {/* new card */}
      <NewCard />

      {/* header */}
      <Header label='SOCIAL MEDIA' />

      {/* blog card */}
      <BlogCard label="/Rectangle 3.png" />

      {/* banner 2 */}
      <Header label='BRANDS' />
      <Banner2 check='a' />

      {/* BLOG-COMPONENT */}
      <Header label='BLOGS' />
      <GridCard />

      {/* Influencer marketing */}
      <Header label='INFLUENCER MARKETING' />
      <BlogCard label="/blog2png.png" />
    </div>
  );
}

export default Home;

