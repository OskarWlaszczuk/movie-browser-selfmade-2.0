import { MovieDetails } from "../../../common/aliases/interfaces/movie.types";
import { DetailedPersonItem } from "../../../common/aliases/interfaces/person.types";
import { apiUrls } from "../../../common/constants/pictureConfigs";
import { useFetchApi } from "../../../common/hooks/useFetchApi";

export const useFetchDetails = <Details extends MovieDetails | DetailedPersonItem>(entityId: string, endpoint: string) => {
    const { status: detailsStatus, data: details } = useFetchApi<Details>({
        queryKey: "details",
        url: `${apiUrls.base}/${endpoint}`,
        urlDependencies: [entityId!]
    });

    return { details, detailsStatus };
};
