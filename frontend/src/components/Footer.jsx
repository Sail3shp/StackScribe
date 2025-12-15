import { Link } from "react-router"

const Footer = () => {
  return (
    <footer  className=" bg-neutral-300">
        <hr></hr>
        <div className="flex p-6 space-x-12 text-neutral-500 max-w-4xl mx-auto text-center">
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