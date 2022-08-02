import {useState } from "react";
import { CardBigProps } from "./CardBig.props";
import { P } from "../P/P";
import { initialState } from "../../reducers/Filters.slice";
import { Genres } from "../../reducers/Reducers.Props";
import Link from "next/link";

import styles from './CardBig.module.css';

export const CardBig = ({ prev, next }:CardBigProps): JSX.Element => {

	const { allFilters } = initialState


	const [state] = useState<string>('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR086R6LjOkHDl2snX7OpK_NhKkBUi02NUnAQ&usqp=CAU');

	const renderFilters = (arr: Genres[]) => {
		return arr.map((item: Genres, i: number) => {
			return (
				<Link href={`/genre/${item.propGenre}`} key={i}>
					<a>
						<div  className={styles.wrapper} style={{backgroundImage: `URL(${state})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'revert' , backgroundSize: 'cover'}}>
							<P className={styles.title} size='fz18-100'>{item.genre}</P>
							<div className={styles.gradient}></div>
						</div>
					</a>
				</Link>

			)
		})
	}

	const filter = renderFilters(allFilters);



	return (
		<div className={styles.wrapperCard}>
			{filter[prev]}
			{filter[next]}
		</div>
	)
};