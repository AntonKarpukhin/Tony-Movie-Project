import { dataAllVideo } from "./DataAllVideo";


export const getOneVideo = (id: number) => {
	const video = dataAllVideo.filter(item => item.id === id);
	return video
}