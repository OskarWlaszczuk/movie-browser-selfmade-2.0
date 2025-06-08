import { useLocation, useNavigate } from "react-router-dom";
import { QueryParams } from "../aliases/interfaces/QueryParams";

export const useReplaceQueryParameter = () => {
    const navigate = useNavigate();
    const location = useLocation();


    const replaceQueryParameter = (queryParamsList: QueryParams[]) => {
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
