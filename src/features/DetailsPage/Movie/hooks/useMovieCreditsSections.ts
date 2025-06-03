import { CastMember, CrewMember } from "../../../../common/aliases/interfaces/Entities";
import { TilesSectionData } from "../../../../common/aliases/interfaces/TilesSectionData";
import { apiUrls } from "../../../../common/constants/pictureConfigs";
import { useFetchApi } from "../../../../common/hooks/useFetchApi";

interface MovieCreditsApiResponse {
    cast: CastMember[];
    crew: CrewMember[];
}

export const useMovieCreditsSections = (movieId: string) => {

    const { status: movieCreditsStatus, data: movieCredits } = useFetchApi<MovieCreditsApiResponse>({
        queryKey: "popularMovies",
        url: `${apiUrls.base}/movie/${movieId}/credits`,
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

    const creditsSectionsData = [castSectionData, crewSectionData];

    return { creditsSectionsData, movieCreditsStatus };
};