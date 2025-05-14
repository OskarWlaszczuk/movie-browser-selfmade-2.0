const genresIDs = [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770, 53, 10752, 37] as const;

type GenresIDs = typeof genresIDs;

interface TileProps {
    picture: string;
    title: string;
    subTitle?: string | number;
    extraContent?: {
        genresIDs: GenresIDs;
        rate: number;
        votes: number;
    }
    horizontalLayout?: boolean;
    verticalLayout?: boolean;
};

export const Tile = ({ picture, title, subTitle, extraContent, horizontalLayout, verticalLayout }: TileProps) => {
    return (
        <>

        </>
    );
};