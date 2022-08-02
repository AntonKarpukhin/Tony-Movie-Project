import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";


export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
	size: 'watchHi' | 'watchMin' | 'watchlist' | 'drop' | 'plusHi'| 'plusMin' | 'plusExtraMin';
	appearance: 'light' | 'grey';
	children?: ReactNode;
}