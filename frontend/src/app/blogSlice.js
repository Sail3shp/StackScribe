import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../utils/axios";
import { toast } from "react-toastify";

const initialState = {
    blog: [],
    loading: false,
    error: null
}

export const createBlog = createAsyncThunk('/blog', async (data, { rejectWithValue }) => {
    try {
        console.log('its here', data)
        const res = await api.post('/blog', data)
        console.log(res.data)
        toast.success(res.data.message || 'blog created')
        return res.data
    } catch (error) {
        console.log(error)
        toast.error(error.response.data?.message || 'Error while creating blog')
        return rejectWithValue(error.response?.data || { message: 'blog creation failed' })
    }
})

export const getBlogs = createAsyncThunk('/getblogs', async (_, { rejectWithValue }) => {
    try {
        const res = await api.get('/blog')
        return res.data.allBlogs
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response?.data)

    }
})

export const getBlogById = createAsyncThunk('blog/getOneId', async (id, { rejectWithValue }) => {
    try {
        const res = await api.get(`/blog/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response?.data)
    }
})

export const deleteBlog = createAsyncThunk('blog/id', async (id, { rejectWithValue }) => {
    try {
        await api.delete(`/blog/${id}`)
    } catch (error) {
        console.log(error)
        toast.error(error.message)
        return rejectWithValue(error.response?.data)
    }
})

export const updateBlog = createAsyncThunk('blog/update', async (data, { rejectWithValue }) => {
    console.log(data)
    try {
        const updated = await api.patch(`/blog/${data.id}`, data.formData)
        toast.success('Blog updated')
    } catch (error) {
        console.log(error?.response?.data)
        toast.error(error.response.data.message || 'error while updating blog')
        return rejectWithValue(error.response?.data)
    }
})

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createBlog.pending, (state) => {
                state.loading = true
            })
            .addCase(createBlog.fulfilled, (state, action) => {
                state.blog = action.payload
                state.loading = false
            })
            .addCase(createBlog.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getBlogs.pending, (state) => {
                state.loading = true
            })
            .addCase(getBlogs.fulfilled, (state, action) => {
                state.blog = action.payload
                state.loading = false
            })
            .addCase(getBlogs.rejected, (state, action) => {
                state.blog = null
                state.loading = false
                state.error = action.payload
            })
            .addCase(deleteBlog.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteBlog.fulfilled, (state, action) => {
                state.blog = action.payload
                state.loading = false
            })
            .addCase(deleteBlog.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getBlogById.pending, (state) => {
                state.loading = true
            })
            .addCase(getBlogById.fulfilled, (state, action) => {
                state.blog = action.payload
                state.loading = false
            })
            .addCase(getBlogById.rejected, (state, action) => {
                state.blog = null
                state.loading = false
                state.error = action.payload
            })
    }
})

export default blogSlice.reducer