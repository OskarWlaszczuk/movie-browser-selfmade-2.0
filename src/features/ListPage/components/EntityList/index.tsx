import { Main } from "../../../../common/components/Main";
import { SectionHeader } from "../../../../common/components/SectionHeader";
import { useCombinedFetchStatus } from "../../../../common/hooks/useCombinedFetchStatus";
import { useFetchGenres } from "../../../../common/hooks/useFetchGenres";
import { useURLQueryParams } from "../../../../common/hooks/useURLQueryParams";
import { useSearchDebounce } from "../../hooks/useSearchDebounce";
import { useSelectListView } from "../../hooks/useSelectListView.js";
import { EntityListProps } from "../../types/EntityListProps.js";

export const EntityList = (entityListProps: EntityListProps) => {
    const genresStatus = useFetchGenres();

    const urlQueryParams = useURLQueryParams();
    const debouncedSearch = useSearchDebounce(urlQueryParams.search, 1000);
    const isSearchResultsDisplay = !!debouncedSearch;

    const { view, currentListStatus, isCurrentListPaused } = useSelectListView({
        ...entityListProps,
        urlQueryParams,
        isSearchResultsDisplay
    });

    const combinedFetchStatus = useCombinedFetchStatus([currentListStatus, genresStatus], [isCurrentListPaused]);

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