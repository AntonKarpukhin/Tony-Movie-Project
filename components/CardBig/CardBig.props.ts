import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";


export interface CardBigProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	prev: number;
	next: number;
}