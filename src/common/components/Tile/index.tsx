import { TileProps } from "../../aliases/interfaces/TileProps";
import { pictureWidths } from "../../constants/pictureConfigs";
import { Picture } from "../Picture";
import { DetailsWrapper, ExtraContentWrapper, InfoWrapper, StyledTile, Title } from "./styled";

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
            $twoColumns={useTwoColumnsLayout || useHorizontalLayout}
            to={detailsRoutePath || ""}
        >
            <Picture
                picturePath={picturePath}
                pictureWidth={pictureWidths.tile}
                entityType={entityType}
                entityName={title}
            />
            <DetailsWrapper>
                <InfoWrapper>
                    <Title $horizontalLayout={useHorizontalLayout}>{title}</Title>
                    {infoContent}
                </InfoWrapper>
                <ExtraContentWrapper>
                    {extraContent}
                </ExtraContentWrapper>
            </DetailsWrapper>
        </StyledTile>
    );
};