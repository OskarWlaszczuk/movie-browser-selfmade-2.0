import { ListPage } from "../index";
import { useFetchApi } from "../../../common/hooks/useFetchApi";
import { PopularPeopleApi } from "../../../common/aliases/interfaces/TMDBRList";

export const People = () => {

    const {
        status: popularPeopleStatus,
        data: popularPeople
    } = useFetchApi<PopularPeopleApi>({ queryKey: "popularPeople", url: "/popularPeople.json" });

    return (
        <ListPage
            title="Popular people"
            list={popularPeople?.results}
            fetchStatuses={[]}
        />
    );
};