import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../functions/fetchFromAPI";
interface UseFetchApiInput {
    queryKey: string;
    url: string;
    urlDependencies?: (string | number)[];
}

//Wyciąganie dynamicznej właściwości już wewnątrz hooka
export const useFetchApi = <ResponseType,>({ queryKey, url, urlDependencies = [] }: UseFetchApiInput) => {
    const { status, data } = useQuery({
        queryKey: [queryKey, ...urlDependencies],
        queryFn: () => fetchFromAPI<ResponseType>(url),
    });

    return { status, data };
};