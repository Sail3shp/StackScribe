import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        default:'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    authorId:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    likes:[
        {
            type:mongoose.Types.ObjectId,
            ref:'User'
        }
    ]
},{timestamps:true})

const Blog = mongoose.model('Blog',blogSchema)

export default Blog