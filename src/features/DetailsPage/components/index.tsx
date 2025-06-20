
import { nanoid } from "@reduxjs/toolkit";
import { DetailedMovieItem, SimplefiedMovieItem } from "../../../common/aliases/interfaces/movie.types";
import { CastMember, CrewMember, DetailedPersonItem } from "../../../common/aliases/interfaces/person.types";
import { TilesSectionData } from "../../../common/aliases/interfaces/TilesSectionData";
import { FetchStatus } from "../../../common/aliases/types/FetchStatus";
import { useCombinedFetchStatus } from "../../../common/hooks/useCombinedFetchStatus";
import { useFetchGenres } from "../../../common/hooks/useFetchGenres";
import { renderHorizontalTile } from "../functions/renderHorizontalTile";
import { TilesListSection } from "../../../common/components/TilesListSection";
import { Main } from "../../../common/components/Main";

type SectionDataUnion =
    | TilesSectionData<CrewMember>
    | TilesSectionData<CastMember>
    | TilesSectionData<SimplefiedMovieItem>;

interface DetailsPageProps {
    details: DetailedMovieItem | DetailedPersonItem;
    sectionsData: SectionDataUnion[];
    fetchStatuses: FetchStatus[];
}

export const DetailsPage = ({ details, sectionsData, fetchStatuses }: DetailsPageProps) => {
    const genresStatus = useFetchGenres();
    const combinedFetchStatus = useCombinedFetchStatus([...fetchStatuses, genresStatus]);

    return (
        <>
            <Main
                content={
                    <>
                        {renderHorizontalTile(details)}
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