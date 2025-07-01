import { apiEntityPathSegments } from "../../../../common/constants/apiEndpointPaths";
import { EntityDetails } from "../EntityDetails";

export const Movie = () => (
    <EntityDetails entityPathSegment={apiEntityPathSegments.movie} />
);