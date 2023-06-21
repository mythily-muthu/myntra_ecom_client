const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    user: null
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.user = null; // res user obj 
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.error = null;
        },

    }
})
export const { loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;