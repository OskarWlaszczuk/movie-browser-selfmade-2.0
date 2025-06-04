import { MovieItem } from "./movie.types";
import { CastMember, CrewMember, PersonItem } from "./person.types";

export type TileEntity = MovieItem | PersonItem | CastMember | CrewMember;