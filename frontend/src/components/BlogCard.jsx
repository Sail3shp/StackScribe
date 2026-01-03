import { Edit2Icon, Heart} from "lucide-react"
import {Link} from 'react-router'

const BlogCard = (props) => {
  console.log(props)
  const formattedDate = new Date(props.blog.updatedAt).toLocaleDateString("en-us",{
    year:"numeric",
    month:"long",
    day:"numeric",
  })
  return (
    <div className="max-w-md bg-neutral-200 flex flex-col p-3 space-y-3 rounded-xl shadow-lg">
    <Link to={`/blog/${props.blog._id}`} >
        <img src={props.blog.imageUrl} className="w-full p-1 rounded-lg "/>
        <h2 className="text-xl font-medium">{props.blog.title}</h2>
        <div className="prose"
         dangerouslySetInnerHTML={{
          __html: (props.blog.content)
        }}></div>
        </Link>
        {/**we can't use nested links better to separate it */}
        <div className="flex justify-between items-center">
            <div className="flex ">
                <img src="/landingpage.jpg" className="border border-blue-400 size-10 rounded-full"/>
                <div className="flex flex-col ml-2">
                <h4 className="text-sm font-medium">{props.blog.authorId.name}</h4>
                <p className="text-xs">{formattedDate}</p>
                </div>
            </div>
            <div className="flex gap-4">
            <Link to={`/write/${props.blog._id}`}><Edit2Icon /></Link>
            <Heart />
            </div>
        </div>
    </div>
  )
}

export default BlogCard