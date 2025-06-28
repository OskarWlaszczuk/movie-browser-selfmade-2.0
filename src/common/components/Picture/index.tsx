import { apiUrls, PictureWidth } from "../../constants/pictureConfigs";
import { StyledPicture } from "./styled";
import { Placeholder } from "./Placeholder";
import { OrNull } from "../../aliases/types/OrNull";
import { EntitySingularType } from "../../aliases/types/entityTypes.types";

interface PictureProps {
    picturePath: OrNull<string>;
    pictureWidth: PictureWidth;
    entityType: EntitySingularType;
    entityName: string;
}

export const Picture = ({ picturePath, pictureWidth, entityType, entityName }: PictureProps) => {
    const pictureAlt = `${entityType}: ${entityName}`;

    const pictureUrl = `${apiUrls.image}${pictureWidth}${picturePath || null}`;
    const isValidImageUrl = picturePath !== null;

    return (
        isValidImageUrl ?
            <StyledPicture src={pictureUrl} alt={pictureAlt} /> :
            <Placeholder entityType={entityType} />
    );
};