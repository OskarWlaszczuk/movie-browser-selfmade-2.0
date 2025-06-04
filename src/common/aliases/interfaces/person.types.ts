export interface CastMember {
    id: number;
    name: string;
    profile_path: string;
    character: string;
}

export interface CrewMember {
    id: number;
    name: string;
    profile_path: string;
    job: string;
}

export interface PersonItem {
    id: number;
    name: string;
    profile_path: string;
}

export interface PersonDetails extends PersonItem {
    biography: string;
    birthday: string;
    place_of_birth: string;
}