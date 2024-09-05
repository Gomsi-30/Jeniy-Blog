import Logo from '../navbar/logo'

type BannerProps = {
  label?:string;
}
const Banner = ({label}:BannerProps) => {
    return (
      <div className="relative bg-[url('/banner1.png')] bg-cover bg-center h-[260px] md:h-[300px] md:h-[360px] w-full min-w-full">
        <div className="bg-black opacity-30 h-full w-full"></div>
        <div className="absolute bottom-[20px] left-[30px] md:bottom-[80px] md:left-[100px] h-auto w-auto p-3 bg-white text-black font-bold md:text-2xl sm:text-1xl text-sm lg:text-3xl">
          {!label && <Logo label="/InCb.png" />}
          {label && label}
        </div>
      </div>
    );
  };
  
  export default Banner;
  