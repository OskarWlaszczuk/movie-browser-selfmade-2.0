import { PersonCastMovieItem, PersonCrewMovieItem, SimplefiedMovieItem } from "../../../aliases/interfaces/movie.types";
import { MovieCastMember, MovieCrewMember, SimplefiedPersonItem } from "../../../aliases/interfaces/person.types";
import { SharedTileEntityData } from "../../../aliases/interfaces/SharedTileEntityData";
import { TileEntity } from "../../../aliases/interfaces/TileEntity";
import { TileProps } from "../../../aliases/interfaces/TileProps";
import { entitiesSingularTypes } from "../../../constants/entityTypes";
import { entityTypeGuards } from "../../../functions/entityTypeGuards";
import { getYear } from "../../../functions/getYear";
import { detailsRoutes } from "../../../functions/routes";
import { MetaData } from "../../MetaData";
import { GenresList } from "../../Tile/GenresList";
import { MovieRating } from "../../Tile/MovieRating";

type TilePropsConfig<ItemType extends TileEntity> = {
    typeGuard: (item: TileEntity) => item is ItemType;
    tileProps: (item: ItemType) => TileProps;
};

type TilePropsConfigs = [
    TilePropsConfig<SimplefiedMovieItem>,
    TilePropsConfig<SimplefiedPersonItem>,
    TilePropsConfig<MovieCastMember>,
    TilePropsConfig<MovieCrewMember>,
    TilePropsConfig<PersonCastMovieItem>,
    TilePropsConfig<PersonCrewMovieItem>,
];


export const getTilePropsConfigs = () => {

    const getPersonRoute = (id: SharedTileEntityData["id"]) => detailsRoutes.personDetails(id);
    const getMovieRoute = (id: SharedTileEntityData["id"]) => detailsRoutes.movieDetails(id);

    const sharedMovieEntityProps: Pick<TileProps, "useTwoColumnsLayout"> = {
        useTwoColumnsLayout: true,
    };

    const tilePropsConfigs: TilePropsConfigs = [
        {
            typeGuard: entityTypeGuards.isSimplefiedMovieItem,
            tileProps: (item) => ({
                title: item.title,
                picturePath: item.poster_path,
                detailsRoutePath: getMovieRoute(item.id),
                infoContent: (
                    <>
                        <MetaData>{getYear(item?.release_date)}</MetaData>
                        <GenresList genresIds={item.genre_ids} />
                    </>
                ),
                extraContent: (
                    <MovieRating
                        voteAverage={item?.vote_average}
                        voteCount={item?.vote_count}
                    />
                ),
                entityType: entitiesSingularTypes.MOVIE,
                ...sharedMovieEntityProps,
            }),
        },
        {
            typeGuard: entityTypeGuards.isSimplefiedPersonItem,
            tileProps: (item) => ({
                title: item.name,
                picturePath: item.profile_path,
                detailsRoutePath: getPersonRoute(item.id),
                entityType: entitiesSingularTypes.PERSON,
            }),
        },
        {
            typeGuard: entityTypeGuards.isMovieCastMember,
            tileProps: (item) => ({
                title: item.name,
                picturePath: item.profile_path,
                detailsRoutePath: getPersonRoute(item.id),
                infoContent: (
                    <MetaData>{item.character}</MetaData>
                ),
                entityType: entitiesSingularTypes.PERSON,
            }),
        },
        {
            typeGuard: entityTypeGuards.isMovieCrewMember,
            tileProps: (item) => ({
                title: item.name,
                picturePath: item.profile_path,
                detailsRoutePath: getPersonRoute(item.id),
                infoContent: (
                    <MetaData>{item.job}</MetaData>
                ),
                entityType: entitiesSingularTypes.PERSON,
            }),
        },
        {
            typeGuard: entityTypeGuards.isPersonCastMovieItem,
            tileProps: (item) => ({
                title: item.title,
                picturePath: item.poster_path,
                detailsRoutePath: getMovieRoute(item.id),
                infoContent: (
                    <>
                        <MetaData>{`${item.character} (${getYear(item?.release_date)})`}</MetaData>
                        <GenresList genresIds={item.genre_ids} />
                    </>
                ),
                extraContent: (
                    <MovieRating
                        voteAverage={item?.vote_average}
                        voteCount={item?.vote_count}
                    />
                ),
                entityType: entitiesSingularTypes.MOVIE,
                ...sharedMovieEntityProps,

            }),
        },
        {
            typeGuard: entityTypeGuards.isPersonCrewMovieItem,
            tileProps: (item) => ({
                title: item.title,
                picturePath: item.poster_path,
                detailsRoutePath: getMovieRoute(item.id),
                infoContent: (
                    <>
                        <MetaData>{`${item.department} (${getYear(item?.release_date)})`}</MetaData>
                        <GenresList genresIds={item.genre_ids} />
                    </>
                ),
                extraContent: (
                    <MovieRating
                        voteAverage={item?.vote_average}
                        voteCount={item?.vote_count}
                    />
                ),
                entityType: entitiesSingularTypes.MOVIE,
                ...sharedMovieEntityProps,
            }),
        },
    ];

    return tilePropsConfigs;
};