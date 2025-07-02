import { EntitySingularType } from "../../../aliases/types/entityTypes.types";
import { entitiesSingularTypes } from "../../../constants/entityTypes";
import { StyledMoviePlaceholder, StyledPersonPlaceholder, StyledPlaceholder } from "./styled"

interface PlaceholderProps {
    entityType: EntitySingularType;
}

export const Placeholder = ({ entityType }: PlaceholderProps) => {
    const placeholderIcon = entityType === entitiesSingularTypes.MOVIE ? <StyledMoviePlaceholder /> : <StyledPersonPlaceholder />

    return (
        <StyledPlaceholder>
            {placeholderIcon}
        </StyledPlaceholder>
    );
};