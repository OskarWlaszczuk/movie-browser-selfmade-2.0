import { pictureWidths } from "../../constants/pictureConfigs";
import { Picture } from "../Picture";
import { DetailsWrapper, ExtraContentWrapper, InfoWrapper, StyledTile, Title } from "./styled";
import { ReactNode } from "react";
import { EntitySingularType } from "../../aliases/types/entityTypes.types";
import { OrUndefined } from "../../aliases/types/OrUndefined";
import { PicturePath } from "../../aliases/types/PicturePath";

export interface TileProps {
    picturePath: PicturePath;
    title: OrUndefined<string>;
    entityType: EntitySingularType;
    detailsRoutePath?: string;
    infoContent?: ReactNode;
    extraContent?: ReactNode;
    useHorizontalLayout?: boolean;
    useTwoColumnsLayout?: boolean;
};

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