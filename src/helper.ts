import { AssetsKind, CDRAGON } from "./constants.ts";
import { LanguageZone } from "./types/index.ts";
import { dirname } from "jsr:@std/path";
import { exists } from "jsr:@std/fs";

export interface AssetProps {
  ak: AssetsKind;
  patch?: string;
  lang?: LanguageZone;
}

export const assetsURL = ({
  ak,
  patch = "pbe",
  lang = LanguageZone.EnglishDefault,
}: AssetProps): string => {
  if (lang === LanguageZone.EnglishDefault) {
    return `${CDRAGON}/${patch}/plugins/rcp-be-lol-game-data/global/default/v1/${ak}.json`;
  }
  return `${CDRAGON}/${patch}/plugins/rcp-be-lol-game-data/global/${lang}/v1/${ak}.json`;
};

export async function fetchAssets<T>({
  ak,
  patch = "pbe",
  lang = LanguageZone.EnglishDefault,
}: AssetProps): Promise<T> {
  const url = assetsURL({ ak, patch, lang });
  const data = await fetch(url).then((res) => res.json());
  return data;
}

export async function saveAssets<T>(
  data: T,
  filepath: string,
): Promise<void> {
  const parent = dirname(filepath);
  await exists(parent) || Deno.mkdir(parent, { recursive: true });
  await Deno.writeTextFile(filepath, JSON.stringify(data, null, 4));
}
