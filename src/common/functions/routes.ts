import { entitiesPluralTypes } from "../constants/entityTypes";

export const detailsRoutes = (
    Object.fromEntries(
        Object.values(entitiesPluralTypes).map(entity => {
            const method = (id: number) => `/${entity}/${id}`;
            return [entity, method]
        })
    )
);

export const listRoutes = (
    Object.fromEntries(
        Object.values(entitiesPluralTypes).map(entity => (
            [entity, `/${entity}`]
        ))
    )
);

export type DetailsRoutes = typeof detailsRoutes[keyof typeof detailsRoutes];
export type ListRoutes = typeof listRoutes[keyof typeof listRoutes];