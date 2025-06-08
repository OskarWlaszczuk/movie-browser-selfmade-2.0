import { useQueryParameter } from "../../../common/hooks/useQueryParameter";
import { usePopularListsProps } from "./usePopularListsProps";
import { useResultsProps } from "./useResultsProps";

interface SelectListPagePropsInput {
    popularListProps: ReturnType<typeof usePopularListsProps>
    resultsProps: ReturnType<typeof useResultsProps>
}
type SelectListPagePropsUnion = SelectListPagePropsInput[keyof SelectListPagePropsInput];

export const useSelectListPageProps = ({ popularListProps, resultsProps }: SelectListPagePropsInput): SelectListPagePropsUnion => {
    const { search } = useQueryParameter();

    return (
        !search ?
            popularListProps :
            resultsProps
    );
};