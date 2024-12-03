import { WardSkinID } from "./ward-skin.ts";

export type WardSkinSetID = number;

export interface WardSkinSet {
  id: WardSkinSetID;
  hidden: boolean;
  displayName: string;
  description: string;
  wards: WardSkinID[];
}
