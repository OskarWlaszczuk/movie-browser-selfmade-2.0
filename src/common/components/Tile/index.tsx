import { MovieDetails, Person } from "../../aliases/interfaces/Entities";
import { GenresIds } from "../../aliases/types/genre.types";
import { OrNull } from "../../aliases/types/OrNull";
import { pictureWidths } from "../../constants/pictureConfigs";
import { routes } from "../../functions/routes";
import { GenresList } from "../GenresList";
import { MetaData } from "../MetaData";
import { MovieRating } from "../MovieRating";
import { Picture } from "../Picture";
import { InfoWrapper, Overview, StyledTile, Title } from "./styled";

interface ProductionCountry {
    iso_3166_1: string;
    name: string;
};
interface TileProps {
    id: number;
    picture: OrNull<string>;
    title: string;
    subTitle?: string | number;
    horizontalLayout?: boolean;
    movieDetails?: {
        genresIds: GenresIds;
        voteAverage: MovieDetails["vote_average"];
        voteCount: MovieDetails["vote_count"];
        releaseDate?: MovieDetails["release_date"];
        productionCountries?: ProductionCountry[];
        overview?: MovieDetails["overview"];
    };
    personDetails?: {
        biography: Person["biography"];
        birthday: Person["birthday"];
        placeOfBirth: Person["place_of_birth"];
    };
};

export const Tile = ({ id, picture, title, subTitle, horizontalLayout, movieDetails, personDetails }: TileProps) => {

    const entityType = movieDetails ? "movie" : "person";
    return (
        <StyledTile $horizontalLayout={horizontalLayout} to={entityType === "movie" ? routes.movieDetails(id) : routes.personDetails(id)}>
            <Picture picturePath={picture} pictureWidth={pictureWidths.tile} entityType={entityType} entityName={title} />
            <InfoWrapper>
                <Title>{title}</Title>
                {subTitle && <MetaData>{subTitle}</MetaData>}
                {movieDetails && <GenresList genresIds={movieDetails.genresIds} />}
            </InfoWrapper>
            {movieDetails && <MovieRating voteAverage={movieDetails?.voteAverage} voteCount={movieDetails?.voteCount} />}
            {movieDetails?.overview && <Overview>{movieDetails.overview}</Overview>}
        </StyledTile>
    );
};