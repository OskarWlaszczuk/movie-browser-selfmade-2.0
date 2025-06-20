import { SimplefiedMovieItem } from "./movie.types";
import { CastMember, CrewMember, SimplefiedPersonItem } from "./person.types";

export type TileEntity = SimplefiedMovieItem | SimplefiedPersonItem | CastMember | CrewMember;

export type TileEntityId = TileEntity["id"];