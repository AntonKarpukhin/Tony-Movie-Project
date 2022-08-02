import { SidebarRightProps } from "./SidebarRight.props";
import { CardBig, CardLittle, CardMiddle, Htag, P } from "../../components";
import ArrowIcon from '../../public/SmalArrow.svg'
import ProfileIcon from './Profile.svg'
import { PopularOneFilm } from "../../interfaces/PopularFilms.props";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ReducerProps } from "../../reducers/Reducers.Props";
import { AwaitOneFilm } from "../../interfaces/AwaitFilms.props";

import styles from './SidebarRight.module.css';
import cn from "classnames";

export const SidebarRight = ({className, ...props}: SidebarRightProps): JSX.Element => {

	const filmsSlide = useSelector<ReducerProps, AwaitOneFilm[]>(state => state.films.menuAwait)
	const filmsSlidePopular = useSelector<ReducerProps, PopularOneFilm[]>(state => state.films.menuPopular);

	const [prevSmall, setPrevSmall] = useState(0);
	const [nextSmall, setNextSmall] = useState(1);

	const [prevMiddle, setPrevMiddle] = useState(0);
	const [nextMiddle, setNextMiddle] = useState(1);

	const [prevBig, setPrevBig] = useState(0);
	const [nextBig, setNextBig] = useState(1);

	const changeSlidePrev = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (e.currentTarget.name === 'prevMiddle') {
			if (prevMiddle === 0) {
				return
			} else {
				setPrevMiddle(prev => prev - 1)
				setNextMiddle(prev => prev - 1)
			}
		}
		if (e.currentTarget.name === 'prevBig') {
			if (prevBig === 0) {
				return
			} else {
				setPrevBig(prev => prev - 1)
				setNextBig(prev => prev - 1)
			}
		}
		if (e.currentTarget.name === 'prevSmall') {
			if (prevSmall === 0) {
				return
			} else {
				setPrevSmall(prev => prev - 1)
				setNextSmall(prev => prev - 1)
			}
		}
	}

	const changeSlideNext = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (e.currentTarget.name === 'nextMiddle') {
			if (nextMiddle === filmsSlide.length) {
				return
			}  else {
				setPrevMiddle(prev => prev + 1)
				setNextMiddle(prev => prev + 1)
			}
		}
		if (e.currentTarget.name === 'nextBig') {
			if (nextMiddle === filmsSlide.length) {
				return
			} if (nextBig > 8) {
				return;
			} else {
				setPrevBig(prev => prev + 1)
				setNextBig(prev => prev + 1)
			}
		}
		if (e.currentTarget.name === 'nextSmall') {
			if (nextSmall === filmsSlidePopular.length) {
				return
			}  else {
				setPrevSmall(prev => prev + 1)
				setNextSmall(prev => prev + 1)
			}
		}
	}

	return (
		<div className={styles.sidebarRight} {...props}>

			<div className={styles.authorize}>
				<div className={styles.name}>Samantha</div>
				<ArrowIcon className={styles.nameIcon}/>
				<ProfileIcon/>
			</div>

			<div className={styles.wrapperFavorite}>
				<Htag className={styles.title} htag='h3'>Популярное</Htag>
				<div className={styles.wrapperArrow}>
					<button className={styles.buttonDef} name='prevSmall' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => changeSlidePrev(e)} >
						<ArrowIcon className={cn(styles.arrow, styles.arrowLeft, {[styles.isActive]: prevSmall > 0})}/>
					</button>
					<button className={styles.buttonDef} name='nextSmall' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => changeSlideNext(e)} >
						<ArrowIcon  className={cn(styles.arrow, styles.arrowRight, {[styles.isActive]: nextSmall < filmsSlidePopular?.length})}/>
					</button>
				</div>
				<div className={styles.card1}>
					<CardLittle prev={prevSmall}  next={nextSmall}/>
				</div>
			</div>

			<div className={styles.wrapperFavorite}>
				<Htag className={styles.title} htag='h3'>Ожидаемое</Htag>
				<div className={styles.wrapperArrow}>
					<button className={styles.buttonDef} name='prevMiddle' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => changeSlidePrev(e)} >
						<ArrowIcon className={cn(styles.arrow, styles.arrowLeft, {[styles.isActive]: prevMiddle > 0})}/>
					</button>
					<button className={styles.buttonDef} name='nextMiddle' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => changeSlideNext(e)} >
						<ArrowIcon  className={cn(styles.arrow, styles.arrowRight, {[styles.isActive]: nextMiddle < filmsSlide?.length})}/>
					</button>
				</div>
				<div className={styles.card1}>
					<CardMiddle prev={prevMiddle} next={nextMiddle}/>
				</div>
			</div>

			<div className={styles.wrapperFavorite}>
				<Htag className={styles.title} htag='h3'>Жанры</Htag>
				<div className={styles.wrapperArrow}>
					<button className={styles.buttonDef} name='prevBig' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => changeSlidePrev(e)} >
						<ArrowIcon className={cn(styles.arrow, styles.arrowLeft, {[styles.isActive]: prevBig > 0})}/>
					</button>
					<button className={styles.buttonDef} name='nextBig' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => changeSlideNext(e)} >
						<ArrowIcon  className={cn(styles.arrow, styles.arrowRight, {[styles.isActive]: nextBig < 9})}/>
					</button>
				</div>
				<div className={styles.card1}>
					<CardBig prev={prevBig}  next={nextBig} />
				</div>
			</div>
		</div>
	)
}