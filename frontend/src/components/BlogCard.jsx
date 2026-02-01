import { Edit2Icon, Heart } from "lucide-react"
import { Link } from 'react-router'
import { formattedDate } from "../utils/formateDate"

const BlogCard = (props) => {
  const date = formattedDate(props.blog.updatedAt)
  return (/*
    <div className=" max-w-md bg-neutral-200 flex flex-col p-3 space-y-3 rounded-xl shadow-lg h-105">
    <Link to={`/blog/${props.blog._id}`} >
        <img src={props.blog.imageUrl} className="w-full p-1 rounded-lg "/>
        <h2 className="text-xl font-medium">{props.blog.title}</h2>
        <div className="prose"
         dangerouslySetInnerHTML={{
          __html: (props.blog.content.substring(0,30) + '...')
        }}></div>
        <p className="text-neutral-500 text-end">Read more...</p>
        </Link>
        {/**we can't use nested links better to separate it }
        <div className="flex  justify-between items-center">
            <div className="flex ">
                <img src="/landingpage.jpg" className="border border-blue-400 size-10 rounded-full"/>
                <div className="flex flex-col ml-2">
                <h4 className="text-sm font-medium">{props.blog.authorId.name}</h4>
                <p className="text-xs">{date}</p>
                </div>
            </div>
            <div className="flex gap-4">
            </div>
        </div>
    </div>
    */
    <div className="max-w-md  bg-card-light flex flex-col  space-y-3 hover:-translate-y-2 duration-300 group rounded-xl hover:shadow-2xl">
      <Link to={`/blog/${props.blog._id}`} className="flex flex-col space-y-2">
        <img
          src={props.blog.imageUrl}
          className="w-full h-40 object-cover  rounded-lg"
        />

        <div className="p-2">
          <h2 className="text-xl font-medium line-clamp-2 group-hover:text-sky-600">
            {props.blog.title}
          </h2>

          <div
            className="prose text-sm line-clamp-3"
            dangerouslySetInnerHTML={{ __html: props.blog.content }}
          />
        </div>


      </Link>

      {/* footer pinned to bottom */}
      <div className="flex p-2 justify-between items-center mt-auto">
        <div className="flex">
          <img
            src="/landingpage.jpg"
            className="border border-blue-400 size-10 rounded-full"
          />
          <div className="flex flex-col ml-2">
            <h4 className="text-sm font-medium">
              {props.blog.authorId.name}
            </h4>
            <p className="text-xs">{date}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default BlogCard