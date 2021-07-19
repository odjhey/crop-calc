import React from "react";

export default function ExpenseRow(props: {
  date: string;
  qty: number;
  uom: string;
  description: string;
  unitPrice: number;
  totalPrice: number;
  curr: string;
}) {
  const { date, qty, uom, description, unitPrice, totalPrice, curr } = props;
  return <div>
    <p>
      {`${date} ${description} `}
      <span style={{ fontWeight: "bold" }}>
        {`${qty} ${uom} x ${
          priceFormatter({ value: unitPrice, currency: "" }).value
        } ${priceFormatter({ value: totalPrice, currency: "" }).value} `}
      </span>
      {`${curr}`}
    </p>
  </div>;
}

function priceFormatter(
  { value, currency }: { value: string | number; currency: string },
) {
  const numberValue = typeof value === "string" ? parseInt(value) : value;
  return { value: numberValue.toFixed(2), currency };
}
