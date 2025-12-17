import { useState } from "react"
import { Link } from "react-router"
import {Menu} from 'lucide-react'
const Navbar = () => {
    const [isActive,setActive] = useState(false)
    console.log(isActive)
  return (
    <div className="w-full bg-neutral-200 ">
    <div className="flex justify-between  max-w-7xl p-6 mx-auto items-center  rounded-lg">
        <div className="font-bold text-3xl tracking-tight"><Link to={'/'}>StackScribe</Link></div>
        <div className="md:flex hidden text-sm md:text-lg tracking-wide text-center p-1 gap-4">
            <Link >Write</Link>
            <Link to={'/blogs'}>Blogs</Link>
            <Link to={'/signup'}>Sign in</Link>
            <Link to={'/login'}>Log in</Link>
        </div>
        <button className="md:hidden cursor-pointer" onClick={() => {setActive(!isActive)}}> <Menu />  </button>
    </div>
    <hr></hr>
    </div>
  )
}

export default Navbar