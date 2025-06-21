import { TilesListSection } from "../../../common/components/TilesListSection";
import { Main } from "../../../common/components/Main";
import { useCombinedFetchStatus } from "../../../common/hooks/useCombinedFetchStatus";
import { Pagination } from "./Pagination";
import { useListSectionProps } from "../hooks/useListSectionProps";
import { popularListsEndpoints } from "../../../common/constants/apiEndpoints";
import { useFetchGenres } from "../../../common/hooks/useFetchGenres";

type PopularListsEndpoint = typeof popularListsEndpoints[keyof typeof popularListsEndpoints];

interface ListPageProps {
    searchEntity: "movie" | "person";
    popularListEndpoint: PopularListsEndpoint
}

export const ListPage = ({ searchEntity, popularListEndpoint }: ListPageProps) => {
    const genresStatus = useFetchGenres();

    const selectedListSectionData = useListSectionProps({ searchEntity, popularListEndpoint });
    const combinedFetchStatus = useCombinedFetchStatus([...selectedListSectionData.fetchStatuses, genresStatus]);

    return (
        <>
            <Main
                content={
                    <>
                        <TilesListSection list={selectedListSectionData?.listData?.results} titleData={{ isPageTitle: true, text: selectedListSectionData.title }} />
                        <Pagination totaPages={selectedListSectionData?.listData?.total_pages} />
                    </>
                }
                combinedFetchStatus={combinedFetchStatus}
            />
        </>
    );
};