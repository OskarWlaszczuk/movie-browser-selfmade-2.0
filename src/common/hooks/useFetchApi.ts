import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../functions/fetchFromAPI";
interface UseFetchApiInput {
    queryKey: string;
    endpoint: string;
    urlDependencies?: (string | number)[];
    fetchCondition?: boolean;
    fetchDelayInSec?: number;
}

const fetchApi = <ResponseType>(fetchDelayInSec: number, endpoint: string) => (
    new Promise<ResponseType>((resolve) => {
        setTimeout(async () => {
            const result = await fetchFromAPI<ResponseType>(endpoint);
            resolve(result);
        }, fetchDelayInSec * 1000);
    })
);

export const useFetchApi = <ResponseType,>({
    queryKey,
    endpoint,
    urlDependencies = [],
    fetchCondition = true,
    fetchDelayInSec = 0,
}: UseFetchApiInput) => {
    const { status, data } = useQuery({
        queryKey: [queryKey, ...urlDependencies],
        queryFn: () => fetchApi<ResponseType>(fetchDelayInSec, endpoint),
        enabled: fetchCondition,
    });

    return { status, data };
};