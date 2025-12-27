import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../utils/axios";

const initialState ={
    blog: null,
    loading: false,
    error: null
}

export const createBlog = createAsyncThunk('/blog',async(data,{rejectWithValue}) => {
    try {
        console.log('its here',data)
        const res = await api.post('/blog',data)
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
        return rejectWithValue(error.response?.data || { message: 'blog creation failed' })
    }
})

export const getBlogs = createAsyncThunk('/getblogs',async(_,{rejectWithValue}) => {
    try {
        const res = await api.get('/blog')
        return res.data.allBlogs
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response?.data)
        
    }
})

export const blogSlice = createSlice({
    name:'blog',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(createBlog.pending,(state) => {
            state.loading = true
        })
        .addCase(createBlog.fulfilled,(state,action) => {
            state.blog = action.payload
            state.loading = false
        })
        .addCase(createBlog.rejected,(state,action) => {
            state.error = action.payload
            state.loading = false
        })
        .addCase(getBlogs.pending,(state) => {
            state.loading = true
        })
        .addCase(getBlogs.fulfilled,(state,action) => {
            state.blog = action.payload 
            state.loading = false
        })
        .addCase(getBlogs.rejected,(state,action) => {
            state.blog = null
            state.loading = false
            state.error = action.payload
        })
    }
})

export default blogSlice.reducer