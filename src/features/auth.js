import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isAuthenticated: false,
    sessionId: "",
}

export const tmdbAuth = createSlice({
    name: "tmdbAuth",
    initialState,
    reducers: {
        selectSetUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.sessionId = localStorage.getItem("session_id");

            localStorage.setItem("account_id", action.payload.id);

            console.log(action.payload);
        }
    }
});

export const {selectSetUser} = tmdbAuth.actions;

export default tmdbAuth.reducer;