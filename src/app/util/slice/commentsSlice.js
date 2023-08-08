import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEndpoint } from "../api/Endpoints";

export const loadComments = createAsyncThunk('comments/loadComments', async (articleId) =>{
    const jsonResponse = getEndpoint.comment.getComment(articleId);
    return jsonResponse.data;
})

const initialState = {
        list: {},
        isLoading: false,
        hasError: false
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: {
        [loadComments.pending]: (state, payload) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadComments.fulfilled]: (state, payload) => {
            state.isLoading = false;
            state.hasError = false;
            state.list = payload;
        },
        [loadComments.rejected]: (state, payload) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const selectComments = (state) => state.comments.list;
export default commentsSlice.reducer;