import { configureStore } from "@reduxjs/toolkit";
import films from '../reducers/Films.slice';
import filters from "../reducers/Filters.slice";


const store = configureStore({
	reducer: { filters, films},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production'
});

export default store;

export type AppDispatch = typeof store.dispatch;
