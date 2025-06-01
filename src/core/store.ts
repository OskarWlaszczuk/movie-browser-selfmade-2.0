import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga"
import { rootSaga } from './rootSaga';
import { genresReducer } from '../genresSlice';
import { popularMoviesReducer } from '../popularMoviesSlice';
import { popularPeopleReducer } from '../popularPeopleSlice';
import { movieCreditsReducer } from '../movieCreditsSlice';

const sagaMiddleware = createSagaMiddleware();
// @ts-ignore
export const store = configureStore({
    reducer: {
        genres: genresReducer,
        movieCredits: movieCreditsReducer,
        popularMovies: popularMoviesReducer,
        popularPeople: popularPeopleReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
// @ts-ignore
export type RootState = ReturnType<typeof store.getState>;