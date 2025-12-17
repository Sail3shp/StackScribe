import { Heart} from "lucide-react"

const BlogCard = () => {
  return (
    <div className="max-w-md bg-neutral-200 flex flex-col p-3 space-y-3 rounded-xl shadow-lg">
        <img src="/landingpage.jpg" className="w-full p-1 rounded-lg "/>
        <h2 className="text-xl font-medium">Big black fox jumped over the wall</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
        <div className="flex justify-between items-center">
            <div className="flex ">
                <img src="/landingpage.jpg" className="border border-blue-400 size-10 rounded-full"/>
                <div className="flex flex-col ml-2">
                <h4 className="text-sm font-medium">Mohseni Karimi</h4>
                <p className="text-xs">June10,2025</p>
                </div>
            </div>
            <Heart />
        </div>
    </div>
  )
}

export default BlogCard