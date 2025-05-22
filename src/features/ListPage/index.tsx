import { Movie } from "../../common/aliases/interfaces/Movie";
import { Person } from "../../common/aliases/interfaces/Person";
import { FetchStatus } from "../../common/aliases/types/FetchStatus";
import { Main } from "../../common/components/Main";
import { renderMovieItem } from "../../common/functions/renderMovieItem";
import { renderPersonItem } from "../../common/functions/renderPersonItem";
import { TilesListSection } from "../../common/functions/TilesListSection";
import { useCombinedFetchStatus } from "../../common/hooks/useCombinedFetchStatus";

interface ListPageProps {
    title: string;
    list: Movie[] | Person[];
    fetchStatuses: FetchStatus[]
}

export const ListPage = ({ title, list, fetchStatuses }: ListPageProps) => {
    const isMoviesList = (list: Movie[] | Person[]): list is Movie[] => {
        return list.length > 0 && "title" in list[0];
    };

    const tilesListSectionElement = (
        isMoviesList(list) ?
            <TilesListSection list={list} titleData={{ isPageTitle: true, text: title }} renderListItem={renderMovieItem} /> :
            <TilesListSection list={list} titleData={{ isPageTitle: true, text: title }} renderListItem={renderPersonItem} />

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