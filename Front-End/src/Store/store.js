import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import { blogApi } from "../redux/features/blog/blogApi";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    user: userSlice,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware),
});
