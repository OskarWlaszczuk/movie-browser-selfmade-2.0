import { EntityEntriesSection } from "../../../../../features/DetailsPage/components/EntityDetails/HorizontalTile/EntityEntriesSection";
import { MovieEntries } from "../../../../../features/DetailsPage/types/entityEntries.types";
import { formatProductionCountries } from "../../../../../features/DetailsPage/utilis/formatProductionCountries";
import { DetailedMovieItem } from "../../../../aliases/interfaces/movie.types";
import { OrUndefined } from "../../../../aliases/types/OrUndefined";

interface MovieEntriesSectionProps {
    detailedMovieItem: OrUndefined<DetailedMovieItem>;
}

export const MovieEntriesSection = ({ detailedMovieItem }: MovieEntriesSectionProps) => {
    const formattedDate = detailedMovieItem?.release_date?.replaceAll("-", ".") || null;
    const formattedCountries = formatProductionCountries(detailedMovieItem?.production_countries);

    const movieEntries: MovieEntries = [
        { key: "production", value: formattedCountries },
        { key: "release date", value: formattedDate }
    ];

    return <EntityEntriesSection entityEntries={movieEntries} />
};