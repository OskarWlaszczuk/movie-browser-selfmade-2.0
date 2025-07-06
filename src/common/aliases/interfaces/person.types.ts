import { OrNull } from "../types/OrNull";
import { SharedTileEntityData } from "./SharedTileEntityData";

interface BasePersonData extends SharedTileEntityData {
    name: string;
    profile_path: OrNull<string>;
}

export interface MovieCastMember extends BasePersonData {
    character: string;
}

export interface MovieCrewMember extends BasePersonData {
    job: string;
    department: string;
}

export type SimplefiedPersonItem = BasePersonData;
export interface DetailedPersonItem extends SimplefiedPersonItem {
    biography: string;
    birthday: OrNull<string>;
    place_of_birth: OrNull<string>;
}