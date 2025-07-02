import {
    PersonCastMovieItem,
    PersonCrewMovieItem,
    SimplefiedMovieItem
} from "../aliases/interfaces/movie.types";
import {
    MovieCastMember,
    MovieCrewMember,
    SimplefiedPersonItem
} from "../aliases/interfaces/person.types";
import { TileEntity } from "../aliases/interfaces/TileEntity";

const isItemExists = (item: TileEntity) => !!item;

export const entityTypeGuards = {
    isSimplefiedMovieItem: (item: TileEntity): item is SimplefiedMovieItem => (
        isItemExists(item) &&
        !("production_countries" in item) &&
        !("genres" in item) &&
        !("department" in item) &&
        !("character" in item) &&
        ("genre_ids" in item)
    ),
    isSimplefiedPersonItem: (item: TileEntity): item is SimplefiedPersonItem => (
        isItemExists(item) &&
        !("character" in item) &&
        !("job" in item) &&
        ("name" in item) &&
        ("profile_path" in item)
    ),
    isMovieCastMember: (item: TileEntity): item is MovieCastMember => (
        isItemExists(item) &&
        "character" in item &&
        !("genre_ids" in item)
    ),
    isMovieCrewMember: (item: TileEntity): item is MovieCrewMember => (
        isItemExists(item) &&
        "job" &&
        !("genre_ids" in item)
    ),
    isPersonCastMovieItem: (item: TileEntity): item is PersonCastMovieItem => (
        isItemExists(item) &&
        "character"
        in item
    ),
    isPersonCrewMovieItem: (item: TileEntity): item is PersonCrewMovieItem => (
        isItemExists(item) &&
        "department" &&
        "title" in item &&
        !("character" in item)
    ),
};