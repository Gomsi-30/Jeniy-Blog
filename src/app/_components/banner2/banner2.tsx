

type BannerProps = {
  check: 'a' | 'b' | 'c';
  headingText?: string;
  profileImage?: string;
  profileName?: string;
  profileDate?: string;
  articleImage?:string;
};

const Banner = ({
  check,
  headingText= "Sidebar has been collecting the best design links of the day since October 2012. It's maintained by",
  profileImage,
  profileName,
  profileDate,
  articleImage
}: BannerProps) => {
  return (
    <>
      {/* When check is 'a' */}
      {check === 'a' && (
        <div className="relative bg-[url('/banner2.png')] bg-cover bg-center h-[350px] md:h-[600px] w-full">
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center p-4 lg:p-8">
            <h1 className="text-white font-bold text-center sm:text-2xl lg:text-4xl max-w-screen-lg">
              {headingText}
            </h1>
          </div>
        </div>
      )}

      {/* When check is 'b' */}
      {check === 'b' && (
        <div className="flex flex-col items-center gap-5 lg:p-8">
          {/* Heading */}
          <div className="relative bg-[url('/banner2.png')] bg-cover bg-center h-[350px] md:h-[400px] w-full">
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
          <h1 className="p-2 px-12 font-semibold text-center sm:text-2xl lg:text-3xl max-w-screen-lg">
            {headingText}
          </h1>
        </div>
      )}

      {/* When check is 'c' */}
      {check === 'c' && (
        <div className="flex flex-col items-center gap-4 p-4 lg:p-8">
          {/* Heading */}
          <h1 className="text-2xl text-center px-10 font-bold sm:text-1xl lg:text-3xl max-w-screen-lg">
            {headingText}
          </h1>

          {/* Circle Image with Name and Date */}
          <div className="flex items-center ">
            {/* Circle Image */}
            {profileImage && (
              <div className="w-7 h-7 rounded-full bg-gray-400">
                <img
                  src={articleImage}
                  alt={profileName || 'Profile'}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            )}

            {/* Name and Date */}
            <div className='flex flex-row items-center'>
              {profileName && <div className="px-3 font-semibold border-r-[2px]">{profileName}</div>}
              {profileDate && <div className="px-3 text-sm text-gray-500 border-r-[2px]">{profileDate}</div>}
            </div>
          </div>

          {/* Banner */}
          <div className="relative bg-[url('/banner2.png')] bg-cover bg-center h-[350px] w-[700px] md:h-[450px] md:w-[1010px] w-full">
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
