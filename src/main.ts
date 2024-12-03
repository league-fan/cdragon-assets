import { AssetsKind, SAVED_DATA_PATH } from "./constants.ts";
import { fetchAssets, saveAssets } from "./helper.ts";
import { LanguageZone } from "./types/languagezong.ts";

export const interestedLang = [
  LanguageZone.EnglishDefault,
];

export const interestedAssests = Object.values(AssetsKind);

export async function collectAssets(savepath: string) {
  const tasks = [];
  for (const lang of interestedLang) {
    for (const ak of interestedAssests) {
      const task = async (
        ak: AssetsKind,
        patch = "pbe",
        lang = LanguageZone.EnglishDefault,
      ) => {
        const data = await fetchAssets(ak, patch, lang);
        await saveAssets(data, `${savepath}/${patch}/${lang}/${ak}.json`);
        console.log(`Saved ${ak.padEnd(20)} for ${lang.padEnd(6)} with patch ${patch}`);
      };
      tasks.push(task(ak, "pbe", lang));
    }
  }
  await Promise.all(tasks);
}

export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  // console.log("Add 2 + 3 =", add(2, 3));
  await collectAssets(SAVED_DATA_PATH);
}
