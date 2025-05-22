import { PictureWidth } from "../../constants/pictureConfigs";
import { getPictureUrl } from "./utilis/getPictureUrl";
import { StyledPicture } from "./styled";
import { getInvalidPictureUrl } from "./utilis/getInvalidPictureUrl";
import { Placeholder } from "./Placeholder";

interface PictureProps {
    picturePath: string;
    pictureWidth: PictureWidth;
    entityType: "movie" | "person";
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