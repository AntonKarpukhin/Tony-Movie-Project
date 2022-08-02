import { AwaitOneFilm } from "../interfaces/AwaitFilms.props";
import { CategoryOneFilm } from "../interfaces/Category.props";

const ISSERVER = typeof window === "undefined";

let favoritesFilm: CategoryOneFilm[];


if (!ISSERVER) {
	const product = localStorage.getItem('addProduct');
	if (product) {
		favoritesFilm = JSON.parse(product)
	} else {
		favoritesFilm = []
	}
}

export {favoritesFilm}
