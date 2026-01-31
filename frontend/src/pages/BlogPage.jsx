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
  }, [dispatch])

  const { allBlogs, total, page, pages } = blog
  console.log(allBlogs)
  console.log(blog)


  useEffect(() => {
    if (!search) return
    const getData = setTimeout(() => {
      dispatch(getBlogs(search))
      console.log('2sec delay')
    }, 2000)
    return () => clearTimeout(getData)
  }, [search])
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="max-w-7xl mb-6 p-2 mx-auto mt-5 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1  gap-4">
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