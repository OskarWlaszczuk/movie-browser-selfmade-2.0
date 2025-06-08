import { FetchStatus } from "../../../common/aliases/types/FetchStatus";
import { OrUndefined } from "../../../common/aliases/types/OrUndefined";
import { PeopleOrMovies } from "../../../common/aliases/types/PeopleOrMovies";

export interface ListPageProps<ListType extends PeopleOrMovies> {
    title: string;
    list: OrUndefined<ListType>;
    fetchStatuses: FetchStatus[]
}