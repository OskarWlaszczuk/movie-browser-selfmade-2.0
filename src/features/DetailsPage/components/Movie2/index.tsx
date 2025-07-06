import { useParams } from "react-router-dom"
import { useFetchEntityProfile } from "../../hooks/useFetchDetailsPageData";
import { EntityLinksList } from "../../../../common/components/EntityLinksList";
import { HorizontalTile } from "../EntityDetails/HorizontalTile";
import { useCombinedFetchStatus } from "../../../../common/hooks/useCombinedFetchStatus";
import { Main } from "../../../../common/components/Main";
import { InfoTabs, TabConfig } from "./InfoTabs";
import { DetailedMovieItem } from "../../../../common/aliases/interfaces/movie.types";
import { MovieCredits } from "../../types/credits.types";
import { OrUndefined } from "../../../../common/aliases/types/OrUndefined";

interface GroupedMovieCrewProps {
    crew: OrUndefined<MovieCredits["crew"]>;
}

const GroupedMovieCrew = ({ crew }: GroupedMovieCrewProps) => {
     const departments = [
            ...new Set(
                crew
                    ?.map(({ department }) => department)
                    .filter(Boolean)
            )
    ];

        const groupedDepartments = departments.map((department) => {
            const members = crew
                ?.filter((member) => member.department === department)
                .map(({ name, id }) => ({ name, routePath: `/${department.replaceAll(" ", "-").toLowerCase()}/${id}` }));

            return { department, members };
        });

    return (
            <>
                {groupedDepartments.map(({ department, members }) => (
                    <div key={department}>
                        <h3>{department}</h3>
                        <EntityLinksList entities={members} />
                    </div>
                ))}
            </>
    );
};

export const Movie2 = () => {
    const { id, tabCategory } = useParams();

    const {
        details: movieDetails,
        credits: movieCredits,
        profileStatuses: movieProfileStatuses,
        profilePausedFlags: movieProfilePausedFlags,
    } = useFetchEntityProfile<DetailedMovieItem, MovieCredits>("movie", id!);

    const cast = movieCredits?.cast?.map(({ name, id }) => ({ name, routePath: `/actor/${id}` }));
    const CastSection = <EntityLinksList entities={cast!} />;

   const defaultTabCategory = "cast";
    const movieTabsConfig: TabConfig[] = [
        {
            category: defaultTabCategory,
            view: CastSection,
        },
        {
            category: "crew",
            view: <GroupedMovieCrew crew={movieCredits?.crew} />,
        }
    ];
    const combinedFetchStatus = useCombinedFetchStatus([...movieProfileStatuses], movieProfilePausedFlags);

    return (
        <>
            <Main
                successContent={
                    <>
                        <HorizontalTile entityDetails={movieDetails} />
                        <InfoTabs
                            tabsConfig={movieTabsConfig}
                            tabCategory={tabCategory || defaultTabCategory}
                            id={id!}
                        />
                    </>
                }
                combinedFetchStatus={combinedFetchStatus}
                errorMessage="Details not found"
            />
        </>
    );
};

    // const getCreditsSections = (movieCredits:OrUndefined<MovieCredits>) => {
    //     const cast = movieCredits?.cast?.map(({ name, id }) => ({ name, routePath: `/actor/${id}` }));
    //     const crew = movieCredits?.crew?.map(({ name, id, department }) => ({ name, routePath: `/${department.replaceAll(" ", "-").toLowerCase()}/${id}` }));

    //     const CastSection = <EntityLinksList entities={cast!} />;
    //     const CrewSection = <EntityLinksList entities={crew!} />;

    //     return { CastSection, CrewSection };
    // };
    
    // const { CastSection, CrewSection } = getCreditsSections(movieCredits);