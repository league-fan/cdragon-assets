import { SummonerIconID } from "./summoner-icon.ts";

export type SummonerIconSetID = number;

export interface SummonerIconSet {
  id: SummonerIconSetID;
  hidden: boolean;
  displayName: string;
  description: string;
  icons: SummonerIconID[];
}
