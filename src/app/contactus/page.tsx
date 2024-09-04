import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Container from '../_components/container';

const ContactUs = () => {
  return (
    <div className="mt-[30px] flex  flex-col gap-[50px] h-[1000px]">
      {/* Breadcrumb */}
      <Container>
        <div className="flex flex-col gap-7 w-[550px] sm:w-full">
          <div className="flex flex-row gap-1 justify-center items-center">
            <Link href="/" className="p-1 font-bold text-sm">
              Home
            </Link>
            <FaArrowRight className='opacity-70' size={10} />
            <p className="p-1 text-sm opacity-50">Contact Us</p>
          </div>
        </div>
      </Container>

      {/* Heading and Description */}
      <Container>
        <div className="flex flex-col gap-2 justify-center items-center w-[550px] sm:w-full">
          <div className="p-2 text-center">
            <h1 className="text-2xl font-bold">We’d Love to Hear from You!</h1>
          </div>
          <div className="p-2 text-center max-w-lg">
            <p>
              Have questions, feedback, or need support? Get in touch with us through any of the following methods:
            </p>
          </div>
        </div>
      </Container>

      {/* Form and Contact Information */}
      <Container>
        <div className="flex flex-col sm:flex-row justify-between sm:w-full gap-[60px] sm:gap-[150px]">
          {/* Contact Information */}
          <div className="flex flex-col gap-4 w-[550px] sm:w-[800px]">
            {/* You can add contact information or social media links here */}
            <div>
             <h1>Full name</h1>
             <input type='text' className='w-full border-[2px] p-1' placeholder='Full name'></input>
            </div>
            <div>
             <h1>Email address</h1>
             <input type='email' className='w-full border-[2px] p-1' placeholder='someone@example.com'></input>
            </div>
            <div>
             <h1>Phone number</h1>
             <input type='phone' className='w-full border-[2px] p-1' placeholder='000-000'></input>
            </div>
            <div>
             <h1>Message</h1>
            <textarea rows="4" cols="50" className='w-full h-[100px] border-[2px]' placeholder='Leave us a message'></textarea>
            </div>
            <div className='flex justify-center items-center bg-black  p-1'>
            <button className='text-white'>Message</button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col gap-6 w-[600px] mt-[10px]">
             <div className='flex flex-col gap-1 font-bold'>
                <h1 className='text-1xl font-bold'>Email Us</h1>
                <p className='text-sm font-semibold opacity-70'>Email us if you have any query or something.</p>
                <Link href=''> <p className='text-sm font-semibold opacity-70'>info@example.com</p></Link>
              </div>

              <div className='flex flex-col gap-1'>
                <h1 className='text-1xl font-bold'>Office Address</h1>
                <p className='text-sm font-semibold opacity-70'>Email us if you have any query or something.</p>
              </div>

              <div className='flex flex-col gap-1'>
                <p className='text-sm font-semibold opacity-70'>InfluencerCollab</p>
                <p className='text-sm font-semibold opacity-70'>4567 Social Avenue</p>
                <p className='text-sm font-semibold opacity-70'>Suite 890</p>
                <p className='text-sm font-semibold opacity-70'>New York, NY 10010</p>
                <p className='text-sm font-semibold opacity-70'>United States</p>
              </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
