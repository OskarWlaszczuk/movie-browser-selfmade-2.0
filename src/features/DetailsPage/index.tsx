import { Movie } from "../../common/aliases/interfaces/Movie"
import { Person } from "../../common/aliases/interfaces/Person"
import { TilesListSection } from "../../common/components/TilesListSection";
import { FetchStatus } from "../../common/aliases/types/FetchStatus";
import { Main } from "../../common/components/Main";
import { useCombinedFetchStatus } from "../../common/hooks/useCombinedFetchStatus";
import { nanoid } from "@reduxjs/toolkit";
import { CastMember, CrewMember } from "../../common/functions/renderPersonItem";
import { TilesSectionData } from "../../common/aliases/interfaces/TilesSectionData";

type SectionDataUnion =
    | TilesSectionData<CrewMember>
    | TilesSectionData<CastMember>
    | TilesSectionData<Movie>
    | TilesSectionData<Person>;
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