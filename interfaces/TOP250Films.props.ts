export interface Top250OneFilm {
	filmId: number;
	nameRu: string;
	nameEn: string;
	year: string;
	filmLength: string;
	countries: Country[];
	genres: Genre[];
	rating: string;
	ratingVoteCount: number;
	posterUrl: string;
	posterUrlPreview: string;
	ratingChange?: any;
}

export interface Country {
	country: string;
}

export interface Genre {
	genre: string;
}

export interface Top250Films {
	films: Top250OneFilm[];
	pagesCount: number;
}

