import { useEffect } from "react";
import { useAppDispatch } from "../../../reduxTypedHooks";
import { fetchGenres } from "../../../genresSlice";
import { GenresList } from "../../../common/components/GenresList";

export const Movies = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchGenres())
    }, [dispatch]);

    return (
        <>
            Movies
            <GenresList genresIds={[28, 12, 16, 35]} />
        </>
    );
};