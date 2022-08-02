export interface Country {
	country: string;
}

export interface Genre {
	genre: string;
}

export interface AwaitOneFilm {
	filmId: number;
	nameRu: string;
	nameEn: string | null;
	year: string;
	filmLength: string | null;
	countries: Country[];
	genres: Genre[];
	rating: string;
	ratingVoteCount: number;
	posterUrl: string;
	posterUrlPreview: string;
	ratingChange?: any;
}

export interface AwaitFilms {
	pagesCount: number;
	films: AwaitOneFilm[];
}













