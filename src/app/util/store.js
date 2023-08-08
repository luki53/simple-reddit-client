import { configureStore } from "@reduxjs/toolkit";
import aboutSubredditSlice from "./slice/abouts/aboutSubredditSlice";
import aboutUserSlice from "./slice/abouts/aboutUserSlice";
import bestSlice from "./slice/listings/bestSlice";
import commentsSlice from "./slice/commentsSlice";
import settingsSlice from "./slice/settingsSlice";
import voteSlice from "./slice/voteSlice";

const reducer = {
abouts: {
    aboutSubredditSlice,
    aboutUserSlice
},
listings : {
    bestSlice
},
commentsSlice,
settingsSlice,
voteSlice
};

 const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;