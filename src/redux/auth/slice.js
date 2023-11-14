import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from "./operations";



const initialState = {
    user: {
        name: '',
        email: ''
    },
    token: '',
    isLoggedIn: false,
    isRefreshing: false
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(logoutThunk.fulfilled, (state, { payload }) => {
                return (state = initialState)
            })
            .addCase(refreshThunk.pending, (state, { payload }) => {
                state.isRefreshing = true
            })
            .addCase(refreshThunk.fulfilled, (state, { payload }) => {
                state.user.name = payload.name
                state.user.email = payload.email
                state.isLoggedIn = true
                state.isRefreshing = false
            })
            .addMatcher(isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled), (state, { payload }) => {
                state.user.name = payload.user.name
                state.user.email = payload.user.email
                state.token = payload.token
                state.isLoggedIn = true
                state.isRefreshing = false
            })
    }
})

export const authReducer = authSlice.reducer