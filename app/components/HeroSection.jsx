import Image from 'next/image'
import React from 'react'
import cover from '@/public/assets/cover.png';
import bangkok from '@/public/assets/bangkok.png';
import banner from '@/public/assets/banner.jpg';

const HeroSection = () => {
  return (
    <div className='py-20 '>
      <div className='sm:max-w-[780px] w-full flex flex-col gap-5 sm:px-16 px-1 sm:text-left text-center'>
        <p className='text-sm font-medium'>Blog</p>
        <h1 className='text-5xl font-extrabold'>Stay Informed and Inspired with Bloggeu News</h1>
        <p className='text-sm font-light'>Update and fresh article just for you</p>
      </div>
      <div className='flex flex-wrap items-start justify-center gap-10 px-5 mt-20 h-fit'>
        <div className=' bigCard  min-h-fit w-full gap-4 flex flex-col max-w-[640px]'>
            <Image src={cover} className='w-full'/>
           <div className='flex items-center gap-3'>
           <div className='category border bg-[#F4F4F4] w-fit text-black font-bold px-3 py-2'>
                Fitness
            </div>
            <h1 className='text-lg font-semibold'>5 min read</h1>
           </div>
           <div className='flex flex-col gap-1'>
           <h1 className='w-full text-4xl font-extrabold'>How to choose the right customer for your photo business?</h1>
           <p className='text-base font-normal'>Let's find how you can implement to choose right customer for your business especially in your photo business</p>
           </div>
            <h3 className='text-base font-medium'>Read more {">"}</h3>
        </div>
        <div className=' smallCard min-h-fit justify-center items-center w-full gap-4 flex flex-wrap max-w-[640px]'>
        <div className='flex flex-wrap items-center justify-center w-full gap-4 smallCard min-h-fit'>
            <Image src={bangkok} className='max-w-[250px] min-h-[250px]'/>
            <div className="flex flex-col w-full gap-2 sm:w-1/2">
            <div className='flex items-center gap-3'>
            <div className='category border bg-[#F4F4F4] w-fit text-black text-sm font-bold px-2 py-1'>
                    Fitness
                </div>
                <h1 className='text-sm font-semibold'>5 min read</h1>
            </div>
            <h1 className='w-full text-xl font-extrabold'>How to choose the right customer for your photo business?</h1>
            <p className='text-sm font-normal'>Let's find how you can implement to choose right customer for your business especially in your photo business</p>
            <h3 className='text-sm font-medium'>Read more {">"}</h3>

            </div>
        </div>
        </div>
        
        
      </div>
      <div className='w-full flex py-10 px-12 text-white flex-wrap sm:gap-0 gap-10 justify-between items-center min-h-[323px] mt-10' style={{ backgroundImage: `url(${banner.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
        <div>
          <h1 className='text-4xl font-bold'>Sign up for our newsletter</h1>
          <p className='mt-3 text-sm font-normal'>By subscibing you will get a lot update from us</p>
        </div>
        <div className='flex flex-col gap-5 p-0 w-fit'>
        <form className='flex flex-wrap items-center gap-5'>
          <input type="email" name="email" id="mail" className='w-full px-3 py-2 text-base font-medium rounded-lg text-gray-950 sm:w-auto '  />
          <button className='px-4 py-2 text-base text-black bg-white rounded-lg' type="submit">Subscribe</button>
        </form>
        <p className='w-3/4 text-xs font-light'>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
