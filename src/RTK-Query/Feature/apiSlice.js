import { createApi } from "@reduxjs/toolkit/query/react";
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
  baseQuery : async (url) => {
    const res = await axios.get(url)
    const todos = await res.data.todos
    return {data : todos}

   
  },
  // reducerPath: "api",
  endpoints: (builder) => ({
    getAllTodo: builder.query({
      query: () => {
        return 'https://dummyjson.com/todos'
      }
    }),
  }),
});

export default apiSlice;
export const { useGetAllTodoQuery } = apiSlice;