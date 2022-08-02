import { CardMiddleProps } from "./CardMiddle.props";
import { P } from "../P/P";
import { Button } from "../Button/Button";
import { useSelector } from "react-redux";
import { ReducerProps } from "../../reducers/Reducers.Props";
import { AwaitOneFilm } from "../../interfaces/AwaitFilms.props";
import Link from "next/link";

import styles from './CardMiddle.module.css';

export const CardMiddle = ({ prev = 0, next = 1 }:CardMiddleProps): JSX.Element => {

	const filmsSlide = useSelector<ReducerProps, AwaitOneFilm[]>(state => state.films.menuAwait)

	const renderCard = (arr: AwaitOneFilm[]) => {
		return arr?.map(item => {
			return item && (
				<div key={item.filmId} className={styles.wrapper} style={{backgroundImage: `URL(${item.posterUrl})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'revert' , backgroundSize: 'cover'}}>
					<P className={styles.title} size='fz14'>{item.nameRu}</P>
					<P className={styles.rating} size='fz14'>{item.year}</P>
					<P className={styles.subtitle} size='fz14'>{item.rating}</P>
					<Link href={`/film/${item.filmId}`} >
						<a className={styles.buttonWatch}><Button  size='plusExtraMin' appearance='light'>Watch</Button></a>
					</Link>
					<div className={styles.gradient}></div>
				</div>
			)
		})
	}

	const card = renderCard(filmsSlide);


	return (
		<div className={styles.wrapperSection}>
			{card?.[prev]}
			{card?.[next]}
		</div>
	)
};