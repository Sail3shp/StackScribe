import { SearchIcon } from "lucide-react"
import BlogCard from "../components/BlogCard"
import {useSelector,useDispatch} from 'react-redux'
import { getBlogs } from "../app/blogSlice"
import { useEffect } from "react"

const BlogPage = () => {
  const dispatch = useDispatch()
  const {blog,loading} = useSelector((state) => state.blog)
  useEffect(() => {
    dispatch(getBlogs())
    console.log(loading)
  },[dispatch])
  
  return (
    
    <>
    <div className="max-w-md mx-auto space-y-4 mt-10">
        <h1 className="text-4xl font-medium text-center">Exciting Content</h1>
        <p className="text-lg text-center text-neutral-400">Ideas,inspirations,and the latest content in the world of design and technology</p>
        <div className="relative">
            <div className="absolute ps-3 flex items-center inset-y-0"><SearchIcon /></div>
        <input 
        className="p-2 bg-neutral-300 ps-10 rounded-md w-full"
        placeholder="search "
        />
        </div>
    </div>

    <div className="max-w-7xl mb-6 mx-auto mt-5 grid grid-cols-3 gap-4">
      {  blog.map((post) => <BlogCard key={post._id} blog={post} />)}
    </div>
    </>
  )
}

export default BlogPage