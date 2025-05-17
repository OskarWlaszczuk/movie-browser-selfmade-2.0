import { useEffect } from "react";
import { useAppDispatch } from "../../../reduxTypedHooks";
import { fetchGenres } from "../../../genresSlice";

export const Movies = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchGenres())
    }, [dispatch]);

    return (
        <>
            Movies
        </>
    );
};