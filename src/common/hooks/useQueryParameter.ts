import { useLocation } from "react-router-dom";
import { QUERY_PARAM_KEYS } from "../constants/QUERY_PARAM_KEYS";

export const useQueryParameter = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const pageNumber = Number(searchParams.get(QUERY_PARAM_KEYS.PAGE) || 1);
    const search = searchParams.get(QUERY_PARAM_KEYS.SEARCH) || "";

    return { search, pageNumber };
};