import { ButtonProps } from "./Button.props";
import PlusIcon from './plus.svg'

import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({ size, children, className }:ButtonProps): JSX.Element => {
	switch ( size ) {
		case 'watchHi':
			return <button className={cn(className, styles.button, styles.watchHi)}>{children}</button>
		case 'watchMin':
			return <button className={cn(className, styles.button, styles.watchMin)}>{children}</button>
		case 'watchlist':
			return <button className={cn(className, styles.button, styles.watchlist)}> <PlusIcon/> <p>{children} </p></button>
		case 'drop':
			return <button className={cn(className, styles.button, styles.drop)}>{children}</button>
		case 'plusHi':
			return <button className={cn(className, styles.button, styles.plusHi)}><PlusIcon/>{children}</button>
		case 'plusMin':
			return <button className={cn(className, styles.button, styles.plusMin)}><PlusIcon/>{children}</button>
		case 'plusExtraMin':
			return <button className={cn(className, styles.button, styles.plusExtraMin)}>{children}</button>
		default:
			return <></>

	}
};