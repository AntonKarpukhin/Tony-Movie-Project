import { SearchProps } from "./Search.props";
import SearchIcon from './Search.svg';
import { useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import { filmTermCategory } from "../../reducers/Films.slice";

import styles from './Search.module.css';
import cn from 'classnames';

export const Search = ({ className }:SearchProps): JSX.Element => {

	const [stateTerm, setStateTerm] = useState<string>('');
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(filmTermCategory(stateTerm))
	}, [stateTerm])

	return (
		<div className={cn(styles.wrapper, className)}>
			<SearchIcon className={styles.search}/>
			<input value={stateTerm} onChange={(e) => setStateTerm(e.currentTarget.value)} className={styles.icon} type="text" placeholder='Search'/>
		</div>
	)
};