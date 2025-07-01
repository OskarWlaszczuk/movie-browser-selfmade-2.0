import { Tile, TileProps } from "../../Tile";
import { TileEntity } from "../../../aliases/interfaces/TileEntity";
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
import { entitiesSingularTypes } from "../../../constants/entityTypes";
import { OrUndefined } from "../../../aliases/types/OrUndefined";
import { detailsRoutes } from "../../../functions/routes";
import { SharedTileEntityData } from "../../../aliases/interfaces/SharedTileEntityData";
import {
    MovieInfoSection
} from "../../../../features/DetailsPage/components/EntityDetails/HorizontalTile/MovieInfoSection";
import { getYear } from "../../../functions/getYear";
import { MetaData } from "../../MetaData";
import { MovieRating } from "../../Tile/MovieRating";

interface VerticalTileProps {
    tileEntity: OrUndefined<TileEntity>;
}

export const VerticalTile = ({ tileEntity }: VerticalTileProps) => {

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

    const getPersonRoute = (id: SharedTileEntityData["id"]) => detailsRoutes.personDetails(id);
    const getMovieRoute = (id: SharedTileEntityData["id"]) => detailsRoutes.movieDetails(id);

    const sharedMovieEntityProps: Pick<TileProps, "useTwoColumnsLayout"> = {
        useTwoColumnsLayout: true,
    };

    const tilePropsConfigs: TilePropsConfigs = [
        {
            typeGuard: (item): item is SimplefiedMovieItem => (
                (!!item) && (
                    Object.keys(item).length > 1 &&
                    !("production_countries" in item) &&
                    !("genres" in item) &&
                    !("department" in item) &&
                    !("character" in item) &&
                    ("genre_ids" in item)
                )
            ),
            tileProps: (item) => ({
                title: item.title,
                picturePath: item.poster_path,
                detailsRoutePath: getMovieRoute(item.id),
                infoContent: (
                    <MovieInfoSection
                        movieItem={item}
                        genresIds={item.genre_ids}
                        subTitle={getYear(item?.release_date)}
                    />
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
            typeGuard: (item): item is SimplefiedPersonItem => (
                (!!item) && (
                    Object.keys(item).length > 1 &&
                    !("character" in item) &&
                    !("job" in item) &&
                    ("name" in item) &&
                    ("profile_path" in item)
                )
            ),
            tileProps: (item) => ({
                title: item.name,
                picturePath: item.profile_path,
                detailsRoutePath: getPersonRoute(item.id),
                entityType: entitiesSingularTypes.PERSON,
            }),
        },
        {
            typeGuard: (item): item is MovieCastMember => !!item && "character" in item && !("genre_ids" in item),
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
            typeGuard: (item): item is MovieCrewMember => !!item && "job" in item,
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
            typeGuard: (item): item is PersonCastMovieItem => !!item && "character" && "genre_ids" in item,
            tileProps: (item) => ({
                title: item.title,
                picturePath: item.poster_path,
                detailsRoutePath: getMovieRoute(item.id),
                infoContent: (
                    <MovieInfoSection
                        movieItem={item}
                        genresIds={item.genre_ids}
                        subTitle={`${item.character} (${getYear(item?.release_date)})`}
                    />
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
            typeGuard: (item): item is PersonCrewMovieItem => !!item && "department" in item,
            tileProps: (item) => ({
                title: item.title,
                picturePath: item.poster_path,
                detailsRoutePath: getMovieRoute(item.id),
                infoContent: (
                    <MovieInfoSection
                        movieItem={item}
                        genresIds={item.genre_ids}
                        subTitle={`${item.department} (${getYear(item?.release_date)})`}
                    />
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

    const verticalTileProps = (
        tilePropsConfigs.find(
            ({ typeGuard }) => typeGuard(tileEntity!) === true
        )?.tileProps(tileEntity as any)
    );

    return <Tile {...verticalTileProps!} />
};