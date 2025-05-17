import { GenresIds } from "../../aliases/types/genre.types";
import { selectGenresList, selectGenresStatus } from "../../../genresSlice";
import { useAppSelector } from "../../../reduxTypedHooks";
import { Genre, StyledGenres } from "./styled";

interface GenresListProps {
    genresIds: GenresIds;
}

export const GenresList = ({ genresIds }: GenresListProps) => {

    const genresList = useAppSelector(selectGenresList);
    const genresStatus = useAppSelector(selectGenresStatus);

    const extractedGenres = genresIds.map(id => genresList?.find(genre => id === genre.id));
    return (
        <StyledGenres>
            {
                extractedGenres.map(genre => (
                    <Genre key={genre?.id}>{genre?.name}</Genre>
                ))
            }
        </StyledGenres>
    );
};