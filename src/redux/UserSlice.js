import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    error: null,
    isLoading: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        registerUserStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        registerUserSuccess(state, action) {
            state.isLoading = false;
            state.user = action.payload;
        },
        registerUserFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        getUserStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        getUserSuccess(state, action) {
            state.isLoading = false;
            state.user = action.payload;
        },
        getUserFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        loginUserStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        loginUserSuccess(state, action) {
            state.isLoading = false;
            state.user = action.payload;
        },
        loginUserFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
            logoutUser(state) {
            state.user = null;
            state.isLoggedIn = false;
            state.error = null;
        },
    },
});

export const { registerUserStart, registerUserSuccess, registerUserFailure, getUserStart, getUserSuccess, getUserFailure, loginUserStart,
    loginUserSuccess,
    loginUserFailure, logoutUser } = userSlice.actions;

export default userSlice.reducer;
