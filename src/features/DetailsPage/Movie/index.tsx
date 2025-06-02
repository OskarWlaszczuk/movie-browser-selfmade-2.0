import { useParams } from "react-router-dom"
import { DetailsPage } from "../index"
import { useFetchApi } from "../../../common/hooks/useFetchApi";
import { apiUrls } from "../../../common/constants/pictureConfigs";
import { TilesSectionData } from "../../../common/aliases/interfaces/TilesSectionData";
import { CastMember, CrewMember } from "../../../common/aliases/interfaces/Entities";

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
            fetchStatuses={[]}
        />
    );
};