import { Movie } from "../../aliases/interfaces/Movie";
import { Person } from "../../aliases/interfaces/Person";
import { GenresIds } from "../../aliases/types/genre.types";
import { Picture, StyledTile, SubTitle, Title } from "./styled";

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
        genresIds: GenresIds;
        rate: Movie["vote_average"];
        votesTotal: Movie["vote_count"];
        releaseDate?: Movie["release_date"];
        productionCountries?: ProductionCountry[];
        overview?: Movie["overview"];
    };
    personDetails?: {
        biography: Person["biography"];
        birthday: Person["birthday"];
        placeOfBirth: Person["place_of_birth"];
    }
};

export const Tile = ({ id, picture, title, subTitle, horizontalLayout, verticalLayout, movieDetails, personDetails }: TileProps) => {

    return (
        <StyledTile>
            <Picture $picture={picture} />
            <Title>{title}</Title>
            {subTitle && <SubTitle>{subTitle}</SubTitle>}

        </StyledTile>
    );
};