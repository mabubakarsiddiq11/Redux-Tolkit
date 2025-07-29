import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Features/CounterSlice";
import todoSlice from './Features/TodoSlice'
import fetchSlice from './Features/fetchSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig,todoSlice );

export const store = configureStore({
    reducer: {
        counter : counterSlice,
        todo : persistedReducer,
        todos : fetchSlice
    }
})

export const persistor = persistStore(store);