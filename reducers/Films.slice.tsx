import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StatePropsFilms } from "./Reducers.Props";
import { filmsData } from "../pages";

export const initialState: StatePropsFilms = {
	menuPopular: [],
	menuAwait: [],
	menuPremier: [],
	menuCategory: [],
	renderCategory: [],
	filmsLoadingStatus: 'idle',
	term: ''
}

export const fetchMainPageFilms = createAsyncThunk(
	'films/fetchTop250Films',
	async (arg:filmsData ) => {
		return await arg
	}
)

const cartSlice = createSlice( {
	name: 'films',
	initialState,
	reducers: {
		cartAddProducts: (state, action) => {
			state.menuAwait = action.payload
		},
		filmsAddPopular: (state, action) => {
			state.menuPopular = action.payload
		},
		filmAddCategory: (state, action) => {
			state.menuCategory = action.payload
			state.renderCategory = action.payload?.slice(0, 6)
		},
		filmTermCategory: (state, action) => {
			state.renderCategory = state.menuCategory.filter(item => item.nameRu ? item.nameRu.indexOf(action.payload) > -1 : '')
		},
		filmChangeCategory: (state, action:PayloadAction<[number, number]>) => {
			state.renderCategory = state.menuCategory?.slice(action.payload[0], action.payload[1])
		},
	},
	extraReducers: ( builder ) => {
		builder
			.addCase( fetchMainPageFilms.pending, state => {
				state.filmsLoadingStatus = 'loading'
			} )
			.addCase( fetchMainPageFilms.fulfilled, ( state, action ) => {
				state.menuPopular = action.payload.popularFilms
				state.menuAwait = action.payload.awaitFilms
				action.payload.premierFilms ? state.menuPremier = action.payload.premierFilms : null
				state.filmsLoadingStatus = 'idle'
			} )
			.addCase( fetchMainPageFilms.rejected, state => {
				state.filmsLoadingStatus = 'error'
			} )
			.addDefaultCase( () => {
			} )
	}
} )

const { actions, reducer } = cartSlice;

export default reducer;

export const {
	cartAddProducts,
	filmAddCategory,
	filmTermCategory,
	filmChangeCategory,
	filmsAddPopular
} = actions;