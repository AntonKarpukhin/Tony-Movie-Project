export interface VideItem {
	url: string;
	name: string;
	site: string;
}

export interface Video {
	id: number;
	video: {
		total: number;
		items: VideItem[];
	}
}

export interface Country {
	country: string;
}

export interface Genre {
	genre: string;
}

export interface OneFilm {
	kinopoiskId: number;
	imdbId: string | null;
	nameRu: string | null;
	nameEn?: any;
	nameOriginal?: any;
	posterUrl: string;
	posterUrlPreview: string;
	coverUrl?: any;
	logoUrl?: any;
	reviewsCount: number;
	ratingGoodReview?: any;
	ratingGoodReviewVoteCount: number;
	ratingKinopoisk: number | null;
	ratingKinopoiskVoteCount: number | null;
	ratingImdb?: any;
	ratingImdbVoteCount: number;
	ratingFilmCritics?: any;
	ratingFilmCriticsVoteCount: number;
	ratingAwait: number | null;
	ratingAwaitCount: number;
	ratingRfCritics?: any;
	ratingRfCriticsVoteCount: number;
	webUrl: string;
	year: number;
	filmLength: number | null;
	slogan?: any;
	description: string | null;
	shortDescription?: any;
	editorAnnotation?: any;
	isTicketsAvailable: boolean;
	productionStatus?: any;
	type: string;
	ratingMpaa?: any;
	ratingAgeLimits: string | null;
	countries: Country[];
	genres: Genre[];
	startYear?: any;
	endYear?: any;
	serial: boolean;
	shortFilm: boolean;
	completed: boolean;
	hasImax: boolean;
	has3D: boolean;
	lastSync: Date | string;
}



