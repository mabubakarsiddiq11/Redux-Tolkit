import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

// With Axios
// const apiSlice = createApi({
//   // reducerPath: "api",
//   endpoints: (builder) => ({
//     getAllTodo: builder.query({
//       queryFn: async () => {
//         const res = await axios.get('https://dummyjson.com/todos')
//         const todos = await res.data.todos
//         console.log('Slice Todos', todos)
//         return {data : todos}

//       },
//     }),
//   }),
// });

// with FetchBaseQuery and convert Data
// const apiSlice = createApi({
//   baseQuery : fetchBaseQuery({baseUrl : "https://dummyjson.com/"}),
//   // reducerPath: "api",
//   endpoints: (builder) => ({
//     getAllTodo: builder.query({
//       query: () => {
//         return '/todos'
//       },
//       transformResponse : (data) => {
//         return data?.todos || {}
//       }
//     }),

//   }),
// });

// export default apiSlice;
// export const { useGetAllTodoQuery, } = apiSlice;

const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),

// do not need to refresh
  // tagTypes : ['posts'],

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts",

      // providesTags : ["posts"]
    }),
    newPost: builder.mutation({
      query: (post) => ({
        url: "posts",
        method: "POST",
        body: post,
        
      }),
      
      // invalidatesTags : ["posts"]
    }),
  }),
});
export default apiSlice;
export const { useGetPostsQuery, useNewPostMutation } = apiSlice;
