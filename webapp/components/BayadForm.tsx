import React, { useState } from "react";
import { Button, FormControl, FormLabel, Input, Select } from "@vechaiui/react";
import { SubmitHandler, useForm } from "react-hook-form";

function StyledFormControl(props: { className: any; children: any }) {
  return <FormControl className={`py-1 px-1 ${props.className}`}>
    {props.children}
  </FormControl>;
}

interface IFormInput {
  bayad: number;
  qty: number;
  uom: string;
  transpo: number;
  comboy: number;
  curr: string;
}

export default function BayadForm(props: { onSubmit: any }) {
  const { register, handleSubmit, formState: { errors } } = useForm<
    IFormInput
  >();

  const onSubmit = (data: IFormInput) => {
    props.onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap w-full">
        <StyledFormControl className={`w-40`}>
          <FormLabel htmlFor="bayad" id="bayad-label">
            Bayad
          </FormLabel>
          <Input
            invalid={errors.bayad && "true"}
            id="bayad"
            type="number"
            {...register("bayad", { required: true, min: 0 })}
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
        <StyledFormControl className={`w-20`}>
          <FormLabel htmlFor="uom" id="uom-label">
            UoM
          </FormLabel>
          <Input
            invalid={errors.uom && "true"}
            id="uom"
            type="text"
            {...register("uom", { required: true, maxLength: 5 })}
          />
        </StyledFormControl>

        <StyledFormControl className={`w-40`}>
          <FormLabel htmlFor="transpo" id="transpo-label">
            Transpo
          </FormLabel>
          <Input
            invalid={errors.transpo && "true"}
            id="transpo"
            type="number"
            {...register("transpo", { required: true, min: 0 })}
          />
        </StyledFormControl>

        <StyledFormControl className={`w-40`}>
          <FormLabel htmlFor="comboy" id="comboy-label">
            Comboy
          </FormLabel>
          <Input
            invalid={errors.comboy && "true"}
            id="comboy"
            type="number"
            {...register("comboy", { required: true, min: 0 })}
          />
        </StyledFormControl>

        <StyledFormControl className={`w-40`}>
          <FormLabel htmlFor="curr" id="curr-label">
            Currency
          </FormLabel>
          <Select
            id="curr"
            {...register("curr", { required: true })}
          >
            <option value="PHP">PHP</option>
            <option value="USD">USD</option>
            <option value="JPY">JPY</option>
            <option value="KRW">KRW</option>
          </Select>
        </StyledFormControl>
        <StyledFormControl className={`py-2 `}>
          <Button variant="solid" color="primary" type="submit">
            Save
          </Button>
        </StyledFormControl>
      </div>
    </form>
  );
}
