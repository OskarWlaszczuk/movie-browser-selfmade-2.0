import { useParams } from "react-router-dom"
import { DetailsPage } from "../index"
import { useFetchApi } from "../../../common/hooks/useFetchApi";
import { apiUrls } from "../../../common/constants/pictureConfigs";
import { TilesSectionData } from "../../../common/aliases/interfaces/TilesSectionData";
import { CastMember, CrewMember, MovieDetails } from "../../../common/aliases/interfaces/Entities";

export const Movie = () => {
    interface MovieCreditsApiResponse {
        cast: CastMember[];
        crew: CrewMember[];
    }

    const { movieId } = useParams();

    const { status: movieCreditsStatus, data: movieCredits } = useFetchApi<MovieCreditsApiResponse>({
        queryKey: "popularMovies",
        url: `${apiUrls.base}/movie/${movieId}/credits`,
        urlDependencies: [movieId!]
    });

    const { status: movieStatus, data: movie } = useFetchApi<MovieDetails>({
        queryKey: "movieDetails",
        url: `${apiUrls.base}/movie/${movieId}`,
        urlDependencies: [movieId!]
    });

    const cast = movieCredits?.cast;
    const crew = movieCredits?.crew;

    const castSectionData: TilesSectionData<CastMember> = {
        list: cast,
        titleData: {
            text: "cast",
            isPageTitle: false,
        },
    };

    const crewSectionData: TilesSectionData<CrewMember> = {
        list: crew,
        titleData: {
            text: "Crew",
            isPageTitle: false,
        },
    };

    return (
        <DetailsPage
            sectionsData={[castSectionData, crewSectionData]}
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