import { apiEntityPathSegments, apiPopularEndpointPaths, apiSearchEndpointPaths } from "../../constants/apiEndpointPaths";

export type ApiEntityPathSegment = typeof apiEntityPathSegments[keyof typeof apiEntityPathSegments];
export type ApiPopularEndpointPath = typeof apiPopularEndpointPaths[keyof typeof apiPopularEndpointPaths];
export type ApiSearchEndpointPath = typeof apiSearchEndpointPaths[keyof typeof apiSearchEndpointPaths];