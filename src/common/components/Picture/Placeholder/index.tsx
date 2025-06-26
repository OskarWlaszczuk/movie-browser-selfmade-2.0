import { EntityType } from "../../../aliases/types/entityTypes.types";
import { StyledMoviePlaceholder, StyledPersonPlaceholder, StyledPlaceholder } from "./styled"

interface PlaceholderProps {
    entityType: EntityType;
}

export const Placeholder = ({ entityType }: PlaceholderProps) => {
    const placeholderIcon = entityType === "movie" ? <StyledMoviePlaceholder /> : <StyledPersonPlaceholder />

    return (
        <StyledPlaceholder>
            {placeholderIcon}
        </StyledPlaceholder>
    );
};