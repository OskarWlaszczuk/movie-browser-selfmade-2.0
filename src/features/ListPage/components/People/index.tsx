import { ListPage } from "..";
import { useFetchPopularList } from "../../hooks/useFetchPopularList";
import { useFetchResultsProps } from "../../hooks/useFetchResultsProps";
import { useSelectListPageProps } from "../../hooks/useSelectListPageProps";
import { PeopleListApi } from "../../types/listApi.types";

export const People = () => {
    const resultsProps = useFetchResultsProps<PeopleListApi>({ searchType: "person" });
    const popularListProps = useFetchPopularList<PeopleListApi>("/popularPeople.json");

    const selectedListPageProps = useSelectListPageProps({ resultsProps, popularListProps });

    return (
        <>
            <ListPage {...selectedListPageProps} />
        </>
    );
};