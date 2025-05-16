import { GenresIds } from "../../aliases/types/genre.types";
import { StyledTile } from "./styled";

interface ProductionCountry {
    iso_3166_1: string;
    name: string;
};
interface TileProps {
    id: number;
    picture: string;
    title: string;
    subTitle?: string | number;
    horizontalLayout?: boolean;
    verticalLayout?: boolean;
    movieDetails?: {
        productionCountries: ProductionCountry[];
        release_date: string;
        genresIds: GenresIds;
        rate: number;
        votesTotal: number;
        overview: string;
    };
    actorDetails?: {
        biography: string;
        birthday: string;
        place_of_birth: string;
    }
};

export const Tile = ({ id, picture, title, subTitle, horizontalLayout, verticalLayout, movieDetails }: TileProps) => {

    return (
        <StyledTile>

        </StyledTile>
    );
};