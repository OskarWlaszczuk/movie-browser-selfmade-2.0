import { ListPage } from "..";
import { usePopularListsProps } from "../../hooks/usePopularListsProps";
import { useResultsProps } from "../../hooks/useResultsProps";
import { useSelectListPageProps } from "../../hooks/useSelectListPageProps";
import { PeopleListApi } from "../../types/listApi.types";

export const People = () => {
    const resultsProps = useResultsProps<PeopleListApi>({ searchType: "person" });
    const popularListProps = usePopularListsProps<PeopleListApi>("/popularPeople.json");

    const selectedListPageProps = useSelectListPageProps({ resultsProps, popularListProps });

    return (
        <>
            <ListPage {...selectedListPageProps} />
        </>
    );
};