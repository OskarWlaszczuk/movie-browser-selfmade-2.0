import { ListPage } from "..";
import { PopularPeopleApi } from "../../../../common/aliases/interfaces/TMDBRList";
import { useFetchPopularList } from "../../../../common/hooks/useFetchPopularList";

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