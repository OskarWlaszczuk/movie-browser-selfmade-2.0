import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../functions/fetchFromAPI";
interface UseFetchApiInput {
    queryKey: string;
    endpoint: string;
    urlDependencies?: (string | number)[];
    fetchCondition?: boolean;
    fetchDelayInSec?: number;
}

export const useFetchApi = <ResponseType,>({
    queryKey,
    endpoint,
    urlDependencies = [],
    fetchCondition = true,
    fetchDelayInSec = 0,
}: UseFetchApiInput) => {
    const { status, data } = useQuery({
        queryKey: [queryKey, ...urlDependencies],
        queryFn: () =>
            new Promise<ResponseType>((resolve) => {
                setTimeout(async () => {
                    const result = await fetchFromAPI<ResponseType>(endpoint);
                    resolve(result);
                }, fetchDelayInSec * 1000);
            }),
        enabled: fetchCondition,
    });

    return { status, data };
};