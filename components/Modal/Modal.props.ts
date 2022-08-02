import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	active: boolean;
	setActive: (arg: boolean) => void;
	videoUrl: string;
}