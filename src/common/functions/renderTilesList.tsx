import { JSX } from "react";
import { TilesList } from "../../features/ListPage/Movies/styled";
import { Movie } from "../aliases/interfaces/Movie";
import { Person } from "../aliases/interfaces/Person";

type RenderListItem<ListItem> = (item: ListItem) => JSX.Element;

export const renderTilesList = <ListItem extends Movie | Person>(
    list: ListItem[],
    renderListItem: RenderListItem<ListItem>
) => {
    return (
        <TilesList>
            {list.map((item) => renderListItem(item))}
        </TilesList>
    );
};
