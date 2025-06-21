import { ListPage } from "..";
import { popularListsEndpoints } from "../../../../common/constants/apiEndpoints";

export const People = () => (
    <>
        <ListPage entityType="person"
            popularListEndpoint={popularListsEndpoints.persons}
        />
    </>
);