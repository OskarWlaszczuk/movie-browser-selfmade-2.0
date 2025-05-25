import { useParams } from "react-router-dom"
import { DetailsPage } from "../index"
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../reduxTypedHooks";
import { fetchMovieCredits, selectMovieCast, selectMovieCreditsStatus, selectMovieCrew } from "../../../movieCreditsSlice";
import { renderPersonItem } from "../../../common/functions/renderPersonItem";

export const Movie = () => {
    const { movieId } = useParams();
    const dispatch = useAppDispatch();
    const crew = useAppSelector(selectMovieCrew);
    const cast = useAppSelector(selectMovieCast);
    const movieCreditsStatus = useAppSelector(selectMovieCreditsStatus);
    console.log(crew, cast, movieCreditsStatus)

    useEffect(() => {
        if (!movieId) return;
        dispatch(fetchMovieCredits({ movieId }));
    }, [dispatch, movieId]);

    const castSectionData = {
        list: cast,
        titleData: {
            text: "cast",
            isPageTitle: false,
        },
        renderListItem: renderPersonItem,
    };

    const crewSectionData = {
        list: crew,
        titleData: {
            text: "Crew",
            isPageTitle: false,
        },
        renderListItem: renderPersonItem,
    }

    return (
        <DetailsPage
            sectionsData={[castSectionData, crewSectionData]}
            fetchStatuses={[movieCreditsStatus]}
        />
    );
};