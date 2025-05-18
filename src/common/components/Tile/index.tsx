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
        rate: number;
        votesTotal: number;
        release_date?: string;
        productionCountries?: ProductionCountry[];
        overview?: string;
    };
    actorDetails?: {
        biography: string;
        birthday: string;
        place_of_birth: string;
    }
};

export const Tile = ({ id, picture, title, subTitle, horizontalLayout, verticalLayout, movieDetails, actorDetails }: TileProps) => {

    return (
        <StyledTile>
            <Picture src={picture} />
            <Title>{title}</Title>
            {subTitle && <SubTitle>{subTitle}</SubTitle>}

        </StyledTile>
    );
};