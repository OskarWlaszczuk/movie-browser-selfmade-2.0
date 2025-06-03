import { useParams } from "react-router-dom"
import { DetailsPage } from "../index"
import { useFetchApi } from "../../../common/hooks/useFetchApi";
import { apiUrls } from "../../../common/constants/pictureConfigs";
import { MovieDetails, MovieItem } from "../../../common/aliases/interfaces/Entities";
import { useMovieCreditsSections } from "./hooks/useMovieCreditsSections";

export const Movie = () => {
    const { movieId } = useParams();

    const { creditsSectionsData, movieCreditsStatus } = useMovieCreditsSections(movieId!)

    const { status: movieStatus, data: movie } = useFetchApi<MovieDetails>({
        queryKey: "movieDetails",
        url: `${apiUrls.base}/movie/${movieId}`,
        urlDependencies: [movieId!]
    });

    return (
        <DetailsPage
            details={movie!}
            sectionsData={creditsSectionsData}
            fetchStatuses={[movieCreditsStatus, movieStatus]}
        />
    );
};

// interface ApiConfig {
//     // queryKey: string;
//     url: string;
//     urlDependencies?: string | number;
// }

// const useFetchApis = <ResponseType,>(apiConfigs: ApiConfig[]) => {
//     // const queryKeys = apiConfigs.map(({ queryKey, urlDependencies }) => queryKey);
//     const urls = apiConfigs.map(({ url }) => url);
//     const dependencies = apiConfigs.map(({ urlDependencies }) => urlDependencies);

//     const { status, data } = useQuery({
//         queryKey: ["queryKey", ...dependencies],
//         queryFn: () => fetchFromAPIs(urls),
//     });

//     return { status, data };
// };
// const apiConfigs: ApiConfig[] = [
//     {
//         url: `${apiUrls.base}/movie/${movieId}/credits`,
//         urlDependencies: movieId,
//     },
//     {
//         url: `${apiUrls.base}/movie/${movieId}`,
//         urlDependencies: movieId,
//     },
// ]
// const { status, data } = useFetchApis(apiConfigs);
// const credits1 = data?.[0];
// const details2 = data?.[1];

// // const [credits1, details2] = data
// console.log(credits1, details2)