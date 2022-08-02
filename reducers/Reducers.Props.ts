import { PopularOneFilm } from "../interfaces/PopularFilms.props";
import { AwaitOneFilm } from "../interfaces/AwaitFilms.props";
import { PremierOneFilms } from "../interfaces/PremierFilms.props";
import { CategoryOneFilm } from "../interfaces/Category.props";


export interface StatePropsFilms {
	menuPopular: PopularOneFilm[];
	menuAwait: AwaitOneFilm[];
	menuPremier: PremierOneFilms[]
	menuCategory: CategoryOneFilm[]
	renderCategory: CategoryOneFilm[];
	filmsLoadingStatus: string;
	term: string
}

export interface StatePropsFilters {
	allFilters: Genres[];

}

export interface ReducerProps {
	films: StatePropsFilms;
	filter: StatePropsFilters
}


export interface Genres {
	id: number;
	genre: string;
	propGenre: string;
}