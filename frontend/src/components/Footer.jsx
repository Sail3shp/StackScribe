import { Link } from "react-router"

const Footer = () => {
  return (
    <footer  className="w-full f bg-light border border-t border-slate-200">
        <div className="flex p-6  md:text-lg text-neutral-800 max-w-7xl mx-auto justify-between">
           <p className="text-sm">2026 Stackscribe.All rights reserved</p> 
           <div className="flex gap-6">
            <Link>Privacy Policy</Link>
            <Link>Terms of Service</Link>
            <Link>Contact</Link>
           </div>
        </div>
    </footer>
  )
}

export default Footer