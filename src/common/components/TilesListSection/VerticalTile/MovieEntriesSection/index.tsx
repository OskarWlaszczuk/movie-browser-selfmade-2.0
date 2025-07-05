import { useMediaQuery } from "react-responsive";
import { EntityEntriesSection } from "../../../../../features/DetailsPage/components/EntityDetails/HorizontalTile/EntityEntriesSection";
import { MovieEntries } from "../../../../../features/DetailsPage/types/entityEntries.types";
import { DetailedMovieItem } from "../../../../aliases/interfaces/movie.types";
import { OrUndefined } from "../../../../aliases/types/OrUndefined";
import { theme } from "../../../../../core/theme";

interface MovieEntriesSectionProps {
    detailedMovieItem: OrUndefined<DetailedMovieItem>;
}

export const MovieEntriesSection = ({ detailedMovieItem }: MovieEntriesSectionProps) => {
    const formattedDate = detailedMovieItem?.release_date?.replaceAll("-", ".") || null;
    const isLaptopXS = useMediaQuery({ query: `(max-width:${theme.breakpoints.laptopXS})` });

    const countriesNames = detailedMovieItem?.production_countries?.map(({ name }) => name).join(", ");
    const countriesShortcuts = detailedMovieItem?.production_countries?.map(({ iso_3166_1 }) => iso_3166_1).join(", ");
    const countries = isLaptopXS ? countriesShortcuts : countriesNames;

    const movieEntries: MovieEntries = [
        { key: "production", value: countries },
        { key: "release date", value: formattedDate }
    ];

    return <EntityEntriesSection entityEntries={movieEntries} />
};