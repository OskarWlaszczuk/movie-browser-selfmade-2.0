import { TilesListSection } from "../../../common/components/TilesListSection";
import { Main } from "../../../common/components/Main";
import { useCombinedFetchStatus } from "../../../common/hooks/useCombinedFetchStatus";
import { Pagination } from "./Pagination";
import { useListSectionProps } from "../hooks/useListSectionProps";
import { useFetchGenres } from "../../../common/hooks/useFetchGenres";
import { EntityType } from "../../../common/aliases/types/EntityType";
import { useQueryParameter } from "../../../common/hooks/useQueryParameter";
import { ListPageNoResults } from "./ListPageNoResults";
import { SectionHeader } from "../../../common/components/SectionHeader";
interface ListPageProps {
    entityType: EntityType;
    popularListEndpoint: string
}

export const ListPage = ({ entityType, popularListEndpoint }: ListPageProps) => {
    const genresStatus = useFetchGenres();
    const queryParams = useQueryParameter();

    const selectedListSectionData = useListSectionProps({ entityType, popularListEndpoint, queryParams });
    const combinedFetchStatus = useCombinedFetchStatus([...selectedListSectionData.fetchStatuses, genresStatus]);

    const isNoResults = selectedListSectionData.listData?.total_results === 0;
    const content = (
        isNoResults ?
            <ListPageNoResults search={queryParams.search} /> :
            <>
                <TilesListSection list={selectedListSectionData?.listData?.results} titleData={{ isPageTitle: true, text: selectedListSectionData.title }} />
                <Pagination />
            </>
    );

    return (
        <>
            <Main
                combinedFetchStatus={combinedFetchStatus}
                extraLoaderContent={
                    queryParams.search && (
                        <SectionHeader text={`Search results for ${queryParams.search}`} setAsPageTitle />
                    )
                }
                content={content}
            />
        </>
    );
};