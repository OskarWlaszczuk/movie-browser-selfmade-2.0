import { ListPage } from "..";
import { popularListsEndpoints } from "../../../../common/constants/apiEndpoints";

export const People = () => (
    <>
        <ListPage searchEntity="person"
            popularListEndpoint={popularListsEndpoints.persons}
        />
    </>
);