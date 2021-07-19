import React, { useEffect, useState } from "react";
import { addExpense, computeCrop, createCrop, createExpense } from "xcrop";
import ExpenseForm from "../components/ExpenseForm.tsx";
import GridTable from "../components/GridTable.tsx";
import { expensesColumns } from "../components/ExpensesVO.ts";

import Theme from "../components/Theme.tsx";

export default function Page2() {
  const [state, setState] = useState({ expenses: [] });
  const [crop, setCrop] = useState(createCrop({ expenses: [], bayads: [] }));
  const onSubmit = (fields) => {
    const expense = createExpense({
      date: "20210101",
      description: fields.description,
      qty: fields.qty,
      unitPrice: fields.price,
      uom: "PC",
      curr: fields.curr || "PHP",
      totalPrice: 0,
    });
    setState((prev) => ({
      ...state,
      expenses: addExpense(expense, prev.expenses),
    }));
  };

  const columns = React.useMemo(
    () => expensesColumns,
    [],
  );

  useEffect(() => {
    console.log("expenses changed");
    setCrop(() => {
      return createCrop({ expenses: state.expenses, bayads: [] });
    });
  }, [state.expenses]);
  return (
    <Theme>
      <h1 className={`text-xl`}>Expenses</h1>
      <ExpenseForm
        onSubmit={onSubmit}
      >
      </ExpenseForm>
      <h1 className={`text-xl`}>Items</h1>
      {state.expenses.length <= 0 ? <p>So much empty.</p> : <GridTable
        columns={columns}
        data={state.expenses.map((e, i) => {
          return {
            date: `${e.date.yyyy} ${e.date.mm} ${e.date.dd}`,
            description: `${e.description}`,
            qty: `${e.qty.value}`,
            uom: `${e.qty.uom}`,
            unitPrice: `${e.unitPrice.value}`,
            currency: `${e.unitPrice.curr}`,
            totalPrice: `${e.totalPrice.value}`,
          };
        })}
      >
      </GridTable>}
      <h1 className={`text-xl`}>Totals</h1>
      <div>
        <pre>
          {JSON.stringify(computeCrop(crop), null, 2)}
        </pre>
      </div>
    </Theme>
  );
}
