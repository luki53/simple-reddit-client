import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEndpoint } from "../api/Endpoints";

export const loadAboutSubreddit = createAsyncThunk('subreddit/loadSubreddit', async (arg) =>{
    const jsonResponse = await getEndpoint.info.aboutSubReddit(arg)
    return jsonResponse.data;
})

const initialState = {
        abouts: {},
        isLoading: false,
        hasError: false
}

const aboutSubredditSlice = createSlice({
    name: 'subreddit',
    initialState,
    reducers: {},
    extraReducers: {
        [loadAboutSubreddit.pending]: (state, payload) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadAboutSubreddit.fulfilled]: (state, payload) => {
            state.isLoading = false;
            state.hasError = false;
            state.abouts = payload;
        },
        [loadAboutSubreddit.rejected]: (state, payload) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const selectAboutSubreddit = (state) => state.about.subreddit.abouts;
export default aboutSubredditSlice.reducer;