import { Tile2, TileProps2 } from "../../Tile";
import { TileEntity } from "../../../aliases/interfaces/TileEntity";
import { SimplefiedMovieItem } from "../../../aliases/interfaces/movie.types";
import { CastMember, CrewMember, SimplefiedPersonItem } from "../../../aliases/interfaces/person.types";
import { entitiesSingularTypes } from "../../../constants/entityTypes";
import { OrUndefined } from "../../../aliases/types/OrUndefined";
import { detailsRoutes } from "../../../functions/routes";
import { SharedTileEntityData } from "../../../aliases/interfaces/SharedTileEntityData";

interface VerticalTileProps {
    tileEntity: OrUndefined<TileEntity>;
}

export const VerticalTile = ({ tileEntity }: VerticalTileProps) => {

    type TilePropsConfig<ItemType extends TileEntity> = {
        typeGuard: (item: TileEntity) => item is ItemType;
        tileProps: (item: ItemType) => TileProps2;
    };

    type TilePropsConfigs = [
        TilePropsConfig<SimplefiedMovieItem>,
        TilePropsConfig<SimplefiedPersonItem>,
        TilePropsConfig<CastMember>,
        TilePropsConfig<CrewMember>,
    ];

    const getPersonRoute = (id: SharedTileEntityData["id"]) => detailsRoutes.personDetails(id);
    const getMovieRoute = (id: SharedTileEntityData["id"]) => detailsRoutes.movieDetails(id);

    const tilePropsConfigs: TilePropsConfigs = [
        {
            typeGuard: (item): item is SimplefiedMovieItem => !!item && "genre_ids" in item,
            tileProps: (item) => ({
                title: item.title,
                picturePath: item.poster_path,
                detailsPath: getMovieRoute(item.id),
                // subTitleContent: <MovieInfoSection detailedMovieItem={item} />,
                // extraContent: <EntityOverview description={item.overview} />,
                entityType: entitiesSingularTypes.MOVIE,
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
                detailsPath: getPersonRoute(item.id),

                // subTitleContent: <PersonInforSection detailedPersonItem={item} />,
                // extraContent: <EntityOverview description={item.biography} />,
                entityType: entitiesSingularTypes.PERSON,
            }),
        },
        {
            typeGuard: (item): item is CastMember => !!item && "character" in item,
            tileProps: (item) => ({
                title: item.name,
                picturePath: item.profile_path,
                detailsPath: getPersonRoute(item.id),

                // subTitleContent: <MovieInfoSection detailedMovieItem={item} />,
                // extraContent: <EntityOverview description={item.overview} />,
                entityType: entitiesSingularTypes.PERSON,
            }),
        },
        {
            typeGuard: (item): item is CrewMember => !!item && "job" in item,
            tileProps: (item) => ({
                title: item.name,
                picturePath: item.profile_path,
                detailsPath: getPersonRoute(item.id),
                // subTitleContent: <MovieInfoSection detailedMovieItem={item} />,
                // extraContent: <EntityOverview description={item.overview} />,
                entityType: entitiesSingularTypes.PERSON,
            }),
        },
    ];

    const verticalTileProps = (
        tilePropsConfigs.find(
            ({ typeGuard }) => typeGuard(tileEntity!) === true
        )?.tileProps(tileEntity as any)
    );

    return (
        <Tile2
            {...verticalTileProps!}

        />
    );
};