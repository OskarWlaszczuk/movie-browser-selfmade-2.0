import { EntityEntriesSection } from "../../../../../features/DetailsPage/components/EntityDetails/HorizontalTile/EntityEntriesSection";
import { MovieEntries } from "../../../../../features/DetailsPage/types/entityEntries.types";
import { DetailedMovieItem } from "../../../../aliases/interfaces/movie.types";
import { OrUndefined } from "../../../../aliases/types/OrUndefined";
import { useIsMobileXL } from "../../../../hooks/useIsMobileXL";

interface MovieEntriesSectionProps {
    detailedMovieItem: OrUndefined<DetailedMovieItem>;
}

export const MovieEntriesSection = ({ detailedMovieItem }: MovieEntriesSectionProps) => {
    const formattedDate = detailedMovieItem?.release_date?.replaceAll("-", ".") || null;
    const isMobileXL = useIsMobileXL()

    const countriesNames = detailedMovieItem?.production_countries?.map(({ name }) => name).join(", ");
    const countriesShortcuts = detailedMovieItem?.production_countries?.map(({ iso_3166_1 }) => iso_3166_1).join(", ");
    const countries = isMobileXL ? countriesShortcuts : countriesNames;

    const movieEntries: MovieEntries = [
        { key: "production", value: countries },
        { key: "release date", value: formattedDate }
    ];

    return <EntityEntriesSection entityEntries={movieEntries} />
};