import { OrNull } from "../../../aliases/types/OrNull";
import { apiUrls, PictureWidth } from "../../../constants/pictureConfigs";

export const buildPictureUrl = (picturePath: OrNull<string>, width: PictureWidth) => `${apiUrls.image}${width}${picturePath}`;