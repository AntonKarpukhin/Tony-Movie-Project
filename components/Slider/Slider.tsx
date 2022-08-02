import { useEffect, useState } from "react";
import { SliderProps } from "./Slider.props";
import { Button } from "../Button/Button";
import { Htag } from "../Htag/Htag";
import ArrowIcon from '../../public/BigArrow.svg';
import { useSelector } from "react-redux";
import { ReducerProps } from "../../reducers/Reducers.Props";
import { PremierOneFilms } from "../../interfaces/PremierFilms.props";
import Link from "next/link";

import styles from './Slider.module.css';
import cn from 'classnames';

export const Slider = ({ className}:SliderProps): JSX.Element => {

	const initialState = useSelector<ReducerProps, PremierOneFilms>(state => state.films.menuPremier[0])
	const filmsSlide = useSelector<ReducerProps, PremierOneFilms[]>(state => state.films.menuPremier)

	const [counter, setCounter] = useState<number>(0)
	const [slide, setSlide] = useState<PremierOneFilms>();

	useEffect(() => {
		setSlide(filmsSlide[counter])
	}, [])

	useEffect(() => {
		setSlide(filmsSlide[counter])
	}, [counter])

	return (
		<div className={cn(styles.wrapper, className)} style={{backgroundImage: slide ? `URL(${slide.posterUrl})` : initialState ? `URL(${initialState.posterUrl})` : ' ' , backgroundRepeat: 'no-repeat', backgroundPosition: 'revert' , backgroundSize: 'cover'}}>
			<Htag className={styles.htag} htag='h1'>{slide ? `${slide.nameRu.length > 20 ? slide.nameRu.slice(0, 20) + '...' : slide.nameRu}` : initialState ? `${initialState.nameRu.length > 20 ? initialState.nameRu.slice(0, 20) + '...' : initialState.nameRu}` : ' '}</Htag>
			<div className={styles.wrapperArrow}>
				{counter === 0 ? <div></div> : <div onClick={() => setCounter( counter => counter - 1 )} className={styles.wrapperArrowLeft}>
					<ArrowIcon  className={styles.arrowLeft}/>
				</div>}
				{counter === filmsSlide.length ? <div></div> : <div onClick={() => setCounter( counter => counter + 1 )} className={styles.wrapperArrowRight}>
					<ArrowIcon  className={styles.arrowRight}/>
				</div>}
			</div>
			<div className={styles.wrapperButton}>
				<Link href={`/film/${slide?.kinopoiskId}`}>
					<a>
						<Button size='watchHi' appearance='light'>Watch Now</Button>
					</a>
				</Link>
			</div>
			<div className={styles.gradient}></div>
		</div>
	)
};