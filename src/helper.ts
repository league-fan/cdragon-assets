import { AssetsKind, CDRAGON } from "./constants.ts";
import { LanguageZone } from "./types/index.ts";
import axios from "npm:axios";
import axiosRetry from "npm:axios-retry";
import { dirname } from "jsr:@std/path";
import { exists } from "jsr:@std/fs";

axiosRetry(axios, {
  retries: 4,
  retryDelay: axiosRetry.exponentialDelay,
});

export const assetsURL = (
  ak: AssetsKind,
  patch = "pbe",
  lang: LanguageZone = LanguageZone.EnglishDefault,
): string => {
  if (lang === LanguageZone.EnglishDefault) {
    return `${CDRAGON}/${patch}/plugins/rcp-be-lol-game-data/global/default/v1/${ak}.json`;
  }
  return `${CDRAGON}/${patch}/plugins/rcp-be-lol-game-data/global/${lang}/v1/${ak}.json`;
};

export async function fetchAssets<T>(
  ak: AssetsKind,
  patch = "pbe",
  lang = LanguageZone.EnglishDefault,
): Promise<T> {
  const data = (
    await axios.get(assetsURL(ak, patch, lang))
  ).data;
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
