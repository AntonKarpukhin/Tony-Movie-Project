import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";


export interface CardLittleProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	prev: number;
	next: number;
}