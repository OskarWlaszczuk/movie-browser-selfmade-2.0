import { apiUrls, PictureWidth } from "../../../constants/pictureConfigs";

export const getPictureUrl = (picturePath: string, width: PictureWidth) => `${apiUrls.image}${width}${picturePath}`;