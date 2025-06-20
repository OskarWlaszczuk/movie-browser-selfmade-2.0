import { ThemeProvider } from "styled-components";
import { SimplefiedMovieItem } from "../../aliases/interfaces/movie.types";
import { DetailedPersonItem } from "../../aliases/interfaces/person.types";
import { GenresIds } from "../../aliases/types/genre.types";
import { OrNull } from "../../aliases/types/OrNull";
import { pictureWidths } from "../../constants/pictureConfigs";
import { routes } from "../../functions/routes";
import { GenresList } from "../GenresList";
import { MetaData } from "../MetaData";
import { MovieRating } from "../MovieRating";
import { Picture } from "../Picture";
import { DetailsWrapper, InfoWrapper, Overview, StyledTile, Title } from "./styled";

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
        voteAverage: SimplefiedMovieItem["vote_average"];
        voteCount: SimplefiedMovieItem["vote_count"];
        releaseDate?: SimplefiedMovieItem["release_date"];
        productionCountries?: ProductionCountry[];
        overview?: SimplefiedMovieItem["overview"];
    };
    personDetails?: {
        biography: DetailedPersonItem["biography"];
        birthday: DetailedPersonItem["birthday"];
        placeOfBirth: DetailedPersonItem["place_of_birth"];
    };
};

export const Tile = ({ id, picture, title, subTitle, horizontalLayout, movieDetails, personDetails }: TileProps) => {

    const entityType = movieDetails ? "movie" : "person";
    return (

        // <HorizontalTile>
        //     <Picture picturePath={picture} pictureWidth={pictureWidths.tile} entityType={entityType} entityName={title} />
        //     <div>
        //         <InfoWrapper>
        //             <Title>{title}</Title>
        //             {subTitle && <MetaData>{subTitle}</MetaData>}
        //             {movieDetails && <GenresList genresIds={movieDetails.genresIds} />}
        //         </InfoWrapper>
        //         {movieDetails && <MovieRating voteAverage={movieDetails?.voteAverage} voteCount={movieDetails?.voteCount} />}
        //         {movieDetails?.overview && <Overview>{movieDetails.overview}</Overview>}
        //     </div>
        // </HorizontalTile>

        <StyledTile $horizontalLayout={horizontalLayout} to={entityType === "movie" ? routes.movieDetails(id) : routes.personDetails(id)}>
            <Picture picturePath={picture} pictureWidth={pictureWidths.tile} entityType={entityType} entityName={title} />
            <DetailsWrapper>
                <InfoWrapper>
                    <Title $horizontalLayout={horizontalLayout}>{title}</Title>
                    {subTitle && <MetaData>{subTitle}</MetaData>}
                    {movieDetails && <GenresList genresIds={movieDetails.genresIds} />}
                </InfoWrapper>
                {movieDetails && <MovieRating voteAverage={movieDetails?.voteAverage} voteCount={movieDetails?.voteCount} />}
                {movieDetails?.overview && <Overview>{movieDetails.overview}</Overview>}
            </DetailsWrapper>
        </StyledTile>
    );
};