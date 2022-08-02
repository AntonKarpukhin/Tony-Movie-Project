
import { CardMainProps } from "./CardMain.props";
import { P } from "../P/P";
import { Button } from "../Button/Button";
import {  useSelector } from "react-redux";
import { ReducerProps } from "../../reducers/Reducers.Props";
import { PopularOneFilm } from "../../interfaces/PopularFilms.props";
import { CategoryOneFilm } from "../../interfaces/Category.props";
import Link from "next/link";

import styles from './CardMain.module.css';

export const CardMain = ({ mainView, category }:CardMainProps): JSX.Element => {

	const filmsSlide = useSelector<ReducerProps, PopularOneFilm[]>(state => state.films.menuPopular);
	const filmsSlideCategory = useSelector<ReducerProps, CategoryOneFilm[]>(state => state.films.renderCategory)

	const renderCard = (card: PopularOneFilm[]) => {
		return card?.map(item => {
			return item && (
				<div  key={item.filmId} className={styles.wrapper} style={{backgroundImage: `URL(${item.posterUrl})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' , backgroundSize: 'cover'}}>
					<P className={styles.title} size='fz24'>{item.nameRu}</P>
					<P className={styles.titleLittle} size='fz18-100'>Год: {item.year}</P>
					<P className={styles.titleLittle2} size='fz18-100'>rating: {item.rating}</P>
					<Link href={`/film/${item.filmId}`}>
						<a className={styles.buttonMin}><Button  size='watchMin' appearance='light'>Watch</Button></a>
					</Link>
					<div className={styles.gradient}></div>
				</div>
			)
		})
	}

	const card = renderCard(filmsSlide?.slice(0, 3))

	const renderCardCategory = (card: CategoryOneFilm[]) => {
		return card?.map(item => {
			return (
				<div  key={item.kinopoiskId} className={styles.wrapper} style={{backgroundImage: `URL(${item.posterUrl})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' , backgroundSize: 'cover'}}>
					<P className={styles.title} size='fz24'>{item.nameRu}</P>
					<P className={styles.titleLittle} size='fz18-100'>Год: {item.year}</P>
					<P className={styles.titleLittle2} size='fz18-100'>rating: {item.ratingKinopoisk}</P>
					<Link href={`/film/${item.kinopoiskId}`}>
						<a className={styles.buttonMin}><Button  size='watchMin' appearance='light'>Watch</Button></a>
					</Link>
					<div className={styles.gradient}></div>
				</div>
			)
		})
	}

	const cardCategory = renderCardCategory(filmsSlideCategory)

	return (
		<>
			{mainView && category === false ? card : cardCategory}
		</>
	)
};