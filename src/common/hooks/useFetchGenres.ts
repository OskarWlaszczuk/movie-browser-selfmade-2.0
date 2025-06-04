import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../reduxTypedHooks"
import { fetchGenres, selectGenresStatus } from "../../genresSlice"

export const useFetchGenres = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchGenres());
    }, [dispatch]);

    const genresStatus = useAppSelector(selectGenresStatus);
    return genresStatus;
};