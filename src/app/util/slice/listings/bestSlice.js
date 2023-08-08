import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEndpoint } from "../api/Endpoints";

export const loadBestPosts = createAsyncThunk('best/loadBest', async () =>{
    const jsonResponse = getEndpoint.feedPosts.best();
    return jsonResponse.data;
})

const initialState = {
        listing: {},
        isLoading: false,
        hasError: false
}

const bestSlice = createSlice({
    name: 'best',
    initialState,
    reducers: {},
    extraReducers: {
        [loadBestPosts.pending]: (state, payload) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadBestPosts.fulfilled]: (state, payload) => {
            state.isLoading = false;
            state.hasError = false;
            state.listing = payload;
        },
        [loadBestPosts.rejected]: (state, payload) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const selectBestListing = (state) => state.listings.best.listing;
export default bestSlice.reducer;