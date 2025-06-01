import { GenresIds } from "../../aliases/types/genre.types";
import { selectGenresList } from "../../../genresSlice";
import { useAppSelector } from "../../../reduxTypedHooks";
import { Genre, StyledGenres } from "./styled";

interface GenresListProps {
    genresIds: GenresIds;
}

export const GenresList = ({ genresIds }: GenresListProps) => {
    const genresList = useAppSelector(selectGenresList);
// @ts-ignore
    const extractedGenres = genresIds.map(id => genresList?.find(genre => id === genre.id));
    const isGenresIdsEmpty = genresIds.length > 0;

    return (
        <>
            {
                isGenresIdsEmpty && (
                    <StyledGenres>
                        {
                            extractedGenres.map((genre, index) => (
                                <Genre key={index}>{genre?.name}</Genre>
                            ))
                        }
                    </StyledGenres>
                )
            }
        </>
    );
};