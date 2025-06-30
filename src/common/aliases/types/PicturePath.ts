import { OrNull } from "./OrNull";
import { OrUndefined } from "./OrUndefined";

export type PicturePath = OrUndefined<OrNull<string>>;