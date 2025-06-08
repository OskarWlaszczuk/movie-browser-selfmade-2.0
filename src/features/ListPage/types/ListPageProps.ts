import { FetchStatus } from "../../../common/aliases/types/FetchStatus";
import { OrUndefined } from "../../../common/aliases/types/OrUndefined";
import { PeopleOrMovies } from "../../../common/aliases/types/PeopleOrMovies";
import { ListApiResponse } from "./listApi.types";

export interface ListPageProps<ListType extends PeopleOrMovies> {
    title: string;
    listData: OrUndefined<ListApiResponse<ListType>>;
    fetchStatuses: FetchStatus[]
}