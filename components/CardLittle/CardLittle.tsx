import Image from "next/image";
import { CardLittleProps } from "./CardLittle.props";
import { P } from "../P/P";
import { Button } from "../Button/Button";
import { useSelector } from "react-redux";
import { ReducerProps } from "../../reducers/Reducers.Props";
import { PopularOneFilm } from "../../interfaces/PopularFilms.props";
import Link from "next/link";

import styles from './CardLittle.module.css';





export const CardLittle = ({ prev = 0, next = 1 }:CardLittleProps): JSX.Element => {

	const filmsSlide = useSelector<ReducerProps, PopularOneFilm[]>(state => state.films.menuPopular);

	const renderCard = (arr: PopularOneFilm[]) => {
		return arr?.map(item => {
			return item && (
				<div key={item.filmId} className={styles.wrapper}>
					<Image className={styles.img} loader={() => item.posterUrl} width={55} height={59} src={item.posterUrl} alt="alt" unoptimized={true}/>
					<div className={styles.wrapperP}>
						<P className={styles.title} size='fz16' >{item?.nameRu?.length > 15 ? `${item?.nameRu?.slice(0, 15)}...` : item.nameRu }</P>
						<P className={styles.subtitle} size='fz14'>Рейтинг: {item.rating}</P>
					</div>
					<Link href={`/film/${item.filmId}`}>
						<a className={styles.buttonWatch}><Button className={styles.buttonWatch} size='plusExtraMin' appearance='light'>Watch</Button></a>
					</Link>
				</div>
			)
		})
	}

	const card = renderCard(filmsSlide);

	return (
		<>
			{card?.[prev]}
			{card?.[next]}
		</>
	)
};