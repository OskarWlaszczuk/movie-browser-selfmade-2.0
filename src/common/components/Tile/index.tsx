import { Movie } from "../../aliases/interfaces/Movie";
import { Person } from "../../aliases/interfaces/Person";
import { GenresIds } from "../../aliases/types/genre.types";
import { pictureWidths } from "../../constants/pictureConfigs";
import { GenresList } from "../GenresList";
import { MovieRating } from "../MovieRating";
import { Picture } from "../Picture";
import { StyledTile, SubTitle, Title } from "./styled";

interface ProductionCountry {
    iso_3166_1: string;
    name: string;
};
interface TileProps {
    id: number;
    picture: string;
    title: string;
    subTitle?: string | number;
    horizontalLayout?: boolean;
    verticalLayout?: boolean;
    movieDetails?: {
        genresIds: GenresIds;
        voteAverage: Movie["vote_average"];
        voteCount: Movie["vote_count"];
        releaseDate?: Movie["release_date"];
        productionCountries?: ProductionCountry[];
        overview?: Movie["overview"];
    };
    personDetails?: {
        biography: Person["biography"];
        birthday: Person["birthday"];
        placeOfBirth: Person["place_of_birth"];
    }
};

export const Tile = ({ id, picture, title, subTitle, horizontalLayout, verticalLayout, movieDetails, personDetails }: TileProps) => {
    const movieExtraInfo = (
        movieDetails && (
            <>
                <GenresList genresIds={movieDetails.genresIds} />
                <MovieRating voteAverage={movieDetails?.voteAverage} voteCount={movieDetails?.voteCount} />
            </>
        )
    );

    const entityType = movieDetails ? "movie" : "person";

    return (
        <StyledTile>
            <Picture picturePath={picture} pictureWidth={pictureWidths.tile} entityType={entityType} entityName={title} />
            <Title>{title}</Title>
            {subTitle && <SubTitle>{subTitle}</SubTitle>}
            {movieExtraInfo}
        </StyledTile>
    );
};