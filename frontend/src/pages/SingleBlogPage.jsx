import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getBlogById } from "../app/blogSlice"
import { useEffect } from "react"
import { Edit, Edit2Icon, Heart, ThumbsDown, ThumbsUp, Trash } from "lucide-react"
import { formattedDate } from "../utils/formateDate"
import { likeBlog } from "../app/blogSlice"
const SingleBlogPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { blog, loading } = useSelector((state) => state.blog)
    const { user } = useSelector((state) => state.user)
    const date = formattedDate(blog.updatedAt)
    useEffect(() => {
        dispatch(getBlogById(id))
    }, [id])
    console.log(blog?.likes?.includes(user?._id))
    return (
        <div className="max-w-3xl border rounded-md mx-auto my-2 md:p-2  py-4 space-y-5 ">
            <h1 className="text-5xl font-semibold text-center ">{blog.title}</h1>
            <div className="flex gap-3 items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src="/landingpage.jpg" className="rounded-full size-8 ring-1" />
                    <div className="flex flex-col text-sm">
                        <p className="italic tracking-wide font-semibold text-lg">{blog.authorId?.name}</p>
                        <p>{date}</p>
                    </div>
                </div>
                <button><Edit/></button>
            </div>
            <img src={blog.imageUrl} className="w-full max-h-80 rounded-lg " />
            <div className="prose p-4"
                dangerouslySetInnerHTML={{
                    __html: (blog.content)
                }}></div>
            <div className="hide text-center space-x-5 flex justify-between">
                <button className="bg-red-600 text-white rounded-full p-2 cursor-pointer text-lg"><Trash /></button>
                <button
                    className=" rounded-full  cursor-pointer flex p-2 text-lg gap-1"
                    onClick={() => dispatch(likeBlog(blog._id))}>
                    {blog?.likes?.includes(user?._id) ? <ThumbsDown /> : <ThumbsUp className="text-neutral-500" />} {blog?.likes?.length === 0 ? '' : blog?.likes?.length}
                </button>
            </div>
        </div>
    )
}

export default SingleBlogPage