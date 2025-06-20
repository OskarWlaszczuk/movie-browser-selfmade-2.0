import { TileEntityId } from "../../../common/aliases/interfaces/TileEntity";
import { DetailedEntityItem } from "../../../common/aliases/types/DetailedEntityItem";
import { useFetchApi } from "../../../common/hooks/useFetchApi";

export const useFetchDetails = (entityId: TileEntityId, endpoint: string) => {
    const { status: detailsStatus, data: details } = useFetchApi<DetailedEntityItem>({
        queryKey: "details",
        endpoint,
        urlDependencies: [entityId!]
    });

    return { details, detailsStatus };
};
