import { dataFilms } from "./DataFilms";


export const getPathsFilms = () => {
	const paths = dataFilms.map(item => '/film/' + item.kinopoiskId)
	return paths
}