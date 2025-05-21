import { apiUrls, PictureWidth } from "../constants/tmdbConfig";

export const getPictureUrl = (picturePath: string, width: PictureWidth) => `${apiUrls.image}${width}${picturePath}`;