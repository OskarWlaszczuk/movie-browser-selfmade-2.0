import { popularEntityListEndpoints, searchEntityListEndpoints } from "../../constants/apiEndpoints";

export type SearchEntityEndpoint = typeof searchEntityListEndpoints[keyof typeof searchEntityListEndpoints];
export type PopularEntityListEndpoint = typeof popularEntityListEndpoints[keyof typeof popularEntityListEndpoints];

export type EntityListEndpoint = SearchEntityEndpoint | PopularEntityListEndpoint;