import { dataFilms } from "./DataFilms";


export const getOneFilm = (id: number) => {
	const oneFilm = dataFilms.filter(item => item.kinopoiskId === id)
	return oneFilm
}