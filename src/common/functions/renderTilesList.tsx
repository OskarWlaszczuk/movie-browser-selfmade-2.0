import { JSX } from "react";
import { TilesList } from "../../features/ListPage/Movies/styled"
import { Movie } from "../aliases/interfaces/Movie";
import { Person } from "../aliases/interfaces/Person";

type RenderListItem = (item: Movie | Person) => JSX.Element

export const renderTilesList = (list: Person[] | Movie[], renderListItem: RenderListItem) => {

    const iterateOnList = (list: Person[] | Movie[]) => (
        list.map((item) => renderListItem(item))
    );

    return (
        <TilesList>
            {iterateOnList(list)}
        </TilesList>
    );
};