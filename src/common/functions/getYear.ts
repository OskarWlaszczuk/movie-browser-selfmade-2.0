import { MovieItem } from "../aliases/interfaces/movie.types";

export const getYear = (rawReleaseDate: MovieItem["release_date"]) => new Date(rawReleaseDate).getFullYear();