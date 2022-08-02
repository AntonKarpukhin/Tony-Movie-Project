import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";


export interface CardMiddleProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	prev: number;
	next: number;
}