import { useLocation, useNavigate } from "react-router-dom";
import { QueryParam } from "../aliases/interfaces/QueryParam";
import { getURLPath } from "../functions/getURLPath";

export const useReplaceQueryParameter = () => {
    const navigate = useNavigate();
    const { pathname, search } = useLocation();

    const replaceQueryParameter = (queryParamsList: QueryParam[]) => {
        const searchParams = new URLSearchParams(search);
        const isSearchEmpty = !queryParamsList[0].value;
        const basePath = `${getURLPath(pathname)}/`;

        isSearchEmpty ?
            queryParamsList.forEach(({ key }) => {
                searchParams.delete(key)
            }) :
            queryParamsList.forEach(({ key, value }) => {
                searchParams.set(key, value.toString())
            });

        navigate(`${basePath}?${searchParams.toString()}`);
    };

    return replaceQueryParameter;
};
