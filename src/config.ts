import {
  FaGithub,
  FaLinkedin,
  FaX,
  FaTiktok,
  FaInstagram,
  FaBluesky,
  FaYoutube,
  FaSpotify,
  FaPatreon,
  FaGitlab,
  FaFiverr,
  FaPortfolio,
  FaTwitch,
  FaWeb,
  FaReddit,
  FaWhatsapp,
  FaAppleMusic,
} from "@/assets/icons";

import { RoundedMap } from "./types/configRules";

import type { DevTreeConfigRules } from "./types/configRules";

export const buttons = [
  { label: "Github", href: "https://github.com", Icon: FaGithub },
  { label: "Linkedin", href: "https://linkedin.com", Icon: FaLinkedin },
  { label: "X", href: "https://twitter.com", Icon: FaX },
  { label: "Tiktok", href: "https://tiktok.com", Icon: FaTiktok },
  { label: "Instagram", href: "https://instagram.com", Icon: FaInstagram },
  { label: "Bluesky", href: "https://bluesky.com", Icon: FaBluesky },
  { label: "Youtube", href: "https://youtube.com", Icon: FaYoutube },
  { label: "Spotify", href: "https://spotify.com", Icon: FaSpotify },
  { label: "Patreon", href: "https://patreon.com", Icon: FaPatreon },
  { label: "Gitlab", href: "https://gitlab.com", Icon: FaGitlab },
  { label: "Fiverr", href: "https://fiverr.com", Icon: FaFiverr },
  { label: "Portfolio", href: "https://myportfolio.com", Icon: FaPortfolio },
  { label: "Twitch", href: "https://twitch.tv", Icon: FaTwitch },
  { label: "Website", href: "https://medium.com", Icon: FaWeb },
  { label: "Reddit", href: "https://Reddit.com", Icon: FaReddit },
  { label: "Whastapp", href: "https://whatsapp.com/", Icon: FaWhatsapp },
  { label: "Apple Music", href: "https://whatsapp.com/", Icon: FaAppleMusic },
];

export const DevTreeConfig: DevTreeConfigRules = {
  AvatarUrl: "https://avatars.githubusercontent.com/u/155681266?v=4",
  UserName: "Raul Mora",
  RoundedOptions: "rounded-lg",
  AvatarRoundedOptions: "rounded-lg",
};

export const itemRounded = RoundedMap[DevTreeConfig.RoundedOptions];
