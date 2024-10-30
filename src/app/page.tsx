import Banner from "./_components/banner/banner"
import GridCard from "./_components/grid-cards/grid-cards"
import Banner2 from "./_components/banner2/banner2"
import Header from './_components/global/header'
import BlogCard from './_components/card/blog-card'
import NewCard from './_components/new-card/newCard'
import { gifts } from "./_components/articles/gifts"
import { festive } from "./_components/articles/festive"
import { homedecor } from "./_components/articles/homedecor"
import { interiors } from "./_components/articles/interiors"

const Home = () => {
  return (
    <div className='flex flex-col gap-12 h-auto'>
      <Banner />

      <Header label='Interiors' />
      <BlogCard data={interiors} section='interiors' />

      <Header label='Gift & Cards' />
      <NewCard data={gifts} section='giftandcards'/>

      <Banner2 check='a' />

      <Header label='Home Decor' />
      <GridCard data={homedecor} section='homedecor' />

      <Header label='Festive & Party Decor' />
      <BlogCard data={festive} section='festiveandpartydecor' />
    </div>
  );
}

export default Home;

