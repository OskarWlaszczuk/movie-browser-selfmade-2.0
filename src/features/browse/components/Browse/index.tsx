import { useQueries } from "@tanstack/react-query";
import { Main } from "../../../../common/components/Main"
import { MediaCarousel } from "../../../../common/components/MediaCarousel";
import { ListSectionConfig } from "../../../../common/aliases/types/ListSectionConfig";
import axios from "axios";
import { useCombinedFetchStatus } from "../../../../common/hooks/useCombinedFetchStatus";

export type MediaType = "movie" | "person";
export type MediaListType = "top_rated" | "upcoming" | "now_playing" | "popular";

interface ListFetchParams {
    mediaType: MediaType;
    listType: MediaListType;
}

const fetchList = async ({ mediaType, listType }: ListFetchParams) => {

    const listEndpoint = `https://api.themoviedb.org/3/${mediaType}/${listType}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTYxZDVhMWQ5OGRiYjlmZTQ1MmRkYmI5ZjY0Yzk2OSIsIm5iZiI6MTcyMzAzNzg2Ni4wODUsInN1YiI6IjY2YjM3OGFhNWQ4M2FhNTA1ZTI3ZDMxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1WAl4QsNEZhR_4-FocLBojz0ujdAJxd6Jjtjjgx6-Lg'
        }
    };

    const response = await axios.get(listEndpoint, options);
    return response.data;
};

interface BrowseProps {
    mediaType: "movie" | "person";
    mediaConfig: ListSectionConfig[];
}

export const MediaBrowse = ({ mediaType, mediaConfig }: BrowseProps) => {
    const listsQueries = useQueries({
        queries: mediaConfig.map(({ listType }) => ({
            queryKey: [`${mediaType} list`, mediaType, listType],
            queryFn: () => fetchList({ mediaType, listType }),
        }))
    });

    const statuses = listsQueries?.map(({ status }) => status);
    const pausedFlags = listsQueries?.map(({ isPaused }) => isPaused);
    const mediaLists = listsQueries.map(({ data }) => data);

    const combinedFetchStatus = useCombinedFetchStatus(statuses, pausedFlags);

    const mediaSections = mediaConfig.map((config, index) => ({
        ...config,
        mediaList: mediaLists[index]?.results,
    }));

    return (
        <>
            <Main
                combinedFetchStatus={combinedFetchStatus}
                successContent={(
                    <>
                        {
                            mediaSections.map(({ title, fullSectionLink, mediaList }) => (
                                <MediaCarousel
                                    title={title}
                                    fullSectionLink={fullSectionLink}
                                    mediaList={mediaList}
                                />
                            ))
                        }
                    </>
                )}
                errorMessage=""
            />
        </>
    );
};