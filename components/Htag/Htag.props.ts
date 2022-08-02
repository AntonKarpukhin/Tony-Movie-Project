import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	htag: 'h1' | 'h2' | 'h3'
}