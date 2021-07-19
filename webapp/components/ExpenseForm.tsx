import React, { useState } from "react";
import { Button, FormControl, FormLabel, Input, Select } from "@vechaiui/react";
import { SubmitHandler, useForm } from "react-hook-form";

function StyledFormControl(props: { className: any; children: any }) {
  return <FormControl className={`py-1 px-1 ${props.className}`}>
    {props.children}
  </FormControl>;
}

interface IFormInput {
  description: string;
  qty: number;
  price: number;
  curr: string;
}

export default function ExpenseForm(props: { onSubmit: any }) {
  const { register, handleSubmit, formState: { errors } } = useForm<
    IFormInput
  >();

  const onSubmit = (data: IFormInput) => {
    props.onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap w-full p-8">
        <StyledFormControl className={`w-80`}>
          <FormLabel htmlFor="description" id="description-label">
            Description
          </FormLabel>
          <Input
            invalid={errors.description && "true"}
            id="description"
            type="text"
            {...register("description", { required: true, maxLength: 20 })}
          />
        </StyledFormControl>
        <StyledFormControl className={`w-40`}>
          <FormLabel htmlFor="qty" id="qty-label">
            Qty
          </FormLabel>
          <Input
            invalid={errors.qty && "true"}
            id="qty"
            type="number"
            {...register("qty", { required: true, min: 0, max: 9999 })}
          />
        </StyledFormControl>
        <StyledFormControl className={`w-40`}>
          <FormLabel htmlFor="unit-price" id="unit-price-label">
            Unit Price
          </FormLabel>
          <Input
            invalid={errors.price && "true"}
            id="unit-price"
            type="number"
            {...register("price", { required: true, min: 0, max: 99999 })}
          />
        </StyledFormControl>
        <StyledFormControl className={`w-40`}>
          <FormLabel htmlFor="currency" id="currency-label">
            Currency
          </FormLabel>
          <Select
            id="currency"
            {...register("curr", { required: true })}
          >
            <option value="PHP">PHP</option>
            <option value="USD">USD</option>
            <option value="JPY">JPY</option>
            <option value="KRW">KRW</option>
          </Select>
        </StyledFormControl>
        <StyledFormControl className={`py-2`}>
          <Button variant="solid" color="primary" type="submit">
            Button
          </Button>
        </StyledFormControl>
      </div>
    </form>
  );
}
