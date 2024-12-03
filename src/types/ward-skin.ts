import { Description, Rarity } from "./common.ts";

export type WardSkinID = number;

export interface WardSkin {
    id:                   WardSkinID;
    name:                 string;
    description:          string;
    wardImagePath:        string;
    wardShadowImagePath:  string;
    isLegacy:             boolean;
    regionalDescriptions: Description[];
    rarities:             Rarity[];
}