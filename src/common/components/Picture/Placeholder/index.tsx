import { StyledMoviePlaceholder, StyledPersonPlaceholder, StyledPlaceholder } from "./styled"

interface PlaceholderProps {
    entityType: "movie" | "person";
}

export const Placeholder = ({ entityType }: PlaceholderProps) => {
    //type guard sprawdzający
    const placeholderIcon = entityType === "movie" ? <StyledMoviePlaceholder /> : <StyledPersonPlaceholder />

    return (
        <StyledPlaceholder>
            {placeholderIcon}
        </StyledPlaceholder>
    );
};