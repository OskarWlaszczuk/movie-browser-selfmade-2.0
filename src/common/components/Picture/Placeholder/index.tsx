import { EntitySingularType } from "../../../aliases/types/entityTypes.types";
import { StyledMoviePlaceholder, StyledPersonPlaceholder, StyledPlaceholder } from "./styled"

interface PlaceholderProps {
    entityType: EntitySingularType;
}

export const Placeholder = ({ entityType }: PlaceholderProps) => {
    const placeholderIcon = entityType === "movie" ? <StyledMoviePlaceholder /> : <StyledPersonPlaceholder />

    return (
        <StyledPlaceholder>
            {placeholderIcon}
        </StyledPlaceholder>
    );
};