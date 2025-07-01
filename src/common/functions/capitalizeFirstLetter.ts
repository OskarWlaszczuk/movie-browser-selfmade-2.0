import { OrUndefined } from "../aliases/types/OrUndefined";

export const capitalizeFirstLetter = (text: OrUndefined<string>) => (
    `${text?.charAt(0).toUpperCase()}${text?.slice(1)}`
);