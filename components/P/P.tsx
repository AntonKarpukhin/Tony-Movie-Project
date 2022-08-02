import { PProps } from "./P.props";

import styles from './P.module.css';
import cn from 'classnames';

export const P = ({ size, children, className, ...props }:PProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.fz24]: size === 'fz24',
				[styles.fz18100]: size === 'fz18-100',
				[styles.fz1822]: size === 'fz18-22',
				[styles.fz16]: size === 'fz16',
				[styles.fz15]: size === 'fz15',
				[styles.fz14]: size === 'fz14'
			})}
			{...props}
		>
			{children}
		</p>
	);
};