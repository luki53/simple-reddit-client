import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEndpoint } from "../../api/Endpoints";

export const loadAboutUser = createAsyncThunk('users/loadUser', async (arg) =>{
    const jsonResponse = await getEndpoint.info.AboutUser(arg)
    return jsonResponse.data;
})

const initialState = {
        data: {},
        isLoading: false,
        hasError: false,
        user: ''
}

const aboutUserSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        defineUserForLoading(state, action) {
            state.user = action.payload;
        }
    },
    extraReducers: {
        [loadAboutUser.pending]: (state, payload) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadAboutUser.fulfilled]: (state, payload) => {
            state.isLoading = false;
            state.hasError = false;
            state.data = payload;
        },
        [loadAboutUser.rejected]: (state, payload) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});
export const { setUser } = aboutUserSlice.actions;
export const selectAboutUser = (state) => state.aboutUserSlice.data;
export default aboutUserSlice.reducer;