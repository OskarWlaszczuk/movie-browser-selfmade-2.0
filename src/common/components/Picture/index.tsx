import { apiUrls, PictureWidth } from "../../constants/pictureConfigs";
import { StyledPicture } from "./styled";
import { Placeholder } from "./Placeholder";
import { EntitySingularType } from "../../aliases/types/entityTypes.types";
import { PicturePath } from "../../aliases/types/PicturePath";
import { OrUndefined } from "../../aliases/types/OrUndefined";

interface PictureProps {
    picturePath: PicturePath;
    pictureWidth: PictureWidth;
    entityType: EntitySingularType;
    entityName: OrUndefined<string>;
}

export const Picture = ({ picturePath, pictureWidth, entityType, entityName }: PictureProps) => {
    const pictureAlt = `${entityType}: ${entityName}`;

    const pictureUrl = `${apiUrls.image}${pictureWidth}${picturePath}`;
    const isValidImageUrl = !!picturePath;

    return (
        isValidImageUrl ?
            <StyledPicture src={pictureUrl} alt={pictureAlt} /> :
            <Placeholder entityType={entityType} />
    );
};