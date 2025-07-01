import { useLocation, useNavigate } from "react-router-dom";
import { UrlQueryKeyValuePair } from "../aliases/interfaces/UrlQueryKeyValuePair";
import { getURLPath } from "../functions/getURLPath";

export const useReplaceQueryParameter = () => {
    const navigate = useNavigate();
    const { pathname, search } = useLocation();

    const replaceQueryParameter = (queryParamsList: UrlQueryKeyValuePair[]) => {
        const searchParams = new URLSearchParams(search);
        const isSearchEmpty = !queryParamsList[0].value;
        const basePath = `/${getURLPath(pathname)}`;

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
