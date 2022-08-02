export interface Country {
	country: string;
}

export interface Genre {
	genre: string;
}

export interface CategoryOneFilm {
	kinopoiskId: number;
	imdbId: string | null;
	nameRu: string | null;
	nameEn?: any;
	nameOriginal: string | null;
	countries: Country[];
	genres: Genre[];
	ratingKinopoisk: number;
	ratingImdb: number | null;
	year: number;
	type: string;
	posterUrl: string;
	posterUrlPreview: string;
}

export interface CategoryProps {
	total: number;
	totalPages: number;
	items: CategoryOneFilm[];
}
