import { EntityType } from "../../../common/aliases/types/EntityType";
import { popularListsEndpoints } from "../../../common/constants/apiEndpoints";
import { useQueryParameter } from "../../../common/hooks/useQueryParameter";
import { usePopularListsProps } from "./usePopularListsProps";
import { useResultsListProps } from "./useResultsProps";

type PopularListsEndpoint = typeof popularListsEndpoints[keyof typeof popularListsEndpoints];

interface UseListSectionPropsInput {
    entityType: EntityType
    popularListEndpoint: PopularListsEndpoint
}

export const useListSectionProps = ({ entityType, popularListEndpoint }: UseListSectionPropsInput) => {
    const queryParams = useQueryParameter();

    const resultsListProps = useResultsListProps({ entityType, queryParams });
    const popularListProps = usePopularListsProps({ popularListEndpoint, queryParams });

    return (
        !queryParams.search ?
            popularListProps :
            resultsListProps
    );
};