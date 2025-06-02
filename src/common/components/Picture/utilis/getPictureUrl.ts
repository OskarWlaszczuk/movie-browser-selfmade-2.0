import { OrNull } from "../../../aliases/types/OrNull";
import { apiUrls, PictureWidth } from "../../../constants/pictureConfigs";

export const getPictureUrl = (picturePath: OrNull<string>, width: PictureWidth) => `${apiUrls.image}${width}${picturePath}`;