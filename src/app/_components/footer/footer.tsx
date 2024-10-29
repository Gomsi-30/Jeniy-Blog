"use client"
import { usePathname } from 'next/navigation';
import Logo from '../navbar/logo';
import Link from 'next/link';

import { useState } from 'react';
import { z } from 'zod';
import { toast } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import Brands from '../navbar/brands'

const emailSchema = z.string().email({ message: 'Invalid email address' });

const Footer = () => {
  const [email, setEmail] = useState('');
  const path = usePathname();
  const firstPath = path?.split('/')[1]?.toLowerCase(); 

  const handleSubscribe = (e:any) => {
    e.preventDefault();
    try {
      
      emailSchema.parse(email);
     
      toast.success('Subscribed successfully!');
      setEmail('');
    } catch (error:any) {
      toast.error(error.errors[0].message);
    }
  };

  return (
    <div className="bg-customGray w-full mt-[140px] lg:mt-[200px]">
      <div className="">
        <footer className="pt-10">
            <div className="container flex flex-row justify-center lg:justify-between items-center">
              <Logo label="/mainLogo.png" />
              
            </div>
          
            <div className="container grid grid-cols-3 lg:grid-cols-4 lg:gap-0 gap-6 mt-8 lg:mt-[55px] text-left text-center lg:text-left w-full">
              <div>
                <ul className="mb-4 text-sm md:text-md lg:text-lg space-y-2">
                  <li>
                    <Link href="/" className="text-white hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/aboutus" className="text-white hover:underline">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href="/interiors" className="text-white hover:underline">
                      Interiors
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="mb-4 text-sm md:text-md lg:text-lg space-y-2">
                  <li>
                    <Link href="/homedecor" className="text-white hover:underline">
                      Home Decor
                    </Link>
                  </li>
                  <li>
                    <Link href="/festiveandpartydecor" className="text-white hover:underline">
                      Festive & Party decor
                    </Link>
                  </li>
                  <li>
                    <Link href="/giftsandcards" className="text-white hover:underline">
                      Gifts & Cards
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="mb-4 text-sm md:text-md lg:text-lg space-y-2">
                  <li>
                    <Link href="/contactus" className="text-white hover:underline">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-white hover:underline">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-white hover:underline">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="/disclaimer" className="text-white hover:underline">
                      Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-center lg:col-span-1 col-span-3 ">
                <form onSubmit={handleSubscribe} className="flex items-center space-x-1">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 text-sm bg-black text-white  border border-white w-52"
                    placeholder="Email address"
                    type="email"
                  />
                  <button type="submit" className="p-2 text-sm bg-white text-black font-semibold  w-21">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          <div className="text-center p-3 border-t border-white text-white mt-8 lg:mt-[35px]">
            © 2024 InstantDIY. All rights reserved.
          </div>
        </footer>
      </div>
      <Toaster />
    </div>
  );
};

export default Footer;
