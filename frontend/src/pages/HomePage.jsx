import React from 'react'
import landingImg from '../../public/landingpage.jpg'
const HomePage = () => {
  return (
    <div className='flex max-w-7xl  mx-auto'>
        <div className='flex flex-col gap-2 mt-16 p-6 max-w-4xl'>
            <h1 className='font-bold text-8xl text-shadow-lg'>Human stories & ideas</h1>
            <p className='text-xl mt-5 '>A place to read,write and deepen your understanding</p>
            <button className=' p-1 mt-5 rounded-xl text-lg bg-neutral-200 '>start reading</button>
        </div>
        <div className=''>
            <img src={landingImg} className='size-full object-cover' />
        </div>
    </div>
  )
}

export default HomePage