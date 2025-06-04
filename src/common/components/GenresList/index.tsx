import { GenresIds } from "../../aliases/types/genre.types";
import { Genre, StyledGenres } from "./styled";
import { useAppSelector } from "../../../reduxTypedHooks";
import { selectGenresList } from "../../../genresSlice";

interface GenresListProps {
    genresIds: GenresIds;
}

export const GenresList = ({ genresIds }: GenresListProps) => {
    const genres = useAppSelector(selectGenresList);
    const extractedGenres = genresIds.map(id => genres?.find(genre => id === genre.id));
    const isGenresIdsEmpty = genresIds.length > 0;

    return (
        <>
            {
                isGenresIdsEmpty && (
                    <StyledGenres>
                        {
                            extractedGenres?.map((genre, index) => (
                                <Genre key={index}>{genre?.name}</Genre>
                            ))
                        }
                    </StyledGenres>
                )
            }
        </>
    );
};