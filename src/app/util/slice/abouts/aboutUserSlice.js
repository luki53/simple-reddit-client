import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEndpoint } from "../api/Endpoints";

export const loadAboutUser = createAsyncThunk('users/loadUser', async (arg) =>{
    const jsonResponse = await getEndpoint.info.AboutUser(arg)
    return jsonResponse.data;
})

const initialState = {
        abouts: {},
        isLoading: false,
        hasError: false
}

const aboutUserSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [loadAboutUser.pending]: (state, payload) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadAboutUser.fulfilled]: (state, payload) => {
            state.isLoading = false;
            state.hasError = false;
            state.abouts = payload;
        },
        [loadAboutUser.rejected]: (state, payload) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const selectAboutUser = (state) => state.about.users.abouts;
export default aboutUserSlice.reducer;