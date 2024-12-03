export type ChampionID = number;

export interface ChampionSummary {
  id: ChampionID;
  name: string;
  alias: string;
  squarePortraitPath: string;
  roles: ChampionRole[];
}

export enum ChampionRole {
  Assassin = "assassin",
  Fighter = "fighter",
  Mage = "mage",
  Marksman = "marksman",
  Support = "support",
  Tank = "tank",
}
