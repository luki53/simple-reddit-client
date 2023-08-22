import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEndpoint } from '../../api/Endpoints';


export const loadSearch = createAsyncThunk('search/loadSearch', async (arg) =>{
    console.log(arg);
    const jsonResponse = await getEndpoint.search.find(arg);
    return jsonResponse;

});

const multiFetch = async (args) => {
    let respondsData = [];
    for (let arg of args) {
        console.log(arg.data.subreddit);
        respondsData.push(getEndpoint.info.aboutSubReddit(arg.data.subreddit))
    }
    return Promise.all(respondsData);
}

export const loadAboutSearchresults = createAsyncThunk('search/loadSubredditAbout', async (arg) =>{
    if (typeof arg.children) {
        const jsonResponse = await multiFetch(arg);
        return jsonResponse
    } else {
        const jsonResponse = await getEndpoint.info.aboutSubReddit(arg)
        return jsonResponse.data;
    }
})

const initialState = {
        results: {},
        aboutResults: {},
        isLoading: false,
        hasError: false,
        searchString: ''
}

const searchResultsSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeSearchString(state, action) {
            state.searchString = action.payload;
        }
    },
    extraReducers: {
        [loadSearch.pending]: (state, payload) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadSearch.fulfilled]: (state, payload) => {
            state.isLoading = false;
            state.hasError = false;
            state.results = payload;
        },
        [loadSearch.rejected]: (state, payload) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [loadAboutSearchresults.pending]: (state, payload) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadAboutSearchresults.fulfilled]: (state, payload) => {
            state.isLoading = false;
            state.hasError = false;
            state.aboutResults = payload;
        },
        [loadAboutSearchresults.rejected]: (state, payload) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});
export const { changeSearchString } = searchResultsSlice.actions;
export const selectSearchResults = (state) => state.searchSlice;
export default searchResultsSlice.reducer;