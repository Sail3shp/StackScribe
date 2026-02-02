import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router"
import { Menu } from 'lucide-react'
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../app/userSlice"
const Navbar = () => {
  const [isActive, setActive] = useState(false)
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login', { replace: true })
  }
  return (
    <div className="top-0  w-full bg-light sticky z-10 border-b border-slate-200/80">
      <div className="flex justify-between  max-w-7xl p-6 mx-auto items-center  rounded-lg">
        <div className="font-bold text-2xl tracking-tight text-slate-900"><Link to={'/'} className="text-2xl">StackScribe</Link></div>
        <div className="md:flex hidden  md:text-lg tracking-wide text-center items-center p-1 space-x-5 gap-4">
          <NavLink to={'/write'}
            className={({ isActive }) =>
              `text-sm font-medium hover:text-primary ${isActive ? 'text-sky-600' : 'text-slate-900'
              }`
            }>Write</NavLink>
          <NavLink to={'/blogs'}
            className={({ isActive }) =>
              `text-sm font-medium hover:text-primary ${isActive ? 'text-sky-600' : 'text-slate-900'
              }`
            }>Blogs</NavLink>
          {user ?
            <button onClick={handleLogout} className="text-red-500 hover:underline">Log out</button>
            : (
              <>
               <NavLink to={'/signup'}
            className={({ isActive }) =>
              `text-sm font-medium hover:text-primary ${isActive ? 'text-sky-600' : 'text-slate-900'
              }`
            }>Sign up</NavLink> 
                <NavLink to={'/login'} 
                className={({isActive})=>
                `text-sm font-medium  hover:opacity-90 rounded-xl px-5 py-2.5 ${isActive?'text-slate-900 bg-sky-200':'text-white bg-slate-900'}
                `}
                >Log in</NavLink>
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
    </div>
  )
}

export default Navbar