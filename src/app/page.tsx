import Banner from "./components/banner/banner"
import Image from 'next/image'
import Header from './components/header'

const Home = () => {
  return ( 
    <div className='flex flex-col gap-7 h-[900px]'>
       <Banner />

        <div className='flex justify-center items-center p-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2'> 
          <Card text='To scaffold the project with the Nest CLI, run the following commands. This will create a new project of the man who is great.' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTsHBlbqERI_rbT046jA4F4W7gjcdc3Q_6A&s' />
          <Card text='To scaffold the project with the Nest CLI, run the following commands. This will create a new project' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTsHBlbqERI_rbT046jA4F4W7gjcdc3Q_6A&s' />
          <Card text='To scaffold the project with the Nest CLI, run the following commands. This will create a new project' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTsHBlbqERI_rbT046jA4F4W7gjcdc3Q_6A&s' />
          <Card text='To scaffold the project with the Nest CLI, run the following commands. This will create a new project' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTsHBlbqERI_rbT046jA4F4W7gjcdc3Q_6A&s' />
        </div>
        </div>
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
   <div className='flex flex-col gap-2 overflow-x-auto w-[280px] h-[300px] p-5'
    >
      <div className='overflow-hidden'>
        <Image src={image} alt='logo' height={300} width={300} />
      </div>
      <div className='mt-4 text-sm px-1 font-bold'>{text}</div>
    </div>
  );
}
