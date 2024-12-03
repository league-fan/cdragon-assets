export interface Description {
  region: Region;
  description: string;
}

export enum Region {
  Empty = "",
  ID = "ID",
  Ph = "PH",
  RegionTencent = "tencent",
  Riot = "riot",
  Sg = "SG",
  Tencent = "TENCENT",
  Th = "TH",
  Tw = "TW",
  Vn = "VN",
}

export interface Rarity {
  region: Region;
  rarity: number;
}
