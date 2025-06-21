import { TilesListSection } from "../../../common/components/TilesListSection";
import { Main } from "../../../common/components/Main";
import { useCombinedFetchStatus } from "../../../common/hooks/useCombinedFetchStatus";
import { Pagination } from "./Pagination";
import { useListSectionProps } from "../hooks/useListSectionProps";
import { popularListsEndpoints } from "../../../common/constants/apiEndpoints";
import { useFetchGenres } from "../../../common/hooks/useFetchGenres";
import { EntityType } from "../../../common/aliases/types/EntityType";
import { useQueryParameter } from "../../../common/hooks/useQueryParameter";
import { ListPageNoResults } from "./ListPageNoResults";
import { SectionHeader } from "../../../common/components/SectionHeader";

type PopularListsEndpoint = typeof popularListsEndpoints[keyof typeof popularListsEndpoints];

interface ListPageProps {
    entityType: EntityType;
    popularListEndpoint: PopularListsEndpoint
}

export const ListPage = ({ entityType, popularListEndpoint }: ListPageProps) => {
    const genresStatus = useFetchGenres();
    const queryParams = useQueryParameter();

    const selectedListSectionData = useListSectionProps({ entityType, popularListEndpoint, queryParams });
    const combinedFetchStatus = useCombinedFetchStatus([...selectedListSectionData.fetchStatuses, genresStatus]);

    const isListEmpty = !selectedListSectionData.listData?.results.length;

    const content = (
        isListEmpty ?
            <ListPageNoResults search={queryParams.search} /> :
            <>
                <TilesListSection list={selectedListSectionData?.listData?.results} titleData={{ isPageTitle: true, text: selectedListSectionData.title }} />
                <Pagination totaPages={selectedListSectionData?.listData?.total_pages} />
            </>
    );

    return (
        <>
            <Main
                combinedFetchStatus={combinedFetchStatus}
                extraLoaderContent={<SectionHeader text={`Search results for ${queryParams.search}`} setAsPageTitle />}
                content={content}
            />
        </>
    );
};