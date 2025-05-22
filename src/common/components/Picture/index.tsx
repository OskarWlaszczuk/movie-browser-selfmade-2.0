import { PictureWidth } from "../../constants/pictureConfigs";
import { getPictureUrl } from "./utilis/getPictureUrl";
import { StyledPicture } from "./styled";
import { getInvalidPictureUrl } from "./utilis/getInvalidPictureUrl";
import { Placeholder } from "./Placeholder";

interface PictureProps {
    picturePath: string;
    pictureWidth: PictureWidth;
    entityType: "movie" | "person";
}

export const Picture = ({ picturePath, pictureWidth, entityType }: PictureProps) => {
    const pictureUrl = getPictureUrl(picturePath, pictureWidth);

    const isValidImageUrl = pictureUrl !== getInvalidPictureUrl(pictureWidth);

    const pictureElement = (
        isValidImageUrl ?
            <StyledPicture $picture={isValidImageUrl ? pictureUrl : "placeholder"} /> :
            <Placeholder entityType={entityType} />
    );

    return (
        <>  {pictureElement}</>
    );
};