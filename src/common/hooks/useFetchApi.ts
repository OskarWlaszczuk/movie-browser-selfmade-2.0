import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../functions/fetchFromAPI";
interface UseFetchApiInput {
    queryKey: string;
    url: string;
    urlDependencies?: (string | number)[];
    fetchCondition?: boolean;
}

export const useFetchApi = <ResponseType,>({ queryKey, url, urlDependencies = [], fetchCondition = true }: UseFetchApiInput) => {
    const { status, data } = useQuery({
        queryKey: [queryKey, ...urlDependencies],
        queryFn: () => fetchFromAPI<ResponseType>(url),
        enabled: fetchCondition,
    });

    return { status, data };
};