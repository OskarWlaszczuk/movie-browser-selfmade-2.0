import { CastMember, CrewMember } from "../../functions/renderPersonItem";
import { Movie } from "../interfaces/Movie";
import { Person } from "../interfaces/Person";

export type TileEntity = Movie | Person | CastMember | CrewMember;