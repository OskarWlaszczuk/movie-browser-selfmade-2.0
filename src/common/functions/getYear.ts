import { Movie } from "../aliases/interfaces/Movie";

export const getYear = (rawReleaseDate: Movie["release_date"]) => new Date(rawReleaseDate).getFullYear();