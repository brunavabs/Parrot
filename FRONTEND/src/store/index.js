// import { configureStore } from "@reduxjs/toolkit"
import { createStore, applyMiddleware } from 'redux'
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import usersSlice from "./users"

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, usersSlice);

const store = createStore(persistedReducer, applyMiddleware())

const persistor = persistStore(store)

export { store, persistor}

// const store = configureStore({
//     reducer: {
//         // usersSlice,
//         persistedReducer

//     },
// })