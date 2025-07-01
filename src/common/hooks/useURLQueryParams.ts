import { useLocation } from "react-router-dom";
import { URL_QUERY_PARAM_KEYS } from "../constants/URL_QUERY_PARAM_KEYS";

export const useURLQueryParams = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const URLQueryParamsKeys = ["page", "search"];
    const obje = URLQueryParamsKeys.map((key) => ({
        [key]: searchParams.get(key),
    }))

    const pageNumber = Number(searchParams.get(URL_QUERY_PARAM_KEYS.PAGE) || 1);
    const search = searchParams.get(URL_QUERY_PARAM_KEYS.SEARCH) || "";

    return { search, pageNumber };
};