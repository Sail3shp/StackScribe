import { Heart} from "lucide-react"
import {Link} from 'react-router'

const BlogCard = (props) => {
  const formattedDate = new Date(props.blog.updatedAt).toLocaleDateString("en-us",{
    year:"numeric",
    month:"long",
    day:"numeric",
  })
  return (
    <Link to={`/blog/${props.blog._id}`} className="max-w-md bg-neutral-200 flex flex-col p-3 space-y-3 rounded-xl shadow-lg">
        <img src={props.blog.imageUrl} className="w-full p-1 rounded-lg "/>
        <h2 className="text-xl font-medium">{props.blog.title}</h2>
        <p>{props.blog.content}</p>
        <div className="flex justify-between items-center">
            <div className="flex ">
                <img src="/landingpage.jpg" className="border border-blue-400 size-10 rounded-full"/>
                <div className="flex flex-col ml-2">
                <h4 className="text-sm font-medium">Mohseni Karimi</h4>
                <p className="text-xs">{formattedDate}</p>
                </div>
            </div>
            <Heart />
        </div>
    </Link>
  )
}

export default BlogCard