export type DevTreeConfigRules = {
  AvatarUrl: string;
  UserName: string;
  RoundedOptions: "rounded-lg" | "rounded-sm" | "rounded-md" | "rounded-xl";
  AvatarRoundedOptions:
    | "rounded-full"
    | "rounded-lg"
    | "rounded-sm"
    | "rounded-md"
    | "rounded-xl";
};

export const RoundedMap: Record<string, string> = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-sm",
  "rounded-lg": "rounded-md",
  "rounded-xl": "rounded-lg",
};
