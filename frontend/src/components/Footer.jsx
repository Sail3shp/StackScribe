import { Link } from "react-router"

const Footer = () => {
  return (
    <footer  className="w-full absolute bottom-0 bg-neutral-300">
        <hr></hr>
        <div className="flex p-6 text-sm md:text-lg text-neutral-500 max-w-4xl mx-auto justify-between">
            <Link>Help</Link>
            <Link>Status</Link>
            <Link>About</Link>
            <Link>Carrers</Link>
            <Link>Press</Link>
            <Link>Privacy</Link>
            <Link>Rules</Link>
            <Link>Terms</Link>
        </div>
    </footer>
  )
}

export default Footer