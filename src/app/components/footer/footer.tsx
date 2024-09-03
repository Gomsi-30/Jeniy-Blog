import Logo from '../navbar/logo'
import Brands from '../navbar/brands'
import Container from '../container'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-customGray h-[300px] w-full mt-[30px]'>
      <Container>
        <div className="mx-auto my-8">
          <footer className="pt-4">
            <div className="p-5">
              <div className='lg:flex flex-row justify-between'>
                <Logo label='/mainLogo.png' />
                <Brands color='white' />
              </div>
              <div className="grid grid-cols-3 lg:grid-cols-4 md:items-center gap-8 mt-[55px] w-full">
                <div>
                  <ul className="mb-4 text-sm">
                    <li>
                      <Link href="#!" className="text-white">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="#!" className="text-white">
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link href="#!" className="text-white">
                        Influencers
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="mb-4 text-sm">
                    <li>
                      <Link href="#!" className="text-white">
                        Social Media
                      </Link>
                    </li>
                    <li>
                      <Link href="#!" className="text-white">
                        Brands
                      </Link>
                    </li>
                    <li>
                      <Link href="#!" className="text-white">
                        Influencer Marketing
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="mb-4 text-sm">
                    <li>
                      <Link href="#!" className="text-white">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link href="#!" className="text-white">
                        Privacy
                      </Link>
                    </li>
                    <li>
                      <Link href="#!" className="text-white">
                        Terms
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="mb-4 flex flex-row gap-4 rounded">
                    <input 
                      className="bg-black text-white px-2 py-1 flex-grow" 
                      placeholder='Email address' 
                    />
                    <button className='bg-white p-1 text-black border-l-[2px] font-bold rounded'>
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center p-3 border-t border-white text-white">
              © 2020 Copyright  
              <Link href="https://mdbootstrap.com/" className="text-white">
               -InCb
              </Link>
            </div>
          </footer>
        </div>
      </Container>
    </div>
  )
}

export default Footer;
