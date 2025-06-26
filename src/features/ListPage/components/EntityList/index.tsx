import { PopularEntityListEndpoint, SearchEntityEndpoint } from "../../../../common/aliases/types/endpointsPaths.types";
import { EntityListType } from "../../../../common/aliases/types/entityTypes.types";
import { Main } from "../../../../common/components/Main";
import { SectionHeader } from "../../../../common/components/SectionHeader";
import { useCombinedFetchStatus } from "../../../../common/hooks/useCombinedFetchStatus";
import { useFetchGenres } from "../../../../common/hooks/useFetchGenres";
import { useURLQueryParams } from "../../../../common/hooks/useURLQueryParams";
import { useFetchEntityList } from "../../hooks/useFetchEntityList";
import { useSearchDebounce } from "../../hooks/useSearchDebounce";
import { NoResultsMessage } from "./ListPageNoResults";
import { ListSection } from "./ListSection";

interface EntityListProps {
    popularListEndpoint: PopularEntityListEndpoint;
    searchEndpoint: SearchEntityEndpoint;
    entityListType: EntityListType;
}

export const EntityList = ({ popularListEndpoint, searchEndpoint, entityListType }: EntityListProps) => {
    const genresStatus = useFetchGenres();
    const urlQueryParams = useURLQueryParams();

    const debouncedSearch = useSearchDebounce(urlQueryParams.search, 1000);
    const isSearchResultsDisplay = !!debouncedSearch;

    const popularListQuery = useFetchEntityList({
        entityListEndpoint: popularListEndpoint,
        entityListName: entityListType,
        endpointQueryParams: {
            page: urlQueryParams.pageNumber
        },
        fetchCondition: !isSearchResultsDisplay,
    });

    const searchResultsQuery = useFetchEntityList({
        entityListEndpoint: searchEndpoint,
        entityListName: entityListType,
        endpointQueryParams: {
            page: urlQueryParams.pageNumber,
            query: urlQueryParams.search,
        },
        fetchCondition: isSearchResultsDisplay
    });

    const {
        data: currentListData,
        status: currentListDataStatus,
        isPaused: isCurrentListDataPaused
    } = isSearchResultsDisplay ? searchResultsQuery : popularListQuery;

    const combinedFetchStatus = useCombinedFetchStatus([currentListDataStatus, genresStatus], [isCurrentListDataPaused]);

    const currentSectionTitle = (
        isSearchResultsDisplay ?
            `Search results for ${urlQueryParams.search} (${currentListData?.total_results})` :
            `Popular ${entityListType}`
    );

    const view = (
        isSearchResultsDisplay && currentListData?.total_results === 0 ?
            <NoResultsMessage search={urlQueryParams.search} /> :
            <ListSection
                entityListData={currentListData}
                title={currentSectionTitle}
            />
    );

    return (
        <>
            <Main
                combinedFetchStatus={combinedFetchStatus}
                extraLoaderContent={
                    isSearchResultsDisplay && (
                        <SectionHeader text={`Search results for ${urlQueryParams.search}`} setAsPageTitle />
                    )
                }
                content={view}
                errorMessage="List not found"
            />
        </>
    );
};