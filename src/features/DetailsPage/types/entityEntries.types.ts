import { DetailedPersonItem } from "../../../common/aliases/interfaces/person.types";
import { OrNull } from "../../../common/aliases/types/OrNull";
import { OrUndefined } from "../../../common/aliases/types/OrUndefined";
import {
    formatProductionCountries
} from "../utilis/formatProductionCountries";

export type MovieEntries = [
    {
        key: "production";
        value: ReturnType<typeof formatProductionCountries>;
    },
    {
        key: "release date";
        value: OrNull<string>;
    },
]

export type PersonEntries = [
    {
        key: "date of birth";
        value: OrUndefined<DetailedPersonItem["birthday"]>;
    },
    {
        key: "place of birth";
        value: OrUndefined<DetailedPersonItem["place_of_birth"]>;
    },
]

export type EntityEntries = MovieEntries | PersonEntries;