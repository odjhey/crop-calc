import React from "react";
import {
  colors,
  ColorScheme,
  extendTheme,
  VechaiProvider,
} from "@vechaiui/react";

const cool: ColorScheme = {
  id: "cool",
  type: "dark",
  colors: {
    bg: {
      base: colors.coolGray["900"],
      fill: colors.coolGray["900"],
    },
    text: {
      base: colors.coolGray["100"],
      muted: colors.coolGray["300"],
    },
    primary: colors.cyan,
    neutral: colors.coolGray,
  },
};

const light: ColorScheme = {
  id: "light",
  type: "light",
  colors: {
    bg: {
      base: colors.gray["800"],
      fill: colors.gray["900"],
    },
    text: {
      foreground: colors.gray["100"],
      muted: colors.gray["300"],
    },
    primary: colors.teal,
    neutral: colors.gray,
  },
};

const bee: ColorScheme = {
  id: "bee",
  type: "light",
  colors: {
    bg: {
      base: colors.warmGray["100"],
      fill: colors.warmGray["100"],
    },
    text: {
      foreground: colors.warmGray["900"],
      muted: colors.warmGray["700"],
    },
    primary: colors.amber,
    neutral: colors.warmGray,
  },
};

const pale: ColorScheme = {
  id: "pale",
  type: "dark",
  colors: {
    bg: {
      base: colors.blueGray["800"],
      fill: colors.blueGray["900"],
    },
    text: {
      foreground: colors.blueGray["100"],
      muted: colors.blueGray["300"],
    },
    primary: colors.violet,
    neutral: colors.blueGray,
  },
};

const theme = extendTheme({
  cursor: "pointer",
  colorSchemes: {
    light,
    cool,
    bee,
    pale,
  },
});

export default function Theme(props: { children: any }) {
  return (
    <VechaiProvider>
      {props.children}
    </VechaiProvider>
  );
}
