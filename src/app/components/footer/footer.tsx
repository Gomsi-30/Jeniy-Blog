import Logo from '../navbar/logo';
import Brands from '../navbar/brands';
import Container from '../container';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-customGray h-[300px] w-full mt-[30px]'>
      <div className="mx-auto my-8">
        <footer className="pt-10">
          <Container>
            <div className='lg:flex flex-row justify-between'>
              <Logo label='/mainLogo.png' />
              <Brands color='white' />
            </div>
          </Container>
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:items-center mt-[55px]">
              <div>
                <ul className="mb-4 text-md">
                  <li>
                    <Link href="#!" className="text-white hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" className="text-white hover:underline">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" className="text-white hover:underline">
                      Influencers
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="mb-4 text-md">
                  <li>
                    <Link href="#!" className="text-white hover:underline">
                      Social Media
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" className="text-white hover:underline">
                      Brands
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" className="text-white hover:underline">
                      Influencer Marketing
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="mb-4 text-md">
                  <li>
                    <Link href="#!" className="text-white hover:underline">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" className="text-white hover:underline">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="#!" className="text-white hover:underline">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row">
               
                  <input
                    className="p-1 bg-black text-white flex-grow rounded"
                    placeholder='Email address'
                    type="email"
                  />
                  <button className='p-1 bg-white text-sm text-black border-l-[2px] font-semibold rounded'>
                    Subscribe
                  </button>
               
              </div>
            </div>
          </Container>
          <div className="text-center p-3 border-t border-white text-white">
            © 2020 Copyright
            <Link href="https://mdbootstrap.com/" className="text-white hover:underline">
              -InCb
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
