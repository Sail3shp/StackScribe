import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../utils/axios";
import { toast } from "react-toastify";

const initialState = {
    user:null,
    loading:false,
    error:null
}
export const login = createAsyncThunk('/auth/login',
    async(credentials,{rejectWithValue}) => {
        try {
            const res = await api.post('/auth/login',credentials)
            toast.success('logged in ')
            console.log(res.data)
            return res.data.user
        } catch (error) {
            console.log(error.response?.data)
            toast.error(error.response.data.message || 'error logging in ')
            return rejectWithValue(error.response?.data || { message: 'Login failed' }
)
        }

    }
)


export const signin = createAsyncThunk('/auth/register',
    async(credentials,{rejectWithValue}) => {
        try {
            console.log(credentials)
            const res = await api.post('/auth/register',credentials)
            console.log(res.data)
            toast.success( 'User registered')
            return res.data.user
        } catch (error) {
            toast.error(error.response.data.message || 'error registering user  ')
            console.log(error)
            return rejectWithValue(error.response?.data || { message: 'registeration failed' }
)
        }
    }
)

export const logout = createAsyncThunk('/auth/logout',
    async(_,{rejectWithValue}) => {
        try {
            await api.post('/auth/logout')
            toast.success('logged out successfully')
            return null
        } catch (error) {
            console.log(error.response?.data)
            toast.error(error.response.data.message || 'error logging out ')
            return rejectWithValue(error.response?.data || { message: 'Login failed' }
)
        }
    }
)

export const deleteAccount = createAsyncThunk('/auth/delete',
    async(_,{rejectWithValue}) => {
        try {
            const res = await api.delete(`/auth/${id}`)
            console.log(res.data)
        } catch (error) {
            console.log(error.response?.data)
            return rejectWithValue(error.response?.data || {message:'Error in deleting your account'})
        }
    }
)

export const updateAccount = createAsyncThunk('/auth/update',
    async(credentials,{rejectWithValue}) => {
        try {
            const res = await api.update(`/auth/${id}`,credentials)
            console.log(res.data)
        } catch (error) {
            console.log(error.response?.data)
            return rejectWithValue(error.response?.data || {message:'Error in deleting your account'})
        }
    }
)

export const getMe = createAsyncThunk('/auth/me',async(_,{rejectWithValue})=>{
    try {
        const res = await api.get('/auth/me')
        return res.data.data
    } catch (error) {
        return rejectWithValue(error?.respose?.data || {message:'error in getting account'})
    }
})

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(login.pending,(state) => {
            state.loading = true
            state.error = null
        })
        .addCase(login.rejected,(state,action)=>{
            state.user = null,
            state.loading = false
            state.error = action.payload?.message || 'Login failed'
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.user = action.payload
            state.loading = false
        })
        .addCase(signin.pending,(state) => {
            state.loading = true
            state.error = null
        })
        .addCase(signin.rejected,(state,action)=>{
            state.user = null,
            state.loading = false
            state.error = action.payload?.message || 'Login failed'
        })
        .addCase(signin.fulfilled,(state,action)=>{
            state.user = action.payload
            state.loading = false
        })
        .addCase(updateAccount.fulfilled,(state,action)=>{
            state.user = action.payload
            state.loading = false
        })
        .addCase(updateAccount.pending,(state) => {
            state.loading = true
            state.error = null
        })
        .addCase(updateAccount.rejected,(state,action)=>{
            state.user = null,
            state.loading = false
            state.error = action.payload?.message || 'Login failed'
        })
        .addCase(logout.fulfilled,(state)=>{
            state.user = null 
            state.loading = false
        })
        .addCase(getMe.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.user = action.payload
            state.loading = false
        })
        .addCase(getMe.pending,(state) => {
            state.loading = true
            state.error = null
        })
        .addCase(getMe.rejected,(state,action)=>{
            state.user = null,
            state.loading = false
            state.error = action.payload?.message || 'Login failed'
        })
    } 
})

export default userSlice.reducer