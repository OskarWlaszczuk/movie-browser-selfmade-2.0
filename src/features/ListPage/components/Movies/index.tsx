import { ListPage } from "..";
import { popularListsEndpoints } from "../../../../common/constants/apiEndpoints";

export const Movies = () => (
    <>
        <ListPage
            searchEntity="movie"
            popularListEndpoint={popularListsEndpoints.movies}
        />
    </>
);