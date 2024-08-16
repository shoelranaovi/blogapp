// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/auth/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (userdata) => ({
        url: "/sign-in",
        method: "post",
        body: userdata,
      }),
    }),
    userRegister: builder.mutation({
      query: (userdata) => ({
        url: "/sign-up",
        method: "post",
        body: userdata,
      }),
    }),
    alluser: builder.query({
      query: () => `/users`,
    }),
  }),
});
console.log(authApi);

export const {
  useUserLoginMutation,
  useUserRegisterMutation,
  useAlluserQuery,
} = authApi;
