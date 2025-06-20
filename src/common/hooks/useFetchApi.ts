import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../functions/fetchFromAPI";
interface UseFetchApiInput {
    queryKey: string;
    endpoint: string;
    urlDependencies?: (string | number)[];
    fetchCondition?: boolean;
}

export const useFetchApi = <ResponseType,>({ queryKey, endpoint, urlDependencies = [], fetchCondition = true }: UseFetchApiInput) => {
    const { status, data } = useQuery({
        queryKey: [queryKey, ...urlDependencies],
        queryFn: () => fetchFromAPI<ResponseType>(endpoint),
        enabled: fetchCondition,
    });

    return { status, data };
};