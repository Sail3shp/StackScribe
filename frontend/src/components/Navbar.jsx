import { Link } from "react-router"

const Navbar = () => {
  return (
    <div className="w-full bg-neutral-200 ">
    <div className="flex justify-between  max-w-7xl p-6 mx-auto items-center  rounded-lg">
        <div className="font-bold text-3xl tracking-tight">BlogMandu</div>
        <div className="flex text-lg tracking-wide text-center p-1 gap-4">
            <Link >Write</Link>
            <Link >Blogs</Link>
            <Link >Sign in</Link>
            <Link >Log in</Link>
        </div>
    </div>
    <hr></hr>
    </div>
  )
}

export default Navbar