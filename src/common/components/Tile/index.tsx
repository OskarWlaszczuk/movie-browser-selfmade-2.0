import { StyledTile } from "./styled";

const genresIds = [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770, 53, 10752, 37] as const;

type GenresIds = typeof genresIds;

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