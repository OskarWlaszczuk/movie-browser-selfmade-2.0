import { DetailedMovieItem } from "../../../../../common/aliases/interfaces/movie.types";
import { DetailedPersonItem } from "../../../../../common/aliases/interfaces/person.types";
import { DetailedEntityItem } from "../../../../../common/aliases/types/DetailedEntityItem";
import { OrUndefined } from "../../../../../common/aliases/types/OrUndefined";
import { Tile } from "../../../../../common/components/Tile";
import { MovieRating } from "../../../../../common/components/Tile/MovieRating";
import { MovieEntriesSection } from "../../../../../common/components/TilesListSection/VerticalTile/MovieEntriesSection";
import { entitiesSingularTypes } from "../../../../../common/constants/entityTypes";
import { getYear } from "../../../../../common/functions/getYear";
import { EntityDescription } from "./EntityDescription";
import { DetailedPersonInfoSection } from "./DetailedPersonInfoSection";
import { MetaData } from "../../../../../common/components/MetaData";
import { GenresList } from "../../../../../common/components/Tile/GenresList";
import { TileProps } from "../../../../../common/aliases/interfaces/TileProps";

interface HorizontalTileProps {
    entityDetails: OrUndefined<DetailedEntityItem>;
}

export const HorizontalTile = ({ entityDetails }: HorizontalTileProps) => {

    type TilePropsConfig<ItemType extends DetailedEntityItem> = {
        typeGuard: (item: DetailedEntityItem) => item is ItemType;
        tileProps: (item: ItemType) => TileProps;
    };

    type TilePropsConfigs = [
        TilePropsConfig<DetailedMovieItem>,
        TilePropsConfig<DetailedPersonItem>,
    ];

    const tilePropsConfigs: TilePropsConfigs = [
        {
            typeGuard: (item): item is DetailedMovieItem => !!item && "production_countries" in item,
            tileProps: (item) => ({
                title: item.title,
                picturePath: item.poster_path,
                infoContent: (
                    <>
                        <MetaData>{getYear(item?.release_date)}</MetaData>
                        <MovieEntriesSection detailedMovieItem={item} />
                        <GenresList genresIds={item.genres?.map(({ id }) => id)} />
                        <MovieRating
                            voteAverage={item?.vote_average}
                            voteCount={item?.vote_count}
                        />
                    </>
                ),
                extraContent: <EntityDescription description={item.overview} />,
                entityType: entitiesSingularTypes.MOVIE,
            }),
        },
        {
            typeGuard: (item): item is DetailedPersonItem => !!item && "biography" in item,
            tileProps: (item) => ({
                title: item.name,
                picturePath: item.profile_path,
                infoContent: <DetailedPersonInfoSection detailedPersonItem={item} />,
                extraContent: <EntityDescription description={item.biography} />,
                entityType: entitiesSingularTypes.PERSON,
            }),
        },
    ];

    const horizontalTileProps = (
        tilePropsConfigs.find(
            ({ typeGuard }) => typeGuard(entityDetails!) === true
        )?.tileProps(entityDetails as any)
    );

    return (
        <Tile
            {...horizontalTileProps!}
            useHorizontalLayout
        />
    );
};