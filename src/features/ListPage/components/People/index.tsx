import { ListPage } from "..";
import { PopularPeopleApi } from "../../../../common/aliases/interfaces/popularListApi.types";
import { useFetchPopularList } from "../../hooks/useFetchPopularList";

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