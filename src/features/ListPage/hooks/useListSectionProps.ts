import { popularListsEndpoints } from "../../../common/constants/apiEndpoints";
import { useQueryParameter } from "../../../common/hooks/useQueryParameter";
import { usePopularListsProps } from "./usePopularListsProps";
import { useResultsListProps } from "./useResultsProps";

type PopularListsEndpoint = typeof popularListsEndpoints[keyof typeof popularListsEndpoints];

interface UseListSectionPropsInput {
    searchEntity: "movie" | "person";
    popularListEndpoint: PopularListsEndpoint
}

export const useListSectionProps = ({ searchEntity, popularListEndpoint }: UseListSectionPropsInput) => {
    const queryParams = useQueryParameter();

    const resultsListProps = useResultsListProps({ searchEntity, queryParams });
    const popularListProps = usePopularListsProps({ popularListEndpoint, queryParams });

    return (
        !queryParams.search ?
            popularListProps :
            resultsListProps
    );
};