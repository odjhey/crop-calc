import React, { Component } from "react";
import GridTable from "../components/GridTable.tsx";
import { expensesColumns } from "../components/ExpensesVO.ts";

export default function App() {
  const data = React.useMemo(
    () => [
      {
        id: "Hello",
        date: "World",
        description: "World",
        qty: "World",
        uom: "World",
        unitPrice: "World",
        totalPrice: "World",
        currency: "World",
      },
      {
        id: "Hello",
        date: "World",
        description: "World",
        qty: "World",
        uom: "World",
        unitPrice: "World",
        totalPrice: "World",
        currency: "World",
      },
      {
        id: "Hello",
        date: "World",
        description: "World",
        qty: "World",
        uom: "World",
        unitPrice: "World",
        totalPrice: "World",
        currency: "World",
      },
    ],
    [],
  );

  const columns = React.useMemo(
    () => expensesColumns,
    [],
  );

  return (<GridTable columns={columns} data={data}></GridTable>);
}
