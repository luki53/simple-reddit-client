import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../api/Endpoints";

export const postVote = createAsyncThunk('vote/updateVote', async ({id, direction},thunkAPI ) => {
    const response = await post.vote.postVote(direction, id);
    return response;
});

const initialState = {
    isPosting: false,
    hasError: false
}

const voteSlice = createSlice({
    name: 'vote',
    initialState,
    reducers: {},
    extraReducers: {
        [postVote.pending]: (state) => {
            state.isPosting = true;
            state.hasError = false;
        },
        [postVote.fulfilled]: (state) => {
            state.isPosting = false;
            state.hasError = false;
        },
        [postVote.rejected]: (state) => {
            state.isPosting = false;
            state.hasError = true;
        }
    }
});

export const selectVoteState = (state) => state.vote;
export default voteSlice.reducer;