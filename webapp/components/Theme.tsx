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

const theme = extendTheme({
  cursor: "pointer",
  colorSchemes: {
    light,
    cool,
  },
});

export default function Theme(props: { children: any }) {
  return (
    <VechaiProvider theme={theme} colorScheme="light">
      {props.children}
    </VechaiProvider>
  );
}
