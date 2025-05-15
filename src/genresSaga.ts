import { call, put, takeLatest } from "redux-saga/effects";
import { fetchGenres, setFetchedGenres } from "./genresSlice";
import axios from "axios";

const fetchFromAPI = async (url: string) => {
    const options = {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTYxZDVhMWQ5OGRiYjlmZTQ1MmRkYmI5ZjY0Yzk2OSIsIm5iZiI6MTcyMzAzNzg2Ni4wODUsInN1YiI6IjY2YjM3OGFhNWQ4M2FhNTA1ZTI3ZDMxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1WAl4QsNEZhR_4-FocLBojz0ujdAJxd6Jjtjjgx6-Lg'
        }
    };

    const response = await axios.get(url, options);
    return response.data;
};

function* fetchGenresHandler() {
    try {
        const genresList = yield call(fetchFromAPI, "/genres.json");
        yield put(setFetchedGenres(genresList));
    } catch (error) {
        console.error(error)
    };
};

type FetchGenresAction = ReturnType<typeof fetchGenres>;

export function* genresSaga() {
    yield takeLatest<FetchGenresAction>(
        fetchGenres.type,
        fetchGenresHandler
    );
};