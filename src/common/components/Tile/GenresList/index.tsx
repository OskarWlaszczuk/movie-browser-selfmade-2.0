import { GenresIds } from "../../../aliases/types/genre.types";
import { Genre, StyledGenres } from "./styled";
import { useAppSelector } from "../../../../reduxTypedHooks";
import { selectGenresList } from "../../../../genresSlice";
import { OrUndefined } from "../../../aliases/types/OrUndefined";
import { nanoid } from "@reduxjs/toolkit";

interface GenresListProps {
    genresIds: OrUndefined<GenresIds>;
}

export const GenresList = ({ genresIds }: GenresListProps) => {
    const genres = useAppSelector(selectGenresList);
    const extractedGenres = genresIds?.map(id => genres?.find(genre => id === genre.id));
    const isNoGenres = !genresIds?.length;

    console.log(extractedGenres);
    return (
        <>
            {
               ! isNoGenres && (
                    <StyledGenres>
                        {
                            extractedGenres?.map((genre) => (
                                <Genre key={nanoid()}>{genre?.name}</Genre>
                            ))
                        }
                    </StyledGenres>
                )
            }
        </>
    );
};