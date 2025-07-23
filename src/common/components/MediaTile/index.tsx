import { OrNull } from "../../aliases/types/OrNull";
import { apiUrls, pictureWidths } from "../../constants/pictureConfigs";
import { MediaImage } from "../MediaImage";
import { StyledMediaTile } from "./styled";

export interface MediaTileProps {
    imagePath: OrNull<string>;
    name: string;
    detailsRoute: string;
}

export const MediaTile = ({ imagePath, name, detailsRoute }: MediaTileProps) => (
    <StyledMediaTile to={detailsRoute}>
        <MediaImage src={`${apiUrls.image}${pictureWidths.tile}${imagePath}`} alt={name} />
    </StyledMediaTile>
);