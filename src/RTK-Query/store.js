import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./Feature/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (prevMiddleware) => prevMiddleware().concat(apiSlice.middleware),
});
