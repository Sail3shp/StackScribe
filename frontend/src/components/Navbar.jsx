import { useState } from "react"
import { Link } from "react-router"
import {Menu} from 'lucide-react'
const Navbar = () => {
    const [isActive,setActive] = useState(false)
    console.log(isActive)
  return (
    <div className="w-full bg-neutral-200 ">
    <div className="flex justify-between  max-w-7xl p-6 mx-auto items-center  rounded-lg">
        <div className="font-bold text-3xl tracking-tight">BlogMandu</div>
        <div className="md:flex hidden text-sm md:text-lg tracking-wide text-center p-1 gap-4">
            <Link >Write</Link>
            <Link >Blogs</Link>
            <Link >Sign in</Link>
            <Link >Log in</Link>
        </div>
        <button className="md:hidden cursor-pointer" onClick={() => {setActive(!isActive)}}> <Menu />  </button>
    </div>
    <hr></hr>
    </div>
  )
}

export default Navbar