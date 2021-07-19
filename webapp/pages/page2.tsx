import React, { useEffect, useState } from "react";
import { addExpense, computeCrop, createCrop, createExpense } from "xcrop";
import ExpenseForm from "../components/ExpenseForm.tsx";
import ExpenseRow from "../components/ExpenseRow.tsx";

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
  useEffect(() => {
    console.log("expenses changed");
    setCrop(() => {
      return createCrop({ expenses: state.expenses, bayads: [] });
    });
  }, [state.expenses]);
  return (
    <Theme>
      <h1>Hey</h1>
      <ExpenseForm
        onSubmit={onSubmit}
      >
      </ExpenseForm>
      <h2>Items</h2>
      <div>
        {state.expenses.map((e, i) => {
          return <div key={i}>
            <ExpenseRow
              {...e}
              date={`${e.date.yyyy} ${e.date.mm} ${e.date.dd}`}
              qty={`${e.qty.value}`}
              uom={`${e.qty.uom}`}
              unitPrice={`${e.unitPrice.value}`}
              curr={`${e.unitPrice.curr}`}
              totalPrice={`${e.totalPrice.value}`}
            >
            </ExpenseRow>
          </div>;
        })}
      </div>
      <h2>Totals</h2>
      <div>
        <pre>
          {JSON.stringify(computeCrop(crop), null, 2)}
        </pre>
      </div>
    </Theme>
  );
}
