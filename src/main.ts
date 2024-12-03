import { AssetsKind, SAVED_DATA_PATH } from "./constants.ts";
import { AssetProps, fetchAssets, saveAssets } from "./helper.ts";
import { Skin, SkinID, Skins } from "./types/index.ts";
import { LanguageZone } from "./types/languagezong.ts";
import { cartesianProduct } from "https://deno.land/x/combinatorics/mod.ts";

const interested = {
  ak: Object.values(AssetsKind),
  patch: ["pbe"],
  lang: [LanguageZone.EnglishDefault],
};

const postProcess = async ({ ak, patch, lang }: AssetProps, data: any) => {
  const originData = `${SAVED_DATA_PATH}/${patch}/${lang}/${ak}.json`;
  await saveAssets(data, originData);

  // switch (ak) {
  //   case AssetsKind.Skins: {
  //     const skindata = data as {
  //       [key: SkinID]: Skin;
  //     };
  //     const skinlist = Object.values(skindata);
  //     for (const skin of skinlist) {
  //       const filepath =
  //         `${SAVED_DATA_PATH}/${patch}/${lang}/${ak}/${skin.id}.json`;
  //       await saveAssets(skin, filepath);
  //     }
  //     console.log(`Saved ${skinlist.length} ${ak} at ${patch}/${lang}`);
  //     break;
  //   }
  //   default: {
      
  //     break;
  //   }
  // }
};

export async function collectAssets() {
  const tasks = [];
  const aps = [...cartesianProduct(interested.ak, interested.patch, interested.lang)]
    .map(([ak, patch, lang]) => {
      return { ak, patch, lang } as AssetProps;
    });

  for (const ap of aps) {
    const task = async (ap: AssetProps) => {
      const data = await fetchAssets(ap);
      await postProcess(ap, data);
    };
    tasks.push(task(ap));
  }
  await Promise.all(tasks);
}

export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  // console.log("Add 2 + 3 =", add(2, 3));
  await collectAssets();
}
