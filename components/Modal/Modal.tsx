import { ModalProps } from "./Modal.props";
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player';

import styles from './Modal.module.css';
import cn from "classnames";


export const Modal = ({active, setActive, videoUrl, className}: ModalProps): JSX.Element => {

	const [videState, setVideoState] = useState<string>('');

	useEffect(() => {
		setVideoState(videoUrl)
	}, [])

	return (
		<>
			{videoUrl ? <div onClick={() => setActive(false)} className={cn(styles.wrapper, className, {
				[styles.active]: active
			})}>
				<div className={cn(styles.content,  {
					[styles.content_active]: active
				})} onClick={e => e.stopPropagation()}>
					{videState? <ReactPlayer url={videState} play={videState} controls playing={active}/> : ''}
				</div>
			</div> :
				<div onClick={() => setActive(false)} className={cn(styles.wrapper, className, {[styles.active]: active })}>
					<div onClick={e => e.stopPropagation()} className={cn(styles.content,  {
						[styles.content_active]: active
					})}>Видео пока не добавлено</div>
				</div>}
		</>
	)
}