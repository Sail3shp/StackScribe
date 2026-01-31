import { Link } from "react-router"

const Footer = () => {
  return (
    <footer  className="w-full f bg-neutral-300">
        <div className="flex p-6 text-sm md:text-lg text-neutral-800 max-w-4xl mx-auto justify-between">
            <Link>Help</Link>
            <Link>Status</Link>
            <Link>About</Link>
            <Link>Carrers</Link>
            <Link>Press</Link>
            <Link>Privacy</Link>
            <Link>Rules</Link>
            <Link>Terms</Link>
            <img src="/logo.png" className="size-10 rounded-full" />
        </div>
    </footer>
  )
}

export default Footer