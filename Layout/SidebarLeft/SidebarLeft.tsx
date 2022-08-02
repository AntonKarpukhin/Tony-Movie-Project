import { SidebarLeftProps } from "./SidebarLeft.props";
import { P } from "../../components";
import { Genres } from "../../reducers/Reducers.Props";
import Link from "next/link";
import { initialState } from "../../reducers/Filters.slice";
import { useRouter } from "next/router";

import styles from './SidebarLeft.module.css';
import cn from "classnames";

export const SidebarLeft = ({className, ...props}: SidebarLeftProps): JSX.Element => {

	const router = useRouter()

	const category = initialState.allFilters

	const renderCategory = (arr: Genres[]) => {
		return arr.map(item => {
			return <Link href={`/genre/${item.propGenre}`}  key={item.id}>
				<a>
					<P size='fz18-22' className={cn(styles.item, {
						[styles.active]: `/genre/${item.propGenre}` == router.asPath
					})}>{item.genre}</P>
				</a>
			</Link>
		})
	}

	const categoryTitle = renderCategory(category);

	return (
		<div className={styles.sidebarLeft} {...props}>
			<div className={styles.title}>TONY MOVIES</div>

			<div className={styles.wrapperTop}>
				<Link href='/'>
					<a ><P size='fz24' className={styles.item}>На главную</P></a>
				</Link>
			</div>

			<div className={styles.wrapperCategory}>
				<P size='fz18-22' className={styles.subTitle}>Категории</P>
				{categoryTitle}
			</div>

		</div>
	)
}