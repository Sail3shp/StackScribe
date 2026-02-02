import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router"
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

    const fetchBlogById = () => {
        dispatch(getBlogById(id))
    }

    useEffect(() => {
        fetchBlogById()
    }, [id])
    const likeCount = blog?.likes?.length
    console.log(likeCount)

    const handleLike = () => {
        if (blog?.likes?.includes(user?._id)) {
            //unlike dispatch(likeBlog(blog._id))
        } else {
            dispatch(likeBlog(blog._id))
            fetchBlogById()
        }
    }


    console.log(blog?.likes?.includes(user?._id))
    return (
        <div className="max-w-3xl   mt-10 rounded-md mx-auto my-2 p-4  space-y-10 ">
            <h1 className="text-6xl font-bold tracking-tight text-primary-button font-heading text-center ">{blog.title}</h1>
            <div className="flex  items-center justify-between ">
                <div className="flex items-center gap-4">
                    <img src="/landingpage.jpg" className="rounded-full size-12 border p-0.5" />
                    <div className="flex flex-col  ">
                        <p className="font-semibold tracking-wide font-body text-lg">{blog.authorId?.name}</p>
                        <p className="text-xs">{date}</p>
                    </div>
                </div>
                <Link to={`/write/${blog._id}`}><Edit className="hover:-translate-y-1 duration-200  rounded-full" /></Link>
            </div>
            <img src={blog.imageUrl} className="w-full max-h-80 rounded-lg " />
            <div className="prose p-4 text-xl/8"
                dangerouslySetInnerHTML={{
                    __html: (blog.content)
                }}></div>
            <div className="hide  space-x-5 flex flex-col">
                <hr className="w-full mx-auto text-slate-200" />
                <div className="flex items-center">
                    <button
                        className="hover:scale-110 duration-200 rounded-full  cursor-pointer flex p-2 text-lg gap-1"
                        onClick={handleLike}>
                        {blog?.likes?.includes(user?._id) ? <Heart fill="red" className="text-neutral-800" /> : <Heart className="text-neutral-500" />}
                    </button>
                    <p>{likeCount > 0 && likeCount}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleBlogPage