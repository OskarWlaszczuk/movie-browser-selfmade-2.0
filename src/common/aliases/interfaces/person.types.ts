interface BasePersonData {
    id: number;
    name: string;
}

export interface CastMember extends BasePersonData{
    profile_path: string;
    character: string;
}

export interface CrewMember extends BasePersonData{
    profile_path: string;
    job: string;
}

export interface SimplefiedPersonItem extends BasePersonData{
    profile_path: string;
}

export interface DetailedPersonItem extends SimplefiedPersonItem {
    biography: string;
    birthday: string;
    place_of_birth: string;
}