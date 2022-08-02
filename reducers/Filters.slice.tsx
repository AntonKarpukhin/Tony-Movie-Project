import {  createSlice } from "@reduxjs/toolkit";
import { StatePropsFilters } from "./Reducers.Props";

export const initialState: StatePropsFilters = {
	allFilters: [ {id: 1, genre: "триллер", propGenre: "thriller"}, {id: 17, genre: "ужасы", propGenre: "horror"}, {id: 13, genre: "комедия", propGenre: "comedy"}, {id: 4, genre: "мелодрама", propGenre: "melodrama"}, {id: 6, genre: "фантастика", propGenre: "fiction"}, {id: 7, genre: "приключения", propGenre: "adventure"},  {id: 11, genre: "боевик", propGenre: "action"},  {id: 24, genre: "аниме", propGenre: "anime"},  {id: 33, genre: "детский", propGenre: "children"},]
}

const filtersSlice = createSlice( {
	name: 'filters',
	initialState,
	reducers: {
	},
} )

const { actions, reducer } = filtersSlice;

export default reducer;