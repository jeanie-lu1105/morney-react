import { ICONS_MAP } from "@icons/index";

export const ICONS = [
  {
    icon: ICONS_MAP.bookmark,
    to: "/tags",
    id: "tags",
    displayName: "标签页",
  },
  {
    icon: ICONS_MAP.money,
    to: "/money",
    id: "money",
    displayName: "记账页",
  },
  {
    icon: ICONS_MAP.chart,
    to: "/statistics",
    id: "statistics",
    displayName: "统计页",
  },
];

export const NumberPadOptions = [
  1,
  2,
  3,
  "+",
  "Del",
  4,
  5,
  6,
  "-",
  "Clear",
  7,
  8,
  9,
  "x",
  "/",
  0,
  ".",
  "=",
];

export const TagList = ["衣", "食", "住", "行"];
