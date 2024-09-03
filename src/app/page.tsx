import Banner from "./components/banner/banner"
import GridCard from "./components/grid-cards/grid-cards"
import Banner2 from "./components/banner2/banner2"
import Image from 'next/image'
import Header from './components/header'
import BlogCard from './components/card/blog-card'

const Home = () => {
  return ( 
    <div className='flex flex-col gap-12 h-auto'>
       <Banner />
       <Header label='INFLUENCER'/>
        <div className='flex flex-row justify-center items-center w-full xl:px-20
               md:px-[10px]
               sm:px-2
               mx-auto
               px-9'>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[40px]'> 
          <Card text='To scaffold the project with the Nest CLI, run the following commands. This will create a new project of the man who is great.' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTsHBlbqERI_rbT046jA4F4W7gjcdc3Q_6A&s' />
          <Card text='To scaffold the project with the Nest CLI, run the following commands. This will create a new project' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTsHBlbqERI_rbT046jA4F4W7gjcdc3Q_6A&s' />
          <Card text='To scaffold the project with the Nest CLI, run the following commands. This will create a new project' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTsHBlbqERI_rbT046jA4F4W7gjcdc3Q_6A&s' />
          <Card text='To scaffold the project with the Nest CLI, run the following commands. This will create a new project' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTsHBlbqERI_rbT046jA4F4W7gjcdc3Q_6A&s' />
        </div>
        </div>

        {/* header */}
        <Header label='SOCIAL MEDIA'/>

        {/* blog card */}
        <BlogCard label="/Rectangle 3.png"/>

        {/* banner 2 */}
        <Banner2 />

        {/* BLOG-COMPONENT */}
        <Header label='BLOGS'/>
        <GridCard />

        {/* Influencer marketing */}
        <Header label='INFLUENCER MARKETING'/>
        <BlogCard label="/blog2png.png"/>
    </div>
   );
}
 
export default Home;


// CARD COMPONENT
interface CardProps{
  text:string,
  image:string
}

const Card:React.FC<CardProps> = ({ text, image }) => {
  return (
   <div className='flex flex-col overflow-x-auto xl:w-[270px] w-[309px] h-[367px] px-2'
    >
      <div className='overflow-hidden'>
        <Image src={image} alt='logo' height={300} width={300} />
      </div>
      <div className='mt-4 text-sm px-1 font-bold'>{text}</div>
    </div>
  );
}
