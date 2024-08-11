// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/",
  }),
  endpoints: (builder) => ({
    fetchBlogs: builder.query({
      query: ({ search = " ", category = " ", location = " " }) =>
        `/blog/getallbook?search=${search}&category=${category}&location=${location}`,
    }),
    fetchSingleBlogs: builder.query({
      query: (id) => `/blog/getbookbyid/${id}`,
    }),
  }),
});
console.log(blogApi);

export const { useFetchBlogsQuery, useFetchSingleBlogsQuery } = blogApi;
