import { TileProps } from "../../aliases/interfaces/TileProps";
import { pictureWidths } from "../../constants/pictureConfigs";
import { Picture } from "../Picture";
import {
    ExtraContentWrapper,
    InfoWrapper,
    StyledTile,
    Title
} from "./styled";

export const Tile = ({
    detailsRoutePath,
    picturePath,
    title,
    infoContent,
    extraContent,
    entityType,
    useHorizontalLayout,
    useTwoColumnsLayout,
}: TileProps) => {
    return (
        <StyledTile
            $horizontalLayout={useHorizontalLayout}
            $twoColumns={useTwoColumnsLayout}
            to={detailsRoutePath || ""}
        >
            <Picture
                picturePath={picturePath}
                pictureWidth={pictureWidths.tile}
                entityType={entityType}
                entityName={title}
            />
            <InfoWrapper>
                <Title $horizontalLayout={useHorizontalLayout}>{title}</Title>
                {infoContent && infoContent}
            </InfoWrapper>
            {
                extraContent && (
                    <ExtraContentWrapper>
                        {extraContent}
                    </ExtraContentWrapper>
                )
            }
        </StyledTile>
    )
};