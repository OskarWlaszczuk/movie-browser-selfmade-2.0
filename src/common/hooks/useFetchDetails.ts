import { MovieDetails } from "../aliases/interfaces/movie.types";
import { PersonDetails } from "../aliases/interfaces/person.types";
import { apiUrls } from "../constants/pictureConfigs";
import { useFetchApi } from "./useFetchApi";

export const useFetchDetails = <Details extends MovieDetails | PersonDetails>(entityId: string, endpoint: string) => {
    const { status: detailsStatus, data: details } = useFetchApi<Details>({
        queryKey: "details",
        url: `${apiUrls.base}/${endpoint}`,
        urlDependencies: [entityId!]
    });

    return { details, detailsStatus };
};
