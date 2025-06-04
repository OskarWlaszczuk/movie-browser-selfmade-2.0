import { ListPage } from "..";
import { useFetchPopularList } from "../../hooks/useFetchPopularList";
import { PopularPeopleApi } from "../../types/popularListApi.types";

export const People = () => {
    const { popularList, popularListStatus } = useFetchPopularList<PopularPeopleApi>("/popularPeople.json");

    return (
        <ListPage
            title="Popular people"
            list={popularList?.results}
            fetchStatuses={[popularListStatus]}
        />
    );
};