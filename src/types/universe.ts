export type UniverseID = number;

export interface Universe {
  id: UniverseID;
  name: string;
  description: string;
  imagePath: string;
  skinSets: number[];
}
