"use client";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Container from '../../_components/container';
import { Toaster } from 'react-hot-toast';

// Define validation schema
const schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    // Simulate form submission and show a success message
    toast.success("Message sent successfully!");
    console.log(data);
  };

  return (
    <div className="mt-[35px] flex flex-col gap-12 px-4 py-8">
      {/* Breadcrumb */}
      <Container>
              <div className=" flex flex-col gap-7 max-w-[550px] sm:max-w-full px-4">
              <div className="flex flex-row gap-2 justify-center items-center">
                <Link href="/" className="font-bold text-sm text-blue-600 hover:underline">
                 Home
                </Link>
              <FaArrowRight color='gray' size={10} />
              <p className="text-sm opacity-50">ContactUs</p>
              </div>
             </div>
      </Container>

      {/* Heading and Description */}
      <Container>
        <div className="flex flex-col items-center text-center w-full max-w-screen-md mx-auto">
          <h1 className="text-3xl font-bold mb-4">We’d Love to Hear from You!</h1>
          <p className="text-lg text-gray-700">
            Have questions, feedback, or need support? Get in touch with us through any of the following methods:
          </p>
        </div>
      </Container>

      {/* Form and Contact Information */}
      <Container>
        <div className="flex flex-col md:flex-row gap-12 md:gap-40">
          {/* Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full max-w-screen-lg mx-auto">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold">Full Name</label>
              <input
                id="fullName"
                type='text'
                {...register('fullName')}
                className='w-full border border-gray-300 p-2 rounded-md'
                placeholder='Full name'
              />
              {errors.fullName && <p className='text-red-500 text-sm'>{errors.fullName.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold">Email Address</label>
              <input
                id="email"
                type='email'
                {...register('email')}
                className='w-full border border-gray-300 p-2 rounded-md'
                placeholder='someone@example.com'
              />
              {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold">Phone Number</label>
              <input
                id="phone"
                type='text'
                {...register('phone')}
                className='w-full border border-gray-300 p-2 rounded-md'
                placeholder='000-000'
              />
              {errors.phone && <p className='text-red-500 text-sm'>{errors.phone.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold">Message</label>
              <textarea
                rows="4"
                {...register('message')}
                className='w-full border border-gray-300 p-2 rounded-md'
                placeholder='Leave us a message'
              />
              {errors.message && <p className='text-red-500 text-sm'>{errors.message.message}</p>}
            </div>
            <button
              type='submit'
              className='bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500'>
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="flex flex-col gap-6 w-full max-w-screen-md mx-auto">
            <div>
              <h2 className='text-xl font-bold'>Email Us</h2>
              <p className='text-sm font-semibold text-gray-600'>Email us if you have any query or something.</p>
              <Link href='mailto:info@example.com'>
                <p className='text-sm font-semibold text-blue-600 hover:underline'>info@example.com</p>
              </Link>
            </div>

            <div>
              <h2 className='text-xl font-bold'>Office Address</h2>
              <p className='text-sm font-medium text-gray-500'>You can visit us at the following address:</p>
              <p className='text-sm font-medium text-gray-500'>InfluencerCollab</p>
              <p className='text-sm font-medium text-gray-500'>4567 Social Avenue</p>
              <p className='text-sm font-medium text-gray-500'>Suite 890</p>
              <p className='text-sm font-medium text-gray-500'>New York, NY 10010</p>
              <p className='text-sm font-medium text-gray-500'>United States</p>
            </div>
          </div>
        </div>
      </Container>
      <Toaster />
    </div>
  );
};

export default ContactUs;
