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

export const useSelectVerticalTileProps = (tileEntity: OrUndefined<TileEntity>) => {

    type VerticalTileProps = Pick<
        TileProps,
        "useTwoColumnsLayout" |
        "picturePath" |
        "title" |
        "detailsRoutePath" |
        "entityType" |
        "extraContent"
    >
    const isMobileL = useMediaQuery({ query: `(max-width:${theme.breakpoints.mobileL})` });

    const getMetaData = (text: OrUndefined<string | number>) => <MetaData>{text}</MetaData>

    const getMovieInfoContent = (movie: MovieEntity, metaData: OrUndefined<ReactNode>) => ({
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
    console.log(isMobileL)
    const getBaseMovieEntityProps = (movieEntity: MovieEntity): VerticalTileProps => ({
        useTwoColumnsLayout: true,
        picturePath: movieEntity.poster_path,
        title: movieEntity.title,
        detailsRoutePath: detailsRoutes.movieDetails(movieEntity.id),
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
        detailsRoutePath: detailsRoutes.personDetails(personEntity.id),
        entityType: entitiesSingularTypes.PERSON,
    });

    const tilePropsConfigs: TilePropsConfigs = [
        {
            typeGuard: entityTypeGuards.isSimplefiedMovieItem,
            tileProps: (item) => ({
                ...getBaseMovieEntityProps(item),
                ...getMovieInfoContent(item, <MetaData>{getYear(item?.release_date)}</MetaData>)
                // ...getMovieInfoContent(item, getYear(item?.release_date)),
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
                infoContent: getMetaData(item.character)
            }),
        },
        {
            typeGuard: entityTypeGuards.isMovieCrewMember,
            tileProps: (item) => ({
                ...getBasePersonEntityProps(item),
                infoContent: getMetaData(item.job)
            }),
        },
        {
            typeGuard: entityTypeGuards.isPersonCastMovieItem,
            tileProps: (item) => ({
                ...getBaseMovieEntityProps(item),
                ...getMovieInfoContent(item, (item.character !== "" && item.release_date !== "") && (
                    <MetaData>
                        {item.character}{" "}
                        {
                            item.release_date && (
                                `(${getYear(item.release_date)})`
                            )
                        }
                    </MetaData>
                ))

                // infoContent: (
                //     (item.character !== "" && item.release_date !== "") && (
                //         <MetaData>
                //             {item.character}{" "}
                //             {
                //                 item.release_date && (
                //                     `(${getYear(item.release_date)})`
                //                 )
                //             }
                //         </MetaData>
                //     )
                // )
                // infoContent: (
                //     <MetaData>
                //         {item.character}{" "}
                //         {
                //             item.release_date && (
                //                 `(${getYear(item.release_date)})`
                //             )
                //         }
                //     </MetaData>
                // )
                // ...getMovieInfoContent(
                //     item,
                //     `${item?.character} ${!!item?.release_date && `(${getYear(item?.release_date)})`}`
                // ),
            }),
        },
        {
            typeGuard: entityTypeGuards.isPersonCrewMovieItem,
            tileProps: (item) => ({
                ...getBaseMovieEntityProps(item),
                ...getMovieInfoContent(item, (item.department !== "" && item.release_date !== "") && (
                    <MetaData>
                        {item.department}{" "}
                        {
                            item.release_date && (
                                `(${getYear(item.release_date)})`
                            )
                        }
                    </MetaData>
                )),

                //     ...getMovieInfoContent(
                //         item,
                //         `${item?.department} ${!!item.release_date && (getYear(item?.release_date))
                // } `
                //     ),
                // infoContent: (
                //     (item.department !== "" && item.release_date !== "") && (
                //         <MetaData>
                //             {item.department}{" "}
                //             {
                //                 item.release_date && (
                //                     `(${getYear(item.release_date)})`
                //                 )
                //             }
                //         </MetaData>
                //     )
                // )
            }),
        },
    ];

    return (
        tilePropsConfigs.find(({ typeGuard }) => typeGuard(tileEntity!) === true)?.tileProps(tileEntity as any)
    );
};