import React, { useState } from "react";
import { Button, FormControl, FormLabel, Input, Select } from "@vechaiui/react";

function StyledFormControl(props) {
  return <FormControl className={`py-1 px-1 ${props.className}`}>
    {props.children}
  </FormControl>;
}

export default function ExpenseForm(props) {
  const [input, setInput] = useState({
    description: "",
    qty: 0,
    price: 0,
    curr: "",
  });

  const onSubmit = () => {
    props.onSubmit(input);
  };

  return (
    <div className="flex flex-wrap w-full p-8">
      <StyledFormControl className={`w-80`}>
        <FormLabel htmlFor="description" id="description-label">
          Description
        </FormLabel>
        <Input
          id="description"
          type="text"
          onChange={(e) => {
            setInput(() => {
              return { ...input, description: e.target.value };
            });
          }}
        />
      </StyledFormControl>
      <StyledFormControl className={`w-40`}>
        <FormLabel htmlFor="qty" id="qty-label">
          Qty
        </FormLabel>
        <Input
          id="qty"
          type="number"
          onChange={(e) => {
            setInput(() => {
              return { ...input, qty: e.target.value };
            });
          }}
        />
      </StyledFormControl>
      <StyledFormControl className={`w-40`}>
        <FormLabel htmlFor="unit-price" id="unit-price-label">
          Unit Price
        </FormLabel>
        <Input
          id="unit-price"
          type="number"
          onChange={(e) => {
            setInput(() => {
              return { ...input, price: e.target.value };
            });
          }}
        />
      </StyledFormControl>
      <StyledFormControl className={`w-40`}>
        <FormLabel htmlFor="currency" id="currency-label">
          Currency
        </FormLabel>
        <Select
        id="currency"
          value={input.curr}
          onChange={(e) => {
            setInput(() => {
              return { ...input, curr: e.target.value };
            });
          }}
        >
          <option value="PHP">PHP</option>
          <option value="USD">USD</option>
          <option value="JPY">JPY</option>
          <option value="KRW">KRW</option>
        </Select>
      </StyledFormControl>
      <StyledFormControl className={`py-2`}>
        <Button variant="solid" color="primary" onClick={onSubmit}>
          Button
        </Button>
      </StyledFormControl>
    </div>
  );
}
