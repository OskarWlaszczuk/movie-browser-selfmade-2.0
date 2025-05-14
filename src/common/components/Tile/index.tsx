const genresIds = [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770, 53, 10752, 37] as const;

type GenresIds = typeof genresIds;

interface TileProps {
    id: number;
    picture: string;
    title: string;
    subTitle?: string | number;
    extraContent?: {
        genresIds: GenresIds;
        rate: number;
        votesTotal: number;
        overview: string;
    };
    horizontalLayout?: boolean;
    verticalLayout?: boolean;
};

export const Tile = ({ id, picture, title, subTitle, extraContent, horizontalLayout, verticalLayout }: TileProps) => {
    return (
        <>

        </>
    );
};