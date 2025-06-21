import { useLocation, useNavigate } from "react-router-dom";
import { QueryParam } from "../aliases/interfaces/QueryParam";

export const useReplaceQueryParameter = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const replaceQueryParameter = (queryParamsList: QueryParam[]) => {
        const searchParams = new URLSearchParams(location.search);      
        const isSearchEmpty = !queryParamsList[0].value;

        isSearchEmpty ?
            queryParamsList.forEach(({ key }) => {
                searchParams.delete(key)
            }) :
            queryParamsList.forEach(({ key, value }) => {
                searchParams.set(key, value.toString())
            });

        navigate(`${location.pathname}?${searchParams.toString()}`);
    };

    return replaceQueryParameter;
};
