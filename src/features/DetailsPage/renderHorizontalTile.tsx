import { MovieDetails } from "../../common/aliases/interfaces/movie.types";
import { PersonDetails } from "../../common/aliases/interfaces/person.types";
import { Tile } from "../../common/components/Tile";
import { getYear } from "../../common/functions/getYear";

type DetailsUnion = PersonDetails | MovieDetails;

export const renderHorizontalTile = (details: DetailsUnion) => {
    const isMovie = (details: DetailsUnion): details is MovieDetails => {
        return details && "title" in details;
    };

    const selectTileProps = () => {
        if (isMovie(details)) {
            const {
                genres,
                overview,
                poster_path,
                title,
                vote_average,
                vote_count,
                id,
                release_date,
                production_countries
            } = details;

            const genresIds = genres.map(({ id }) => id);

            return {
                id,
                title,
                picture: poster_path,
                subTitle: getYear(release_date),
                horizontalLayout: true,
                movieDetails: {
                    genresIds,
                    voteAverage: vote_average,
                    voteCount: vote_count,
                    productionCountries: production_countries,
                    overview
                }
            }
        } else if (!!details && !isMovie(details)) {
            const { birthday, biography, place_of_birth, id, name, profile_path } = details;

            return {
                id,
                title: name,
                picture: profile_path,
                horizontalLayout: true,
                personDetails: {
                    biography,
                    birthday,
                    placeOfBirth: place_of_birth,
                },
            };
        }
    };

    const tileProps = selectTileProps();

    if (!tileProps) return <></>;

    return (
        <Tile
            {...tileProps}
        />
    );
};