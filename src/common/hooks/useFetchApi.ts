import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../functions/fetchFromAPI";
import { AxiosError } from "axios";
interface UseFetchApiInput {
    queryKey: string;
    endpoint: string;
    urlDependencies?: (string | number)[];
    fetchCondition?: boolean;
    fetchDelayInSec?: number;
}

const fetchApi = <ResponseType>(fetchDelayInSec: number, endpoint: string) => (
    new Promise<ResponseType>((resolve, reject) => {
        setTimeout(async () => {
            try {
                const result = await fetchFromAPI<ResponseType>(endpoint);
                resolve(result);
            } catch (error) {
                reject(error)
            }
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

    const { status, data, isPaused } = useQuery<ResponseType, AxiosError>({
        queryKey: [queryKey, ...urlDependencies, endpoint, fetchDelayInSec],
        queryFn: () => fetchApi<ResponseType>(fetchDelayInSec, endpoint),
        enabled: fetchCondition,
    });

    return { status, data, isPaused };
};