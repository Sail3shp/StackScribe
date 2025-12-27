import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { Menu } from 'lucide-react'
import { useSelector,useDispatch } from "react-redux"
import { logout } from "../app/userSlice"
const Navbar = () => {
  const [isActive, setActive] = useState(false)
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async() => {
    await dispatch(logout())
    navigate('/login',{replace:true})
  }
  return (
    <div className="w-full bg-neutral-200 ">
      <div className="flex justify-between  max-w-7xl p-6 mx-auto items-center  rounded-lg">
        <div className="font-bold text-3xl tracking-tight"><Link to={'/'}>StackScribe</Link></div>
        <div className="md:flex hidden text-sm md:text-lg tracking-wide text-center  p-1 gap-4">
          <Link to={'/write'}>Write</Link>
          <Link to={'/blogs'}>Blogs</Link>
          {user ? 
          <button onClick={handleLogout} className="text-red-500 hover:underline">Log out</button>
          :(
            <>
            <Link to={'/signup'}>Sign up</Link>
            <Link to={'/login'}>Log in</Link>
            </>
          )
        
        }


        </div>
        <button className="md:hidden cursor-pointer" onClick={() => { setActive(!isActive) }}> <Menu />  </button>
      </div>
      {isActive && (<div className="absolute md:hidden  max-w-full  top-21   container text-sm  md:text-lg tracking-wide p-1 text-center bg-neutral-400  rounded-lg z-50 gap-4 flex flex-col ">
        <Link >Write</Link>
        <Link to={'/blogs'}>Blogs</Link>
        <Link to={'/signup'}>Sign in</Link>
        <Link to={'/login'}>Log in</Link>
      </div>)}
      <hr></hr>
    </div>
  )
}

export default Navbar