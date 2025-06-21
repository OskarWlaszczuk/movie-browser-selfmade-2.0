import { QUERY_PARAM_KEYS } from "../../constants/QUERY_PARAM_KEYS";

export interface QueryParam {
    key: typeof QUERY_PARAM_KEYS[keyof typeof QUERY_PARAM_KEYS];
    value: string | number;
}