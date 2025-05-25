import { call, put, takeLatest } from "redux-saga/effects";
import { fetchFromAPI } from "./common/functions/fetchFromAPI";
import { SagaIterator } from "redux-saga";
import { fetchMovieCredits, handleMovieCreditsFail, setFetchedMovieCredits } from "./movieCreditsSlice";
import { apiUrls } from "./common/constants/pictureConfigs";

interface CastMember {
    id: number;
    name: string;
    profile_path: string;
    character: string;
}

interface CrewMember {
    id: number;
    name: string;
    profile_path: string;
    job: string;
}
interface MovieCreditsApiResponse {
    cast: CastMember[];
    crew: CrewMember[];
}

function* fetchMovieCreditsHandler({ payload }: string): SagaIterator {
    const { movieId } = payload;

    try {
        const typedFetch = fetchFromAPI<MovieCreditsApiResponse>;
        const movieCredits: MovieCreditsApiResponse = yield call(typedFetch, `${apiUrls.base}/movie/${movieId}/credits`);
        yield put(setFetchedMovieCredits(movieCredits));
    } catch {
        yield put(handleMovieCreditsFail());
    };
};

type FetchMovieCreditsAction = ReturnType<typeof fetchMovieCredits>;

export function* movieCreditsSaga() {
    yield takeLatest<FetchMovieCreditsAction>(
        fetchMovieCredits.type,
        fetchMovieCreditsHandler
    );
};