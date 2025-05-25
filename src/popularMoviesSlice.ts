import { createPopularListSlice } from "./common/functions/createPopularListSlice";
import { Movie } from "./common/aliases/interfaces/Movie";

export const popularMoviesSlice = createPopularListSlice<Movie>({ stateName: "popularMovies" });
export const popularMoviesReducer = popularMoviesSlice.reducer;

export const { actions: popularMoviesActions, selectors: popularMoviesSelectors } = popularMoviesSlice;