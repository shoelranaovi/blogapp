import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import { blogApi } from "../redux/features/blog/blogApi";
import { authApi } from "../redux/features/auth/userApi";
import { commentgApi } from "../redux/features/comment/commentApi";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [commentgApi.reducerPath]: commentgApi.reducer,
    user: userSlice,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      blogApi.middleware,
      authApi.middleware,
      commentgApi.middleware
    ),
});
