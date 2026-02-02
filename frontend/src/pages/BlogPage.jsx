import { SearchIcon } from "lucide-react"
import BlogCard from "../components/BlogCard"
import { useSelector, useDispatch } from 'react-redux'
import { getBlogs } from "../app/blogSlice"
import { useEffect, useState } from "react"
import CardSkeleton from "../components/CardSkeleton"

const BlogPage = () => {
  const dispatch = useDispatch()
  const { blog,loading } = useSelector((state) => state.blog)
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (!allBlogs || allBlogs.length === 0) {
      dispatch(getBlogs())
    }
  }, [])

  const { allBlogs, total, page, pages } = blog
  console.log(allBlogs)
  console.log(blog)


  useEffect(() => {
    const getData = setTimeout(() => {
      dispatch(getBlogs(search))
      console.log('2sec delay')
    }, 1000)
    return () => clearTimeout(getData)
  }, [search])
  return (

    <>
      <div className="max-w-xl mx-auto space-y-6 mt-10 ">
        <h1 className="text-7xl  font-semibold tracking-tight text-center font-heading">Exciting Content</h1>
        <p className="text-lg text-center text-neutral-400">Ideas,inspirations,and the latest content in the world of design and technology</p>
        <div className="relative">
          <div className="absolute ps-3 flex items-center inset-y-0"><SearchIcon className="text-neutral-600"/></div>
          <input
            className="px-4 py-3 bg-border border-none ps-10 hover:shadow-lg duration-300 rounded-full w-full"
            placeholder="Search articles.... "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="max-w-7xl mb-6 p-2 mx-auto mt-5 grid grid-cols-2 md:grid-cols-3 sm:grid-cols-1  gap-8">
        {loading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))

        ) : (
          allBlogs?.map((post) => (
            <BlogCard key={post._id} blog={post} />
          ))
        )}
      </div>
    </>
  )
}

export default BlogPage