import { SearchQueryParams } from "../../../common/aliases/interfaces/SearchQueryParams";
import { EntityType } from "../../../common/aliases/types/EntityType";
import { usePopularListsProps } from "./usePopularListsProps";
import { useResultsListProps } from "./useResultsProps";
interface UseListSectionPropsInput {
    entityType: EntityType
    popularListEndpoint: string
    queryParams: SearchQueryParams;
}

export const useListSectionProps = ({ entityType, popularListEndpoint, queryParams }: UseListSectionPropsInput) => {
    const selectQueryParam = entityType === "movie" ? "movies" : "people";

    const resultsListProps = useResultsListProps({
        entityType,
        queryParams,
        queryKeyParam: selectQueryParam
    });
    
    const popularListProps = usePopularListsProps({
        popularListEndpoint,
        queryParams,
        queryKeyParam: selectQueryParam
    });

    return (
        !queryParams.search ?
            popularListProps :
            resultsListProps
    );
};