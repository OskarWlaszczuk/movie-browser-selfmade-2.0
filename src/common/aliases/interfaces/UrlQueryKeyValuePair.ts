import { URL_QUERY_PARAM_KEYS } from "../../constants/URL_QUERY_PARAM_KEYS";

export interface UrlQueryKeyValuePair {
    key: typeof URL_QUERY_PARAM_KEYS[keyof typeof URL_QUERY_PARAM_KEYS];
    value: string | number;
}