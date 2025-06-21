import { SearchQueryParams } from "../../../common/aliases/interfaces/SearchQueryParams";
import { EntityType } from "../../../common/aliases/types/EntityType";
import { popularListsEndpoints } from "../../../common/constants/apiEndpoints";
import { usePopularListsProps } from "./usePopularListsProps";
import { useResultsListProps } from "./useResultsProps";

type PopularListsEndpoint = typeof popularListsEndpoints[keyof typeof popularListsEndpoints];

interface UseListSectionPropsInput {
    entityType: EntityType
    popularListEndpoint: PopularListsEndpoint
    queryParams: SearchQueryParams;

}

export const useListSectionProps = ({ entityType, popularListEndpoint, queryParams }: UseListSectionPropsInput) => {
    const resultsListProps = useResultsListProps({ entityType, queryParams });
    const popularListProps = usePopularListsProps({ popularListEndpoint, queryParams });

    return (
        !queryParams.search ?
            popularListProps :
            resultsListProps
    );
};