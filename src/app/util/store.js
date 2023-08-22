import { configureStore } from "@reduxjs/toolkit";
import aboutSubredditSlice from "./slice/abouts/aboutSubredditSlice";
import aboutUserSlice from "./slice/abouts/aboutUserSlice";
import bestSlice from "./slice/listings/bestSlice";
import commentsSlice from "./slice/commentsSlice";
import settingsSlice from "./slice/settingsSlice";
import voteSlice from "./slice/voteSlice";
import aboutMeSlice from "./slice/abouts/aboutMeSlice";
import searchSlice from "./slice/listings/searchSlice";

const reducer = {
aboutSubredditSlice,
aboutUserSlice,
bestSlice,
commentsSlice,
settingsSlice,
voteSlice,
aboutMeSlice,
searchSlice
};

 const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;