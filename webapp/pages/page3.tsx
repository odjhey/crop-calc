import * as React from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  VechaiProvider,
} from "@vechaiui/react";

export default function App() {
  return (
    <VechaiProvider>
      <div>
        <div className="flex flex-wrap w-full p-8 space-x-10">
          <FormControl>
            <FormLabel htmlFor="email" id="email-label">
              Email address
            </FormLabel>
            <Input id="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </div>

        <div className="flex flex-wrap w-full p-8 space-x-2">
          <Button>Button</Button>
          <Button variant="solid">Button</Button>
          <Button variant="light">Button</Button>
          <Button variant="ghost">Button</Button>
          <Button variant="link">Button</Button>
        </div>
      </div>
    </VechaiProvider>
  );
}
