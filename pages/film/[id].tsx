import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { withLayout } from "../../Layout/Layout";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";
import { Htag, Modal } from "../../components";
import Image from "next/image";
import { OneFilm, Video } from "../../interfaces/PagiId.props";
import Link from "next/link";
import { PopularFilms, PopularOneFilm } from "../../interfaces/PopularFilms.props";
import { AwaitFilms, AwaitOneFilm } from "../../interfaces/AwaitFilms.props";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { fetchMainPageFilms } from "../../reducers/Films.slice";
import { PremierOneFilms } from "../../interfaces/PremierFilms.props";
import { PopularFilmsData } from "../../DB/DataTopFilms/PopularFilmsData";
import { AwaitFilmsData } from "../../DB/DataTopFilms/AwaitFilmsData";
import { getOneFilm } from "../../DB/DataFilm/getOneFilm";
import { getPathsFilms } from "../../DB/DataFilm/getPathsFilms";
import { getOneVideo } from "../../DB/DataVideo/getOneVideo";

import styles from '../../styles/id.module.css'


const Film = ({  films, video, dataPopular, dataAwait } : GetAllData): JSX.Element | null => {

	const [modalActive, setModalActive] = useState(false);
	const [film, setFilm] = useState<OneFilm>();

	const videoUrl = video && video[0].video.items.filter(item => item.site === "YOUTUBE")[0]?.url

	videoUrl ? videoUrl : ''

	useEffect(() => {
		films && setFilm(films[0])
	},[films])

	const flat = (arrayFilms: PopularFilms[] | AwaitFilms[]) => {
		return arrayFilms?.flatMap(item => item.films.map(i => i)).map(item => {
			if (item.nameRu === null) {
				return {...item, nameRu: 'Нет имени'}
			} else {
				return item
			}
		})
	}


	const filmsData: filmsData = {
		popularFilms: flat(dataPopular),
		awaitFilms: flat(dataAwait),
	}

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchMainPageFilms(filmsData))
	},[])

	const urlImage = film ? film.posterUrl : ''

	return (
		<>
			<Link href='/'>
				<a className={styles.back}>Вернуться на главную</a>
			</Link>

			<div className={styles.wrapper}>
				<Htag className={styles.htag} htag='h2'>{film?.nameRu}</Htag>
				<div className={styles.img}>
					<Image width={400} height={400} src={urlImage} alt={film?.nameEn}/>
				</div>
				<div className={styles.description}>{film?.description?.slice(0, 692)}</div>
				<div className={styles.rating}>Рейтинг: {film?.ratingKinopoisk}</div>
				<div className={styles.wrapperGenre}>
					Жанры:
					{film && film.genres?.length <= 3 ? film.genres.map((item, i) => {
						return <div key={i} className={styles.genre}> {  item.genre }</div>
					}) : film && film.genres?.slice(0, 3).map((item, i) => {
						return <div key={i} className={styles.genre}> {  item.genre }</div>
					})}
				</div>
				<div className={styles.years}> Год выхода:{film?.year}</div>
				<div className={styles.wrapperCountry}>
					Страна производства:
					{film?.countries?.map((item, i) => {
						return <div key={i} className={styles.country}>{item.country}</div>
					})}
				</div>
				<button onClick={() => setModalActive(true)} className={styles.videoButton }>Смотреть</button>
				<Modal className={styles.wrapperVideoPlayer} active={modalActive} setActive={setModalActive} videoUrl={videoUrl}/>
			</div>

		</>
	)
}

export default withLayout(Film);


export const getStaticPaths: GetStaticPaths = async () => {

	const paths = getPathsFilms()

	return {
		paths,
		fallback: true
	};
};


export const getStaticProps: GetStaticProps<GetAllData> = async ({params }: GetStaticPropsContext<ParsedUrlQuery>) => {

	try {
		if (!params) {
			return {
				notFound: true
			};
		}

		const id: number = Number(params.id?.slice(0, 7))

		const films: OneFilm[] = getOneFilm(id)
		const video = getOneVideo(id)

		const dataPopular: PopularFilms[] = PopularFilmsData;
		const dataAwait: AwaitFilms[] = AwaitFilmsData;

		if (!films || !dataPopular || !dataAwait || !video) {
			return {
				notFound: true,
			}
		}

		return {
			props: {
				films,
				video,
				dataPopular,
				dataAwait
			},
		};

	} catch {
		return {
			notFound: true
		}
	}
};


interface GetAllData extends Record<string, unknown> {
	films: OneFilm[]
	video: Video[]
	dataPopular: PopularFilms[];
	dataAwait: AwaitFilms[];
}


export interface filmsData {
	popularFilms: PopularOneFilm[];
	awaitFilms: AwaitOneFilm[];
	premierFilms?: PremierOneFilms[]
}

