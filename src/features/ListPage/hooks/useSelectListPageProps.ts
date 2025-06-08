import { useQueryParameter } from "../../../common/hooks/useQueryParameter";
import { useFetchPopularList } from "./useFetchPopularList";
import { useFetchResultsProps } from "./useFetchResultsProps";

interface SelectListPagePropsInput {
    popularListProps: ReturnType<typeof useFetchPopularList>
    resultsProps: ReturnType<typeof useFetchResultsProps>
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