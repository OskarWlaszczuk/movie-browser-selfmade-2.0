import { TileProps } from "../../aliases/interfaces/TileProps";
import { pictureWidths } from "../../constants/pictureConfigs";
import { Picture } from "../Picture";
import {
    ExtraContentWrapper,
    InfoWrapper,
    TileContainer,
    TileLinkContainer,
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
    useTwoColumnsMobileLayout,
}: TileProps) => {

    const tileContent = (
        <>
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
        </>
    );

    const baseContainerProps = {
        $horizontalLayout: useHorizontalLayout,
        $twoColumnsMobile: useTwoColumnsMobileLayout,
    };

    const tileElement = (
        !detailsRoutePath ?
            <>
                <TileContainer {...baseContainerProps}>
                    {tileContent}
                </TileContainer>
            </> :
            <>
                <TileLinkContainer  {...baseContainerProps} to={detailsRoutePath}>
                    {tileContent}
                </TileLinkContainer>
            </>
    );

    return tileElement;
};