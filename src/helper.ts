import { AssetsKind, CDRAGON } from "./constants.ts";
import { LanguageZone } from "./types/index.ts";


export const assetsURL = (ak: AssetsKind, patch = "pbe", lang: LanguageZone = LanguageZone.EnglishDefault): string => {
    if (lang === LanguageZone.EnglishDefault) {
        return `${CDRAGON}/${patch}/plugins/rcp-be-lol-game-data/global/default/v1/${ak}.json`;
    }
    return `${CDRAGON}/${patch}/plugins/rcp-be-lol-game-data/global/${lang}/v1/${ak}.json`;
}
