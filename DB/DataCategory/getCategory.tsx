import { CategoryProps } from "../../interfaces/Category.props";
import { thriller } from "./category/thriller";
import { melodrama } from "./category/melodrama";
import { horror } from "./category/horror";
import { comedy } from "./category/comedy";
import { fiction } from "./category/fiction";
import { adventure } from "./category/adventure";
import { action } from "./category/action";
import { anime } from "./category/anime";
import { children } from "./category/children";


export const getCategoryData= (genre: string): CategoryProps[] => {
	switch ( genre ) {
		case "thriller":
			return thriller
		case "horror":
			return horror
		case "comedy":
			return comedy
		case "melodrama":
			return  melodrama
		case "fiction":
			return  fiction
		case "adventure":
			return  adventure
		case "action":
			return  action
		case "anime":
			return  anime
		case "children":
			return  children
		default:
			return []
	}
}