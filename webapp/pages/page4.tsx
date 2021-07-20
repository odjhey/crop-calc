import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  VechaiProvider,
  ColorScheme
} from "@vechaiui/react";
import { extendTheme, colors } from "@vechaiui/react";
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
}
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
}
const theme = extendTheme({
  cursor: "pointer",
  colorSchemes: {
    light,
    cool
  },
});
enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: String;
  gender: GenderEnum;
}

export default function App() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <VechaiProvider theme={theme} colorScheme="light">
      <div>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input {...register("firstName")} />
        </FormControl>
        <FormControl>
          <FormLabel>Gender Selection</FormLabel>
          <Select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </Select>
        </FormControl>
        <Button variant="soli">submit</Button>
      </div>
    </VechaiProvider>
  );
}
