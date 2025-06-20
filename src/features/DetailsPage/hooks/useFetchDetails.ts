import { DetailedMovieItem } from "../../../common/aliases/interfaces/movie.types";
import { DetailedPersonItem } from "../../../common/aliases/interfaces/person.types";
import { TileEntityId } from "../../../common/aliases/interfaces/TileEntity";
import { useFetchApi } from "../../../common/hooks/useFetchApi";

type DetailedEntityItem = DetailedMovieItem | DetailedPersonItem;

export const useFetchDetails = <Details extends DetailedEntityItem>(entityId: TileEntityId, endpoint: string) => {
    const { status: detailsStatus, data: details } = useFetchApi<Details>({
        queryKey: "details",
        endpoint,
        urlDependencies: [entityId!]
    });

    return { details, detailsStatus };
};
