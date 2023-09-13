import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    errors: null,
    isLoading: false,
};

const usersSlice = createSlice({
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

export const { currentUser, logoutUser } = usersSlice.actions;

export default usersSlice.reducer;
