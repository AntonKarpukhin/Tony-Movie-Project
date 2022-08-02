import { withLayout } from "../../Layout/Layout";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { CategoryOneFilm, CategoryProps } from "../../interfaces/Category.props";
import { CardMain, Search } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { cartAddProducts, filmAddCategory, filmChangeCategory } from "../../reducers/Films.slice";
import { ReducerProps } from "../../reducers/Reducers.Props";
import { PopularFilms } from "../../interfaces/PopularFilms.props";
import { initialState } from "../../reducers/Filters.slice";
import { PopularFilmsData } from "../../DB/DataTopFilms/PopularFilmsData";
import { getCategoryData } from "../../DB/DataCategory/getCategory";
import Link from "next/link";

import styles from '../../styles/category.module.css';

const Category = ({ dataCategory, dataPopular }: GetAllData ) => {

	const [slicePrev, setSlicePrev] = useState<number>(0)
	const [sliceNext, setSliceNext] = useState<number>(6)

	const flatDate = dataCategory?.flatMap(item => item.items.map(it => it)).map(item => {
		if (item.nameRu === null) {
			return {...item, nameRu: 'Нет имени'}
		} else {
			return item
		}
	})
	const filmsSlideCategory = useSelector<ReducerProps, CategoryOneFilm[]>(state => state.films.menuCategory)

	const dispatch = useDispatch()

	let arr = dataPopular?.flatMap(item => item.films.map(i => i)).map(item => {
		if (item.nameRu === null) {
			return {...item, nameRu: 'Нет имени'}
		} else {
			return item
		}
	})

	useEffect(() => {
		dispatch(cartAddProducts(arr))
	},[dataPopular])

	useEffect(() => {
		dispatch(filmAddCategory(flatDate))
	}, [dataCategory]);

	useEffect(() => {
		setSlicePrev(0)
		setSliceNext(6)
		dispatch(filmAddCategory(flatDate))
		dispatch(filmChangeCategory([slicePrev, sliceNext]))
	}, [])

	useEffect(() => {
		dispatch(filmChangeCategory([slicePrev, sliceNext]))
		dispatch(filmChangeCategory([slicePrev, sliceNext]))
	}, [slicePrev, sliceNext])

	const changeSlidePrev = () => {
		if (slicePrev === 0) {
			return
		} else {
			setSlicePrev(prev => prev - 6)
			setSliceNext(next => next - 6)
		}
	}

	const changeSlideNext = () => {
		if (sliceNext + filmsSlideCategory.length % 6 > filmsSlideCategory.length) {
			return
		} else {
			setSlicePrev(prev => prev + 6)
			setSliceNext(next => next + 6)
		}
	}

	return (
		<div className={styles.wrapper}>
			<Link href='/'>
				<a className={styles.back}>Вернуться на главную</a>
			</Link>
			<Search className={styles.input}/>
			<div className={styles.wrapperCard}>
				<CardMain category={true}/>
			</div>
			<div className={styles.buttonWrapper}>
				<div >
					<button className={styles.button} onClick={changeSlidePrev}>Prev</button>
				</div>
				<div >
					<button className={styles.button} onClick={changeSlideNext}>Next</button>
				</div>
			</div>
		</div>
	)
}



export default withLayout(Category)


export const getStaticPaths: GetStaticPaths = async () => {

	const paths = initialState.allFilters.map(item => ({
		params: { genre: item.propGenre },
	}));

	return {
		paths,
		fallback: true
	}

}

export const getStaticProps: GetStaticProps<GetAllData> = async ({params }: GetStaticPropsContext<ParsedUrlQuery>) => {

	try {
		if (!params) {
			return {
				notFound: true
			};
		}


		const genre: string = params.genre as string
		const dataCategory: CategoryProps[] = getCategoryData(genre)
		const dataPopular: PopularFilms[] = PopularFilmsData;

		if (!dataCategory || !dataPopular) {
			return {
				notFound: true,
			}
		}

		return {
			props: {
				dataCategory,
				dataPopular
			},
		};

	} catch  {
		return {
			notFound: true
		}
	}
};


interface GetAllData extends Record<string, unknown> {
	dataCategory: CategoryProps[];
	dataPopular: PopularFilms[];
}