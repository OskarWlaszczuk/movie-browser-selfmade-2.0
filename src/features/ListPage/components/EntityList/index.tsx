import { ApiPopularEndpointPath, ApiSearchEndpointPath } from "../../../../common/aliases/types/apiEndpointPaths.types.ts";
import { EntityPluralType } from "../../../../common/aliases/types/entityTypes.types";
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
    popularListApiPath: ApiPopularEndpointPath;
    searchApiPath: ApiSearchEndpointPath;
    entityPluralType: EntityPluralType;
}

export const EntityList = ({ popularListApiPath, searchApiPath, entityPluralType }: EntityListProps) => {
    const genresStatus = useFetchGenres();

    const urlQueryParams = useURLQueryParams();
    const debouncedSearch = useSearchDebounce(urlQueryParams.search, 1000);
    const isSearchResultsDisplay = !!debouncedSearch;

    const popularListQuery = useFetchEntityList({
        listEndpointPath: popularListApiPath,
        entityListName: entityPluralType,
        endpointQueryParams: {
            page: urlQueryParams.pageNumber,
        },
        fetchCondition: !isSearchResultsDisplay,
    });

    const searchResultsQuery = useFetchEntityList({
        listEndpointPath: searchApiPath,
        entityListName: entityPluralType,
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
            `Popular ${entityPluralType}`
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
                successContent={view}
                errorMessage="List not found"
            />
        </>
    );
};