import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEndpoint } from '../../api/Endpoints';

const multiFetch = async (args) => {
    let respondsData = []
    for (let arg of args.children) {
        console.log(arg.data.subreddit);
        respondsData.push(getEndpoint.info.aboutSubReddit(arg.data.subreddit))
    }
    return Promise.all(respondsData);
}

export const loadAboutSubreddit = createAsyncThunk('subreddit/loadSubreddit', async (arg) =>{
    console.log(arg);
    if (typeof arg.children) {
        console.log('inner call');
        const jsonResponse = await multiFetch(arg);
        return jsonResponse
    } else {
        console.log('outer call');
        const jsonResponse = await getEndpoint.info.aboutSubReddit(arg)
        return jsonResponse.data;
    }
})

const initialState = {
        abouts: [],
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