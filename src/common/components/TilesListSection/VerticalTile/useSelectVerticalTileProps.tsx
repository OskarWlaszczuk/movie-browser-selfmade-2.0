import { useMediaQuery } from "react-responsive";
import {
    PersonCastMovieItem,
    PersonCrewMovieItem,
    SimplefiedMovieItem
} from "../../../aliases/interfaces/movie.types";
import {
    MovieCastMember,
    MovieCrewMember,
    SimplefiedPersonItem
} from "../../../aliases/interfaces/person.types";
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
import { theme } from "../../../../core/theme";
import { ReactNode } from "react";

type VerticalTileProps = Pick<
    TileProps,
    "useTwoColumnsLayout" |
    "picturePath" |
    "title" |
    "detailsRoutePath" |
    "entityType" |
    "extraContent"
>

const getMovieInfoContent = (movie: MovieEntity, metaData: OrUndefined<ReactNode>, isMobileL: boolean) => ({
    infoContent: (
        <>
            {metaData}
            <GenresList genresIds={movie.genre_ids} />
            {isMobileL && (
                <MovieRating
                    voteAverage={movie?.vote_average}
                    voteCount={movie?.vote_count}
                />
            )}
        </>
    )
});

const getBaseMovieEntityProps = (movieEntity: MovieEntity, isMobileL: boolean): VerticalTileProps => ({
    useTwoColumnsLayout: true,
    picturePath: movieEntity.poster_path,
    title: movieEntity.title,
    detailsRoutePath: detailsRoutes.movies(movieEntity.id),
    entityType: entitiesSingularTypes.MOVIE,
    extraContent: (
        !isMobileL && (
            <MovieRating
                voteAverage={movieEntity?.vote_average}
                voteCount={movieEntity?.vote_count}
            />
        )
    ),
});

const getBasePersonEntityProps = (personEntity: PersonEntity): VerticalTileProps => ({
    useTwoColumnsLayout: false,
    picturePath: personEntity.profile_path,
    title: personEntity.name,
    detailsRoutePath: detailsRoutes.people(personEntity.id),
    entityType: entitiesSingularTypes.PERSON,
});


export const useSelectVerticalTileProps = (tileEntity: OrUndefined<TileEntity>) => {
    const isMobileL = useMediaQuery({ query: `(max-width:${theme.breakpoints.mobileL})` });

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

    const tilePropsConfigs: TilePropsConfigs = [
        {
            typeGuard: entityTypeGuards.isSimplefiedMovieItem,
            tileProps: (item) => ({
                ...getBaseMovieEntityProps(item, isMobileL),
                ...getMovieInfoContent(item, <MetaData>{getYear(item?.release_date)}</MetaData>, isMobileL)
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
                infoContent: <MetaData>{item.character}</MetaData>
            }),
        },
        {
            typeGuard: entityTypeGuards.isMovieCrewMember,
            tileProps: (item) => ({
                ...getBasePersonEntityProps(item),
                infoContent: <MetaData>{item.job}</MetaData>
            }),
        },
        {
            typeGuard: entityTypeGuards.isPersonCastMovieItem,
            tileProps: (item) => ({
                ...getBaseMovieEntityProps(item, isMobileL),
                ...getMovieInfoContent(
                    item,
                    (item.character !== "" && item.release_date !== "") && (
                        <MetaData>
                            {item.character}{" "}
                            {
                                item.release_date && (
                                    `(${getYear(item.release_date)})`
                                )
                            }
                        </MetaData>
                    ),
                    isMobileL
                )
            }),
        },
        {
            typeGuard: entityTypeGuards.isPersonCrewMovieItem,
            tileProps: (item) => ({
                ...getBaseMovieEntityProps(item, isMobileL),
                ...getMovieInfoContent(
                    item,
                    (item.department !== "" && item.release_date !== "") && (
                        <MetaData>
                            {item.department}{" "}
                            {
                                item.release_date && (
                                    `(${getYear(item.release_date)})`
                                )
                            }
                        </MetaData>
                    ),
                    isMobileL
                ),
            }),
        },
    ];

    return (
        tilePropsConfigs.find(({ typeGuard }) => typeGuard(tileEntity!) === true)?.tileProps(tileEntity as any)
    );
};