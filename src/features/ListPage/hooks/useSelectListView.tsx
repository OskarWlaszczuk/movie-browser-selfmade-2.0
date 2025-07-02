import { URLQueryParams } from "../../../common/aliases/interfaces/URLSearchParams";
import { NoResultsMessage } from "../components/EntityList/ListPageNoResults";
import { ListSection } from "../components/EntityList/ListSection";
import { EntityListProps } from "../types/EntityListProps";
import { useFetchEntityList } from "./useFetchEntityList";

interface UseSelectListQueryProps extends EntityListProps {
    urlQueryParams: URLQueryParams;
    isSearchResultsDisplay: boolean;
}

export const useSelectListView = ({
    popularListApiPath,
    searchApiPath,
    entityPluralType,
    urlQueryParams,
    isSearchResultsDisplay
}: UseSelectListQueryProps) => {

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
        status: currentListStatus,
        isPaused: isCurrentListPaused
    } = isSearchResultsDisplay ? searchResultsQuery : popularListQuery;

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

    return {
        view,
        currentListStatus,
        isCurrentListPaused
    }
};