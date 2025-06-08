import { PeopleOrMovies } from "../../../common/aliases/types/PeopleOrMovies";
import { TilesListSection } from "../../../common/components/TilesListSection";
import { Main } from "../../../common/components/Main";
import { useCombinedFetchStatus } from "../../../common/hooks/useCombinedFetchStatus";
import { ListPageProps } from "../types/ListPageProps";
import { Pagination } from "./Pagination";

export const ListPage = <ListType extends PeopleOrMovies>({ title, listData, fetchStatuses }: ListPageProps<ListType>) => {
    const combinedFetchStatus = useCombinedFetchStatus(fetchStatuses);

    return (
        <>
            <Main
                content={
                    <>
                        <TilesListSection list={listData?.results} titleData={{ isPageTitle: true, text: title }} />
                        <Pagination totaPages={listData?.total_pages} />
                    </>
                }
                combinedFetchStatus={combinedFetchStatus}
            />
        </>
    );
};