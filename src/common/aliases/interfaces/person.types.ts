import { OrNull } from "../types/OrNull";
import { SharedTileEntityData } from "./SharedTileEntityData";

interface BasePersonData extends SharedTileEntityData {
    name: string;
    profile_path: OrNull<string>;
}

export interface CastMember extends BasePersonData {
    character: string;
}

export interface CrewMember extends BasePersonData {
    job: string;
}

export type SimplefiedPersonItem = BasePersonData;
export interface DetailedPersonItem extends SimplefiedPersonItem {
    biography: string;
    birthday: OrNull<string>;
    place_of_birth: OrNull<string>;
}