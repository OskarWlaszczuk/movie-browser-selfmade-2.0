import { apiUrls, PictureWidth } from "../../../constants/pictureConfigs";

export const getInvalidPictureUrl = (pictureWidths: PictureWidth) => `${apiUrls.image}${pictureWidths}null`;