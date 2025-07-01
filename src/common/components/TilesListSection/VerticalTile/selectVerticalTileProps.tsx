import { PersonCastMovieItem, PersonCrewMovieItem, SimplefiedMovieItem } from "../../../aliases/interfaces/movie.types";
import { MovieCastMember, MovieCrewMember, SimplefiedPersonItem } from "../../../aliases/interfaces/person.types";
import { MovieEntity, PersonEntity, TileEntity } from "../../../aliases/interfaces/TileEntity";
import { TileProps } from "../../../aliases/interfaces/TileProps";
import { OrUndefined } from "../../../aliases/types/OrUndefined";
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

export const selectVerticalTileProps = (tileEntity: OrUndefined<TileEntity>) => {

    type BaseTileProps = Pick<
        TileProps,
        "useTwoColumnsLayout" |
        "picturePath" |
        "title" |
        "detailsRoutePath" |
        "entityType"
    >

    const getBaseMovieEntityProps = (movieEntity: MovieEntity): BaseTileProps => ({
        useTwoColumnsLayout: true,
        picturePath: movieEntity.poster_path,
        title: movieEntity.title,
        detailsRoutePath: detailsRoutes.movieDetails(movieEntity.id),
        entityType: entitiesSingularTypes.MOVIE,
    });

    const getBasePersonEntityProps = (personEntity: PersonEntity): BaseTileProps => ({
        useTwoColumnsLayout: true,
        picturePath: personEntity.profile_path,
        title: personEntity.name,
        detailsRoutePath: detailsRoutes.personDetails(personEntity.id),
        entityType: entitiesSingularTypes.PERSON,
    });

    const tilePropsConfigs: TilePropsConfigs = [
        {
            typeGuard: entityTypeGuards.isSimplefiedMovieItem,
            tileProps: (item) => ({
                ...getBaseMovieEntityProps(item),
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
            }),
        },
        {
            typeGuard: entityTypeGuards.isSimplefiedPersonItem,
            tileProps: (item) => ({
                ...getBasePersonEntityProps(item)
            }),
        },
        {
            typeGuard: entityTypeGuards.isMovieCastMember,
            tileProps: (item) => ({
                ...getBasePersonEntityProps(item),
                infoContent: (
                    <MetaData>{item.character}</MetaData>
                ),
            }),
        },
        {
            typeGuard: entityTypeGuards.isMovieCrewMember,
            tileProps: (item) => ({
                ...getBasePersonEntityProps(item),
                infoContent: (
                    <MetaData>{item.job}</MetaData>
                ),
            }),
        },
        {
            typeGuard: entityTypeGuards.isPersonCastMovieItem,
            tileProps: (item) => ({
                ...getBaseMovieEntityProps(item),
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

            }),
        },
        {
            typeGuard: entityTypeGuards.isPersonCrewMovieItem,
            tileProps: (item) => ({
                ...getBaseMovieEntityProps(item),
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
            }),
        },
    ];

    return (
        tilePropsConfigs.find(({ typeGuard }) => typeGuard(tileEntity!) === true)?.tileProps(tileEntity as any)
    );
};