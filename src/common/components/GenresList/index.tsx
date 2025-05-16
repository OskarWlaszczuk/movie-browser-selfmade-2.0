import { useEffect } from "react";
import { GenresIds } from "../../aliases/types/genre.types";
import { fetchGenres, selectGenresList, selectGenresStatus } from "../../../genresSlice";
import { useAppDispatch, useAppSelector } from "../../../reduxTypedHooks";

interface GenresListProps {
    genresIds: GenresIds;
}

export const GenresList = ({ genresIds }: GenresListProps) => {
    const dispatch = useAppDispatch();

    const genresList = useAppSelector(selectGenresList);
    const genresStatus = useAppSelector(selectGenresStatus);

    const filteredGenres = genresIds?.map(id => genresList?.find(genre => id === genre.id));

    //Przenieść fetchowanie genres do głównego komponentu, tak aby odbywało się to tylko raz na render
    useEffect(() => {
        dispatch(fetchGenres())
    }, [dispatch]);

    return (
        <>

        </>
    );
};