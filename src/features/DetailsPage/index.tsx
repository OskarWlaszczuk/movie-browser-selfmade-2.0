import { TilesListSection } from "../../common/components/TilesListSection";
import { FetchStatus } from "../../common/aliases/types/FetchStatus";
import { Main } from "../../common/components/Main";
import { useCombinedFetchStatus } from "../../common/hooks/useCombinedFetchStatus";
import { nanoid } from "@reduxjs/toolkit";
import { TilesSectionData } from "../../common/aliases/interfaces/TilesSectionData";
import { CastMember, CrewMember, Movie, Person } from "../../common/aliases/interfaces/Entities";

type SectionDataUnion =
    | TilesSectionData<CrewMember>
    | TilesSectionData<CastMember>
    | TilesSectionData<Movie>
;
interface DetailsPageProps {
    details?: Movie | Person;
    sectionsData: SectionDataUnion[];
    fetchStatuses: FetchStatus[];
}

export const DetailsPage = ({ details, sectionsData, fetchStatuses }: DetailsPageProps) => {

    const combinedFetchStatus = useCombinedFetchStatus(fetchStatuses);

    return (
        <>
            <Main
                content={
                    <>

                        {
                            sectionsData.map(sectionData => (
                                <TilesListSection key={nanoid()} {...sectionData} />
                            ))
                        }
                    </>
                }
                combinedFetchStatus={combinedFetchStatus}
            />
        </>
    );
};