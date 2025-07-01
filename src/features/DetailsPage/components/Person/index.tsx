import { apiEntityPathSegments } from "../../../../common/constants/apiEndpointPaths";
import { EntityDetails } from "../EntityDetails";

export const Person = () => (
    <EntityDetails entityPathSegment={apiEntityPathSegments.person} />
);