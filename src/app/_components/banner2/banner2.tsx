type BannerProps = {
  check : boolean
}

const Banner = ({check}:BannerProps) => {
    return (
      <>
          <div className="relative bg-[url('/banner2.png')] bg-cover bg-center h-[350px] md:h-[600px] w-full">
                {/* Semi-transparent overlay */}
                <div className="absolute inset-0 bg-black opacity-40"></div>
          
                {/* Content */}
                {
                !check && 
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center p-4 lg:p-8">
                    <h1 className="text-white font-bold text-center sm:text-2xl lg:text-4xl max-w-screen-lg">
                      Sidebar has been collecting the best design links of the day since October 2012. It's maintained by
                    </h1>
                  </div>
                }
            
          </div>
          { check &&
               <div className="flex justify-center items-center p-4 lg:p-8">
               <h1 className=" hh text-center text-black sm:text-1xl lg:text-4xl max-w-screen-lg">
                Sidebar has been collecting the best design links of the day since October 2012. It's maintained by
              </h1>
              </div>
              }
    </>
    );
  };
  
  export default Banner;
  
  