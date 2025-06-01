import { createPopularListSlice } from "./common/functions/createPopularListSlice";
import { Movie } from "./common/aliases/interfaces/Movie";
// @ts-ignore
export const popularMoviesSlice = createPopularListSlice({ stateName: "popularMovies" });
// @ts-ignore
export const popularMoviesReducer = popularMoviesSlice.reducer;

export const { actions: popularMoviesActions, selectors: popularMoviesSelectors } = popularMoviesSlice;