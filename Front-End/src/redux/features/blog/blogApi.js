// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    fetchBlogs: builder.query({
      query: ({ search = " ", category = " ", location = " " }) =>
        `/blog/getallbook?search=${search}&category=${category}&location=${location}`,
    }),
    createpost: builder.mutation({
      query: (data) => ({
        url: "/blog/create-post",
        method: "post",
        body: data,
      }),
    }),
    fetchSingleBlogs: builder.query({
      query: (id) => `/blog/getbookbyid/${id}`,
    }),
    fetchRelatedBlogs: builder.query({
      query: (id) => `/blog/relatedpost/${id}`,
    }),
    fatchAllBlog: builder.query({
      query: () => `/blog/getallbook`,
    }),
  }),
});

export const {
  useFetchBlogsQuery,
  useCreatepostMutation,
  useFetchSingleBlogsQuery,
  useFetchRelatedBlogsQuery,
  useFatchAllBlogQuery,
} = blogApi;
