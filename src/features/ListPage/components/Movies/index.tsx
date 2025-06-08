import { useFetchPopularList } from "../../hooks/useFetchPopularList";
import { useFetchGenres } from "../../../../common/hooks/useFetchGenres";
import { ListPage } from "..";
import { ListApiUnion, MoviesListApi } from "../../types/listApi.types";
import { useQueryParameter } from "../../../../common/hooks/useQueryParameter";
import { useFetchApi } from "../../../../common/hooks/useFetchApi";
import { apiUrls } from "../../../../common/constants/pictureConfigs";
import { OrUndefined } from "../../../../common/aliases/types/OrUndefined";
import { PeopleOrMovies } from "../../../../common/aliases/types/PeopleOrMovies";
import { FetchStatus } from "../../../../common/aliases/types/FetchStatus";
import { useFetchResults } from "../../hooks/useFetchResults";

export const Movies = () => {
    const { search, pageNumber } = useQueryParameter();

    const { popularList, popularListStatus } = useFetchPopularList<MoviesListApi>("/popularMovies.json");
    const genresStatus = useFetchGenres();

    const { resultsDataStatus, resultsData } = useFetchResults({ searchType: "movie" });
    interface ListPageProps {
        title: string;
        list: OrUndefined<PeopleOrMovies>;
        fetchStatuses: FetchStatus[]
    }
    const resultsList = resultsData?.results;

    const getListPageProps = (): ListPageProps => (
        !search ?
            {
                title: "Popular movies",
                list: popularList?.results,
                fetchStatuses: [popularListStatus, genresStatus]
            } :
            {
                title: `Search for "${search}" (${resultsList?.length})`,
                list: resultsList,
                fetchStatuses: [resultsDataStatus]
            }
    );

    const listPageProps = getListPageProps();
    return (
        <>
            <ListPage
                {...listPageProps}
            />
        </>
    );
};