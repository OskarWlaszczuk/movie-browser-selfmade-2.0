import { MovieItem } from "../aliases/interfaces/movie.types";
import { OrUndefined } from "../aliases/types/OrUndefined";

export const getYear = (rawReleaseDate: OrUndefined<MovieItem["release_date"]>) => rawReleaseDate ? new Date(rawReleaseDate).getFullYear() : undefined;