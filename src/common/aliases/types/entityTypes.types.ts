import { entitiesPluralTypes, entitiesSingularTypes } from "../../constants/entityTypes";

export type EntitySingularType = typeof entitiesSingularTypes[keyof typeof entitiesSingularTypes];
export type EntityPluralType = typeof entitiesPluralTypes[keyof typeof entitiesPluralTypes];