import { CirclePlay } from 'lucide-react'
import landingImg from '/landingpage.jpg'
import { Link } from 'react-router'
const HomePage = () => {
    return (
        <div className='flex flex-col max-w-7xl  mx-auto bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]'>
            <div className='grid grid-cols-1 px-4 gap-6 lg:grid-cols-2 md:gap-12 items-center w-full pt-10'>
                <div className='space-y-8'>
                    <h1 className='text-7xl lg:text-8xl tracking-tight text-slate-900 font-extrabold leading-20 font-heading'>
                        Human
                        <br />
                        <span className='bg-linear-to-r from-primary to to-blue-600 bg-clip-text text-transparent '>stories</span> &amp;<br />
                        ideas
                    </h1>
                    <p className='text-xl text-slate-600 max-w-md leading-relaxed tracking-wide'>
                        A place to read, write and deepen your understanding of the world through the eyes of others.
                    </p>
                    <div className='flex gap-8 items-center'>
                        <Link to={'/blogs'} 
                        className='bg-[#3b82f6] text-center font-semibold hover:bg-blue-600 py-2 md:py-4 px-8 text-lg text-white shadow-lg rounded-xl hover:-translate-y-1 duration-200 cursor-pointer'>
                        Start Reading</Link>
                        <button className='flex items-center gap-3 text-lg text-neutral-600 font-semibold'> <CirclePlay /> How it works</button>
                    </div>
                    <div className='border-t flex gap-12 border-slate-200 pt-12'>
                        <div >
                            <h1 className='text-2xl font-primary font-bold'>100k+</h1>
                            <p className='text-sm text-slate-500'>Active Writers</p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold'>2M+</h1>
                            <p className='text-sm text-slate-500'>Monthly Readers</p>
                        </div>
                    </div>
                </div>
                <img src='/astronaut.png' />
            </div>
            <div className='bg-white max-w-7xl mx-5  md:mx-auto mt-10 mb-10 p-12 rounded-2xl shadow-lg'>
                <div className='grid gap-6 md:gap-12 grid-cols-1 md:grid-cols-2'>
                    <div className='flex flex-col'>
                        <h1 className='font-heading font-bold tracking-wide text-slate-900 text-xl md:text-3xl'>Curated stories in your inbox</h1>
                        <p className=''>Join our newsletter to get the best of StackScribe delivered weekly to your email.</p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 py-3'>
                        <input className='bg-neutral-200  rounded-2xl ps-4 py-4 md:py-0 w-full'
                            placeholder='Enter your email' />
                        <button className='bg-slate-800 py-4 md:py-0 text-white text-lg px-8 rounded-2xl'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage