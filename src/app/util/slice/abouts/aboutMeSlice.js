import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEndpoint } from "../../api/Endpoints";

export const loadAboutMe = createAsyncThunk('aboutMe/loadUser', async (arg) =>{
    const jsonResponse = await getEndpoint.info.me();
    return jsonResponse;
});

export const loadMyPosts = createAsyncThunk('aboutMe/Posts', async (arg) =>{
    const jsonResponse = await getEndpoint.feedPosts.getPostsOf(arg);
    return jsonResponse;
})

const initialState = {
        data: {},
        posts: {},
        isLoading: false,
        hasError: false
}

const aboutMeSlice = createSlice({
    name: 'aboutMe',
    initialState,
    reducers: {},
    extraReducers: {
        [loadAboutMe.pending]: (state, payload) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadAboutMe.fulfilled]: (state, payload) => {
            state.isLoading = false;
            state.hasError = false;
            state.data = payload.payload;
        },
        [loadAboutMe.rejected]: (state, payload) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [loadMyPosts.pending]: (state, payload) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadMyPosts.fulfilled]: (state, payload) => {
            state.isLoading = false;
            state.hasError = false;
            state.posts = payload.payload;
        },
        [loadMyPosts.rejected]: (state, payload) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const selectAboutMe = (state) => state.aboutMeSlice.data;
export default aboutMeSlice.reducer;