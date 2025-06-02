import { Movie } from "../../common/aliases/interfaces/Movie";
import { Person } from "../../common/aliases/interfaces/Person";
import { FetchStatus } from "../../common/aliases/types/FetchStatus";
import { OrUndefined } from "../../common/aliases/types/OrUndefined";
import { Main } from "../../common/components/Main";
import { TilesListSection } from "../../common/components/TilesListSection";
import { useCombinedFetchStatus } from "../../common/hooks/useCombinedFetchStatus";

interface ListPageProps {
    title: string;
    list: OrUndefined<Movie[] | Person[]>;
    fetchStatuses: FetchStatus[]
}

export const ListPage = ({ title, list, fetchStatuses }: ListPageProps) => {
    const isMoviesList = (list: Movie[] | Person[]): list is Movie[] => {
        return list?.length > 0 && "title" in list?.[0];
    };

    const titleData = { isPageTitle: true, text: title };

    const tilesListSectionElement = (
        isMoviesList(list!) ?
            <TilesListSection list={list} titleData={titleData} /> :
            <TilesListSection list={list} titleData={titleData} />

    );

    const combinedFetchStatus = useCombinedFetchStatus(fetchStatuses);

    return (
        <>
            <Main
                content={<>{tilesListSectionElement}</>}
                combinedFetchStatus={combinedFetchStatus}
            />
        </>
    );
};