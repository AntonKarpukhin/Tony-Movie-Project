import type { GetStaticProps } from 'next'
import { withLayout } from "../Layout/Layout";
import { CardMain, Header, Htag, Slider } from "../components";
import { useDispatch} from "react-redux";
import { AppDispatch } from "../store";
import { useEffect } from "react";
import { Top250Films } from "../interfaces/TOP250Films.props";
import { PopularFilms, PopularOneFilm } from "../interfaces/PopularFilms.props";
import { AwaitFilms, AwaitOneFilm } from "../interfaces/AwaitFilms.props";
import { fetchMainPageFilms } from "../reducers/Films.slice";
import { PremierFilms, PremierOneFilms } from "../interfaces/PremierFilms.props";
import { AwaitFilmsData } from "../DB/DataTopFilms/AwaitFilmsData";
import { PopularFilmsData } from "../DB/DataTopFilms/PopularFilmsData";
import { PremierFilmsData } from "../DB/DataTopFilms/PremierFilmsData";

import styles from '../styles/index.module.css';

const Home = ( {dataAwait, dataPopular, dataPremier} : GetAllData): JSX.Element | null => {

    const flat = (arrayFilms: Top250Films[] | PopularFilms[] | AwaitFilms[]) => {
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
        premierFilms: dataPremier?.flatMap(prem => prem.items.map(item => {
            if (item.nameRu === null) {
                return {...item, nameRu: 'Нет имени'}
            } else {
                return item
            }
        }))
    }

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchMainPageFilms(filmsData))
    },[])

  return (
    <section className={styles.wrapper}>
        <div className={styles.wrapperHeader}>
            <Header className={styles.header}/>
        </div>
        <Slider className={styles.slider}/>
        <Htag className={styles.htag} htag='h2'>Популярное</Htag>
        <div className={styles.wrapperCards}>
            <CardMain mainView={true} category={false} />
        </div>
    </section>
  )
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<GetAllData> = async () => {

    try {

        const dataPremier: PremierFilms[] =  PremierFilmsData;
        const dataPopular: PopularFilms[] =  PopularFilmsData;
        const dataAwait: AwaitFilms[] =  AwaitFilmsData;

        if (!dataPremier || !dataPopular || !dataAwait) {
            return {
                notFound: true,
            }
        }


        return {
            props: {
                dataPremier,
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
    dataPopular: PopularFilms[];
    dataAwait: AwaitFilms[];
    dataPremier: PremierFilms[];
}


export interface filmsData {
    popularFilms: PopularOneFilm[];
    awaitFilms: AwaitOneFilm[];
    premierFilms?: PremierOneFilms[]
}