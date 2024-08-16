// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const commentgApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/comment/",
  }),
  endpoints: (builder) => ({
    fatchAllComment: builder.query({
      query: () => `/getAllComment`,
    }),
  }),
});

export const { useFatchAllCommentQuery } = commentgApi;
