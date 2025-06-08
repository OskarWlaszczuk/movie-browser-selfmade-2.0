import { PeopleOrMovies } from "../../../common/aliases/types/PeopleOrMovies";
import { TilesListSection } from "../../../common/components/TilesListSection";
import { Main } from "../../../common/components/Main";
import { useCombinedFetchStatus } from "../../../common/hooks/useCombinedFetchStatus";
import { ListPageProps } from "../types/ListPageProps";

export const ListPage = <ListType extends PeopleOrMovies>({ title, list, fetchStatuses }: ListPageProps<ListType>) => {
    const combinedFetchStatus = useCombinedFetchStatus(fetchStatuses);

    return (
        <>
            <Main
                content={<TilesListSection list={list} titleData={{ isPageTitle: true, text: title }} />}
                combinedFetchStatus={combinedFetchStatus}
            />
        </>
    );
};