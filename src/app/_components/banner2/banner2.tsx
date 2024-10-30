import CreationDate from '../articles/creationDate';
import Image from 'next/image';
import { travel } from '../articles/travel';
import Link from 'next/link';

type BannerProps = {
  check: 'a' | 'b' | 'c';
  section?:string;
  headingText?: string;
  profileImage?: string;
  profileName?: string;
  articleImage?: string;
  profileReadTime?: string;
  articleNumber?: number; // Use number if articleNumber is a number
};

const Banner = ({
  section,
  check,
  headingText,
  profileImage,
  profileName,
  articleImage,
  profileReadTime,
  articleNumber
}: BannerProps) => {

  const data = Math.floor(Math.random() * travel.length);
  const bannerImg = travel[data].imgUrl;
  const bannerTitle = travel[data].title;

  return (
    <>
      {/* When check is 'a' */}
{check === 'a' && (
  <Link href={`/festiveandpartydecor-${bannerTitle?.replace(/[^A-Za-z0-9]+/g, "-")}`} className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
    {/* Background Image */}
    <Image 
      src={`/${section}/${bannerImg}`}
      alt="Banner Image" 
      layout="fill" 
      objectFit="cover" 
      className="absolute inset-0 z-0" 
    />
    {/* Linear Gradient Background */}
    <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/60 to-black"></div>
    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center items-center p-4 lg:p-8">
      <h1 className="text-white font-bold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-screen-lg">
        {bannerTitle}
      </h1>
    </div>
  </Link>
)}

      {/* When check is 'b' */}
      {check === 'b' && (
        <div className="flex flex-col items-center gap-5 p-4 sm:p-6 md:p-8 lg:p-10">
          {/* Banner with Gradient */}
          <Link href={`${section}-${headingText?.replace(/[^A-Za-z0-9]+/g, "-")}`}>
          <div className="relative h-[200px] sm:h-[300px] md:h-[400px] w-full">
           
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.6)_100%)] bg-cover bg-center"></div>
            {articleImage && (
              <Image src={`/${section}/${articleImage}`} alt="Banner Image" layout="fill" objectFit="cover" />
            )}
          </div>
          <h1 className="p-2 px-4 font-semibold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-screen-lg">
            {headingText}
          </h1>
          </Link>
        </div>
      )}

      {/* When check is 'c' */}
      {check === 'c' && (
        <div className="flex flex-col items-center gap-4 p-4 lg:p-8">
          {/* Heading */}
          <div className="px-[20px]">
            <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-semibold max-w-screen-md px-9">
              {headingText}
            </h1>
          </div>

          {/* Circle Image with Name and Date */}
          <div className="flex items-center gap-2 mt-4">
            {profileName && (
              <div className="w-9 h-9 relative">
                <Image 
                  src={`/authors/${profileName}.jpg`}
                  alt="profile-image"
                  fill
                  className="object-cover object-center rounded-full"
                />
              </div>
            )}
            {/* Name and Date */}
            <div className="flex flex-row items-center gap-2">
              {profileName && <div className="font-regular text-gray-500">{profileName}   |   </div>} 
              {profileReadTime && <div className="text-sm text-gray-500">{profileReadTime}   |   </div>}
              {articleNumber !== undefined && <div className="text-sm text-gray-500"><CreationDate articleNumber={articleNumber} /></div>}
            </div>
          </div>

          {/* Banner with Gradient */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[400px] w-full max-w-screen-lg">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.6)_100%)] bg-cover bg-center"></div>
            {articleImage && (
              <Image src={`/${section}/${articleImage}`} alt="Banner Image" layout="fill" objectFit="cover" />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
