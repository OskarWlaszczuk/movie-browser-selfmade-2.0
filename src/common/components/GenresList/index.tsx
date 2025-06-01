import { GenreResponse, GenresIds } from "../../aliases/types/genre.types";
// import { selectGenresList } from "../../../genresSlice";
// import { useAppSelector } from "../../../reduxTypedHooks";
import { Genre, StyledGenres } from "./styled";
import { useFetchApi } from "../../hooks/useFetchApi";

interface GenresListProps {
    genresIds: GenresIds;
}

export const GenresList = ({ genresIds }: GenresListProps) => {
    interface RawGenresApi {
        genres: GenreResponse[]
    }

    const { status: genresStatus, data: genres } = useFetchApi<RawGenresApi>({ queryKey: "genres", url: "/genres.json" });
    // const genresList = useAppSelector(selectGenresList);
    // @ts-ignore
    const extractedGenres = genresIds.map(id => genres?.genres?.find(genre => id === genre.id));
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