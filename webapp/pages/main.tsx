import React, { useEffect, useMemo, useState } from "react";
import {
  addBayad,
  addExpense,
  computeCrop,
  createBayad,
  createCrop,
  createExpense,
} from "xcrop";
import ExpenseForm from "../components/ExpenseForm.tsx";
import BayadForm from "../components/BayadForm.tsx";
import GridTable from "../components/GridTable.tsx";
import { bayadsColumns, expensesColumns } from "../components/ExpensesVO.ts";

import Theme from "../components/Theme.tsx";

export default function Page2() {
  const [state, setState] = useState({ expenses: [], bayads: [] });
  const [crop, setCrop] = useState(createCrop({ expenses: [], bayads: [] }));

  const onSubmitExpense = (fields) => {
    console.log("Submitted expense", fields);
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

  const onSubmitBayad = (fields) => {
    console.log("Submitted bayad", fields);
    const bayad = createBayad({
      date: "20210701",
      bayad: parseFloat(fields.bayad),
      qty: parseFloat(fields.qty),
      uom: fields.uom,
      transpo: parseFloat(fields.transpo),
      comboy: parseFloat(fields.comboy),
      curr: fields.curr || "PHP",
    });
    console.log(bayad);
    setState((prev) => ({
      ...state,
      bayads: addBayad(bayad, prev.bayads),
    }));
  };

  const exColumns = useMemo(() => expensesColumns, []);
  const bayColumns = useMemo(() => bayadsColumns, []);

  const { overall, totalBayads, totalComboy, totalExpenses, totalTranspo } =
    computeCrop(crop);

  useEffect(() => {
    console.log("expenses changed");
    setCrop(() => {
      return createCrop({ expenses: state.expenses, bayads: state.bayads });
    });
  }, [state.expenses, state.bayads]);
  return (
    <Theme>
      <div className={`p-4`}>
        <ExpenseForm
          onSubmit={onSubmitExpense}
        />
        <BayadForm
          onSubmit={onSubmitBayad}
        />

        <div className={`py-4`}>
          <hr></hr>
        </div>

        <div>
          <h1 className={`text-xl`}>Expenses</h1>
          {state.expenses.length <= 0 ? <p>So much empty.</p> : <GridTable
            columns={exColumns}
            columnsMeta={{ numbers: ["qty", "unitPrice", "totalPrice"] }}
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
        </div>

        <div className={`py-4`}>
          <hr></hr>
        </div>

        <div>
          <h1 className={`text-xl`}>Bayads</h1>
          {state.bayads.length <= 0 ? <p>So much empty.</p> : <GridTable
            columns={bayColumns}
            columnsMeta={{ numbers: ["qty", "transpo", "comboy"] }}
            data={state.bayads.map((e, i) => {
              return {
                id: "",
                date: `${e.date.yyyy} ${e.date.mm} ${e.date.dd}`,
                bayad: `${e.bayad.value}`,
                qty: `${e.qty.value}`,
                uom: `${e.qty.uom}`,
                transpo: `${e.transpo.value}`,
                comboy: `${e.comboy.value}`,
                currency: `${e.bayad.curr}`,
              };
            })}
          >
          </GridTable>}
        </div>

        <div className={`py-4`}>
          <hr></hr>
        </div>

        <h1 className={`text-xl`}>Totals</h1>
        <div>
          {totalExpenses.map(
            (curr, i) => <Curr key={i} label="(-) expenses" curr={curr} />,
          )}
          {totalBayads.map(
            (curr, i) => <Curr key={i} label="(+) bayad" curr={curr} />,
          )}
          {totalTranspo.map(
            (curr, i) => <Curr key={i} label="(-) transpo" curr={curr} />,
          )}
          {totalComboy.map(
            (curr, i) => <Curr key={i} label="(-) comboy" curr={curr} />,
          )}
          <div className={`py-1`}>
            <hr></hr>
          </div>
          {overall.map(
            (curr, i) =>
              <Curr
                key={i}
                label="Grand Total"
                curr={curr}
                color={`${curr.value < 0 ? "red" : "green"}`}
              />,
          )}
        </div>
      </div>
    </Theme>
  );
}

function Curr(props) {
  const { curr, label, color } = props;
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  const formattedValue = numberWithCommas(curr.value.toFixed(2));
  return <div className="flex flex-wrap">
    <div className="w-32">{`${label}`}{" "}</div>
    <div className="w-80">
      <p style={{ color }}>
        {formattedValue} {`${curr.curr}`}
      </p>
    </div>
  </div>;
}
