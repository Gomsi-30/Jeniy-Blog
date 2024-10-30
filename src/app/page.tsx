import Banner from "./_components/banner/banner"
import GridCard from "./_components/grid-cards/grid-cards"
import Banner2 from "./_components/banner2/banner2"
import Header from './_components/global/header'
import BlogCard from './_components/card/blog-card'
import NewCard from './_components/new-card/newCard'
import { celebrity } from "./_components/articles/celebrity"
import { travel } from "./_components/articles/travel"
import { socialmedia } from "./_components/articles/social-media"
import { hollywood } from "./_components/articles/hollywood"

const Home = () => {
  return (
    <div className='flex flex-col gap-12 h-auto'>
      <Banner />

      <Header label='Interiors' />
      <BlogCard data={celebrity} section='celebrity' />

      <Header label='Gift & Cards' />
      <NewCard data={travel} section='travel'/>

      <Banner2 check='a' section='travel' />

      <Header label='Home Decor' />
      <GridCard data={socialmedia} section='socialmedia' />

      <Header label='Festive & Party Decor' />
      <BlogCard data={hollywood} section='hollywood' />
    </div>
  );
}

export default Home;

