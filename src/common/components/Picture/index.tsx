import { apiUrls, PictureWidth } from "../../constants/pictureConfigs";
import { buildPictureUrl } from "./utilis/buildPictureUrl";
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
    const pictureSrc = buildPictureUrl(picturePath, pictureWidth);
    const pictureAlt = `${entityType}: ${entityName}`;

    const invalidPictureUrl = `${apiUrls.image}${pictureWidth}null`;
    const isValidImageUrl = pictureSrc !== invalidPictureUrl;

    const pictureElement = (
        isValidImageUrl ?
            <StyledPicture src={pictureSrc} alt={pictureAlt} /> :
            <Placeholder entityType={entityType} />
    );

    return (
        <>  {pictureElement}</>
    );
};