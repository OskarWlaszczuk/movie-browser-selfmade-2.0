import { ListPage } from "..";
import { popularListsEndpoints } from "../../../../common/constants/apiEndpoints";

export const Movies = () => (
    <>
        <ListPage
            entityType="movie"
            popularListEndpoint={popularListsEndpoints.movies}
        />
    </>
);