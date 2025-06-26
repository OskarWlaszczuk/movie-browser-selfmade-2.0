import { PictureWidth } from "../../constants/pictureConfigs";
import { getPictureUrl } from "./utilis/getPictureUrl";
import { StyledPicture } from "./styled";
import { getInvalidPictureUrl } from "./utilis/getInvalidPictureUrl";
import { Placeholder } from "./Placeholder";
import { OrNull } from "../../aliases/types/OrNull";
import { EntityType } from "../../aliases/types/entityTypes.types";

interface PictureProps {
    picturePath: OrNull<string>;
    pictureWidth: PictureWidth;
    entityType: EntityType;
    entityName: string;
}

export const Picture = ({ picturePath, pictureWidth, entityType, entityName }: PictureProps) => {
    const pictureSrc = getPictureUrl(picturePath, pictureWidth);
    const pictureAlt = `${entityType}: ${entityName}`;

    const isValidImageUrl = pictureSrc !== getInvalidPictureUrl(pictureWidth);

    const pictureElement = (
        isValidImageUrl ?
            <StyledPicture src={pictureSrc} alt={pictureAlt} /> :
            <Placeholder entityType={entityType} />
    );

    return (
        <>  {pictureElement}</>
    );
};