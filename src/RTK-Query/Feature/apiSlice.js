import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

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



const apiSlice = createApi({
  baseQuery : fetchBaseQuery({baseUrl : "https://dummyjson.com/"}),
  // reducerPath: "api",
  endpoints: (builder) => ({
    getAllTodo: builder.query({
      query: () => {
        return '/todos'
      },
      transformResponse : (data) => {
        return data?.todos || {}
      }
    }),
    // getTodo: builder.query({
    //   query: (id) => {
    //     return `/todos${id}`
    //   },
      
    // }),
   
  }),
});

export default apiSlice;
export const { useGetAllTodoQuery, useGetTodoQuery } = apiSlice;