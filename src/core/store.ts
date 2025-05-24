import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga"
import { rootSaga } from './rootSaga';
import { genresReducer } from '../genresSlice';
import { popularMoviesReducer } from '../popularMoviesSlice';
import { popularPeopleReducer } from '../popularPeopleSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        genres: genresReducer,
        popularMovies: popularMoviesReducer,
        popularPeople: popularPeopleReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;