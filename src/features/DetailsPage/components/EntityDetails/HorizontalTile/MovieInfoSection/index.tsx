import { DetailedMovieItem, PersonCastMovieItem, PersonCrewMovieItem, SimplefiedMovieItem } from "../../../../../../common/aliases/interfaces/movie.types";
import { OrUndefined } from "../../../../../../common/aliases/types/OrUndefined";
import { MetaData } from "../../../../../../common/components/MetaData";
import { GenresList } from "../../../../../../common/components/Tile/GenresList";
import { ReactNode } from "react";
import { GenresIds } from "../../../../../../common/aliases/types/genre.types";
import { MovieInfoWrapper } from "./styled";

interface MovieInfoSectionProps {
    movieItem: OrUndefined<DetailedMovieItem | SimplefiedMovieItem | PersonCastMovieItem | PersonCrewMovieItem>;
    genresIds: GenresIds;
    subTitle?: OrUndefined<string | number>;
    extraContent?: ReactNode;
}

export const MovieInfoSection = ({
    movieItem,
    extraContent,
    genresIds,
    subTitle,
}: MovieInfoSectionProps) => (
    <MovieInfoWrapper>
        {subTitle && (<MetaData>{subTitle}</MetaData>)}
        {extraContent}
        <GenresList genresIds={genresIds} />
    </MovieInfoWrapper>
);