import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import {  PopularOneFilm } from "../../interfaces/PopularFilms.props";


export interface CardMainProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	mainView?: boolean;
	category?: boolean;
}