import { getInvalidPictureUrl, PictureWidth } from "../../constants/pictureConfigs";
import { getPictureUrl } from "../../functions/getPictureUrl";
import { StyledPicture } from "./styled";

interface PictureProps {
    picturePath: string;
    pictureWidth: PictureWidth;
}

export const Picture = ({ picturePath, pictureWidth }: PictureProps) => {
    const pictureUrl = getPictureUrl(picturePath, pictureWidth);

    const isValidImageUrl = pictureUrl !== getInvalidPictureUrl(pictureWidth);

    return (
        <StyledPicture $picture={isValidImageUrl ? pictureUrl : "placeholder"} />
    );
};