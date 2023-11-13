import { loginThunk, registerThunk } from "./operations";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    user: {
        name: '',
        email: ''
    },
    token: '',
    isLoggedIn: false,
}


const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder.addMatcher(registerThunk.fulfilled, loginThunk.fulfilled, (state, { payload }) => {
            state.user.name = payload.user.name
            state.user.email = payload.user.email
            state.token = payload.token
            state.isLoggedIn = true
        })
    }
})

export const authReducer = slice.reducer