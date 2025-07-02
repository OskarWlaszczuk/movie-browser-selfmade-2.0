import { PersonCastMovieItem, PersonCrewMovieItem, SimplefiedMovieItem } from "./movie.types";
import { MovieCastMember, MovieCrewMember, SimplefiedPersonItem } from "./person.types";

export type TileEntity =
    SimplefiedMovieItem |
    SimplefiedPersonItem |
    MovieCastMember |
    MovieCrewMember |
    PersonCastMovieItem |
    PersonCrewMovieItem;

export type PersonEntity =
    SimplefiedPersonItem |
    MovieCastMember |
    MovieCrewMember;

export type MovieEntity =
    SimplefiedMovieItem |
    PersonCastMovieItem |
    PersonCrewMovieItem;