"use client"
import React from 'react'
import {FacebookShareButton, InstapaperShareButton, LinkedinShareButton, TwitterShareButton} from 'react-share'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
type BrandsProps = {
  check? : boolean
}
const Brands = ({check}:BrandsProps) => {
  return (
    <div className='flex gap-2 items-center text-xl'>
      <TwitterShareButton url="https://www.marriott.com/default.mi">
            <FaSquareXTwitter  className={`text-gray-500 transition-all ease-in-out ${check ? 'hover:text-black' : 'hover:text-white'} `}/>
      </TwitterShareButton>
      <LinkedinShareButton url="https://www.marriott.com/default.mi">
            <FaLinkedin className={`text-gray-500 transition-all ease-in-out ${check ? 'hover:text-black' : 'hover:text-white'} `}/>
      </LinkedinShareButton>
      <InstapaperShareButton url="https://www.marriott.com/default.mi">
            <FaSquareInstagram className={`text-gray-500 transition-all ease-in-out ${check ? 'hover:text-black' : 'hover:text-white'} `}/>
      </InstapaperShareButton>
      <FacebookShareButton url="https://www.marriott.com/default.mi">
            <FaSquareFacebook className={`text-gray-500 transition-all ease-in-out ${check ? 'hover:text-black' : 'hover:text-white'} `}/>
      </FacebookShareButton>
    </div>
  )
}

export default Brands;
