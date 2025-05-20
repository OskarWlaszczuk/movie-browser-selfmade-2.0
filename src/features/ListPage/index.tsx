import { Movie } from "../../common/aliases/interfaces/Movie";
import { Person } from "../../common/aliases/interfaces/Person";
import { FetchStatus } from "../../common/aliases/types/FetchStatus";
import { SectionHeader } from "../../common/components/SectionHeader";
import { renderMovieItem } from "../../common/functions/renderMovieItem";
import { renderPersonItem } from "../../common/functions/renderPersonItem";
import { renderTilesList } from "../../common/functions/renderTilesList";

interface ListPageProps {
    title: string;
    list: Movie[] | Person[];
    fetchStatuses: FetchStatus[]
}

export const ListPage = ({ title, list, fetchStatuses }: ListPageProps) => {
    const isMoviesList = (list: Movie[] | Person[]): list is Movie[] => {
        return list.length > 0 && "title" in list[0];
    };

    const renderList = (list: Movie[] | Person[]) => (
        isMoviesList(list) ?
            renderTilesList(list, renderMovieItem) :
            renderTilesList(list, renderPersonItem)
    );

    return (
        <>
            <SectionHeader text={title} isMainHeader />
            {renderList(list)}
        </>
    );
};