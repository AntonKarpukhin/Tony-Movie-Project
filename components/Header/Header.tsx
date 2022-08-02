import { HeaderProps } from "./Header.props";
import Link from "next/link";

import styles from './Header.module.css';
import cn from 'classnames';


export const Header = ({  }:HeaderProps): JSX.Element => {
	return (
		<nav className={styles.wrapper}>
			<div className={cn(styles.item, styles.hed)}>TONY MOVIES</div>
			<Link href='/'>
				<a ><div className={styles.item}>Главная</div></a>
			</Link>
			<Link href='/genre/thriller'>
				<a ><div className={styles.item}>Фильмы</div></a>
			</Link>
		</nav>
	)
};