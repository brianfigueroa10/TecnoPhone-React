import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    errors: null,
    isLoading: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        currentUser(state, action) {
            state.isLoading = false;
            state.user = action.payload;
        },
            logoutUser(state) {
            state.user = null;
            state.isLoggedIn = false;
            state.errors = null;
        },
    },
});

export const {  currentUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
