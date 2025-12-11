import Blog from "../model/blog.model.js"
export const createBlog = async (req, res) => {
    try {
        const { title, content, imageUrl } = req.body
        if (!title || !content) {
            return res.status(400).json({ message: 'Please fill in all fields' })
        }
        const newBlog = await Blog.create({
            title,
            content,
            authorId: req.user.userId
        })

        res.status(201).json({ message: 'Your writings has been published', newBlog })
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
        console.log('error in create blog', error)
    }
}

export const updateBlog = async (req, res) => {
    try {
        let { title, content } = req.body
        title = title?.trim()
        content = content?.trim()
        if (!title || !content) {
            return res.status(400).json({ message: 'Blogs can\'t be empty' })
        }
        const blogDetails = await Blog.findById(req.params.blogId)
        if (blogDetails.authorId.toString() !== req.user.userId) {
            return res.status(401).json({ message: 'unauthorized' })
        }

        const updatedBlog = await Blog.findByIdAndUpdate(req.params.blogId, {
            title,
            content
        }, { new: true })
        res.status(201).json({ message: 'Blog updated successfully', updatedBlog })

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
        console.log('error in update blog', error)
    }
}

export const getBlogs = async (req, res) => {
    try {
        const allBlogs = await Blog.find()
        res.status(200).json({ message: 'blogs fetched successfully', allBlogs })
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
        console.log('error in getting blog', error)
    }
}

export const deleteBlog = async (req, res) => {
    try {
        const blogDetails = await Blog.findById(req.params.blogId)
        if (blogDetails.authorId.toString() !== req.user.userId) {
            return res.status(401).json({ message: 'unauthorized' })
        }
        await Blog.findByIdAndDelete(req.params.blogId)
        res.status(204).json({ message: 'Your blog has been removed' })

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
        console.log('error in deleting blog', error)
    }
}


export const likeBlog = async (req, res) => {
    try {
        console.log( req.user.userId)
        const likedBlog = await Blog.findByIdAndUpdate(
            req.params.blogId,
            { $addToSet: { likes: req.user.userId } },   // prevents duplicate likes
            { new: true }
        )
        res.status(200).json(likedBlog)
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
        console.log('error in liking blog', error)
    }
}

export const unLikeBlog = async (req, res) => {
    try {
        const unLiked = await Blog.findByIdAndUpdate(
            req.params.blogId,
            { $pull: { likes: req.user.userId } },
            { new: true }
        )
        res.status(200).json(unLiked)
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
        console.log('error in unliking blog', error)
    }
}