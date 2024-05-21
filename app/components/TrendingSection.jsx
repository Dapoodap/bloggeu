import Image from 'next/image'
import React from 'react'
import board from '@/public/assets/board.png';


const TrendingSection = () => {
  return (
    <div className=''>
    <div className="flex items-end justify-between px-5 sm:px-12 title">
      <div className='flex flex-col gap-3'>
          <h1 className='text-4xl font-semibold'>Trending</h1>
          <p className='text-sm font-semibold'>Trening articles for that maybe you like</p>
      </div>
      <button className='px-4 py-2 font-medium border border-black rounded-lg'>View All</button>
    </div>
    <div className="flex flex-wrap items-center justify-center w-full gap-5 px-5 mt-5 wrapper">
      <div className="card max-w-[400px] mb-5 gap-3 flex flex-col">
          <Image src={board} className='w-full max-h-[300px] mb-5'/>
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
  )
}

export default TrendingSection
