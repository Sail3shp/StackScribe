import landingImg from '/landingpage.jpg'
import { Link } from 'react-router'
const HomePage = () => {
    return (
        <div className='flex max-w-7xl mx-auto'>
            <div className='flex flex-col gap-2 mt-16 p-6 max-w-1/2 '>
                <h1 className='font-bold text-6xl md:text-8xl text-shadow-lg'>Human <br />stories & ideas</h1>
                <p className='text-lg md:text-xl mt-5 '>A place to read,write and deepen your understanding</p>
                <Link to={'/blogs'} className='bg-blue-500 p-1 rounded-lg text-lg text-white text-center'>start reading</Link>
            </div>
            <div className='max-w-lg'>
                <img src={landingImg} className='size-full object-cover' />
            </div>
        </div>
    )
}

export default HomePage