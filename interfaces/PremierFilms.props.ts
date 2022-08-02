export interface Country {
	country: string;
}

export interface Genre {
	genre: string;
}

export interface PremierOneFilms {
	kinopoiskId: number;
	nameRu: string;
	nameEn: string;
	year: number;
	posterUrl: string;
	posterUrlPreview: string;
	countries: Country[];
	genres: Genre[];
	duration: number | null;
	premiereRu: string;
}

export interface PremierFilms {
	total: number;
	items: PremierOneFilms[];
}





