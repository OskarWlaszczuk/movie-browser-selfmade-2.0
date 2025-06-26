import { PopularEntityListEndpoint, SearchEntityEndpoint } from "../../../../common/aliases/types/Endpoints";
import { EntityListType } from "../../../../common/aliases/types/EntityType";
import { Main } from "../../../../common/components/Main";
import { SectionHeader } from "../../../../common/components/SectionHeader";
import { useCombinedFetchStatus } from "../../../../common/hooks/useCombinedFetchStatus";
import { useFetchGenres } from "../../../../common/hooks/useFetchGenres";
import { useQueryParameter } from "../../../../common/hooks/useQueryParameter";
import { renderListSection } from "../../functions/renderListSection";
import { useFetchEntityList } from "../../hooks/useFetchEntityList";
import { useSearchDebounce } from "../../hooks/useSearchDebounce";

interface EntityListProps {
    popularListEndpoint: PopularEntityListEndpoint;
    searchEndpoint: SearchEntityEndpoint;
    entityListType: EntityListType;
}

export const EntityList = ({ popularListEndpoint, searchEndpoint, entityListType }: EntityListProps) => {
    const genresStatus = useFetchGenres();
    const urlQueryParams = useQueryParameter();

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

    const currentListQuery = isSearchResultsDisplay ? searchResultsQuery : popularListQuery;

    const combinedFetchStatus = useCombinedFetchStatus([currentListQuery.status, genresStatus], [currentListQuery.isPaused]);

    return (
        <>
            <Main
                combinedFetchStatus={combinedFetchStatus}
                extraLoaderContent={
                    isSearchResultsDisplay && (
                        <SectionHeader text={`Search results for ${urlQueryParams.search}`} setAsPageTitle />
                    )
                }
                content={
                    renderListSection({
                        currentListQuery: currentListQuery,
                        entityListType,
                        urlQueryParams,
                        isSearchResultsDisplay
                    })
                }
                errorMessage="List not found"
            />
        </>
    );
};