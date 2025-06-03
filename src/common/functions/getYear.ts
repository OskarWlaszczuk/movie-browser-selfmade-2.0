import { MovieItem } from "../aliases/interfaces/Entities";

export const getYear = (rawReleaseDate: MovieItem["release_date"]) => new Date(rawReleaseDate).getFullYear();