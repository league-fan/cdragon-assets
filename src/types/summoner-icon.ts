import { Description, Rarity } from "./common.ts";

export type SummonerIconID = number;

export interface SummonerIcon {
  id: SummonerIconID;
  title: string;
  yearReleased: number;
  isLegacy: boolean;
  imagePath?: string;
  descriptions: Description[];
  rarities: Rarity[];
  disabledRegions: string[];
  esportsTeam?: string;
  esportsRegion?: EsportsRegion;
  esportsEvent?: EsportsEvent;
}

export enum EsportsEvent {
  AllStar = "All-Star",
  CampeonatoBrasileiroDeLeagueOfLegends =
    "Campeonato Brasileiro de League of Legends",
  CopaLatinoaméricaSur = "Copa Latinoamérica Sur",
  EuropeLeagueOfLegendsChampionshipSeries =
    "Europe League of Legends Championship Series",
  GarenaPremierLeague = "Garena Premier League",
  InternationalWildcardInvitational = "International Wildcard Invitational",
  LatinAmericaCup = "Latin America Cup",
  LeagueOfLegendsChampionsKorea = "League of Legends Champions Korea",
  LeagueOfLegendsContinentalLeague = "League of Legends Continental League",
  LeagueOfLegendsJapanLeague = "League of Legends Japan League",
  LeagueOfLegendsMastersSeries = "League of Legends Masters Series",
  LeagueOfLegendsProLeague = "League of Legends Pro League",
  LigaLatinoaméricaNorte = "Liga Latinoamérica Norte",
  MidSeasonInvitational = "Mid-Season Invitational",
  NorthAmericaLeagueOfLegendsChampionshipSeries =
    "North America League of Legends Championship Series",
  OceanicProLeague = "Oceanic Pro League",
  OnGameNetLeagueOfLegendsInvitational =
    "OnGameNet League of Legends Invitational",
  RiftRivals = "Rift Rivals",
  StarLadderSeries = "Star Ladder Series",
  TurkeyChampionsLeague = "Turkey Champions League",
  VietnamChampionshipSeries = "Vietnam Championship Series",
  WorldChampionship = "World Championship",
}

export enum EsportsRegion {
  Br = "BR",
  Ch = "CH",
  Cis = "CIS",
  Eu = "EU",
  GPL = "GPL",
  Jp = "JP",
  Kr = "KR",
  LAN = "LAN",
  LANLas = "LAN/LAS",
  Las = "LAS",
  Lms = "LMS",
  Na = "NA",
  Oce = "OCE",
  Pcs = "PCS",
  Ru = "RU",
  Sea = "SEA",
  Tr = "TR",
  Vn = "VN",
}
