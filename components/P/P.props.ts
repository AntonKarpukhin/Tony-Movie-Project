import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
	size?: 'fz24' | 'fz18-100' | 'fz18-22' | 'fz16' | 'fz15'| 'fz14';
	children: ReactNode;
}