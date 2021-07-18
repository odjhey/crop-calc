import React, { useEffect, useState } from "react";
import { addExpense, computeCrop, createCrop, createExpense } from "xcrop";

export default function Page2() {
  const [state, setState] = useState({ expenses: [] });
  const [input, setInput] = useState({
    description: "",
    qty: 0,
    price: 0,
    curr: "",
  });
  const [crop, setCrop] = useState(createCrop({ expenses: [], bayads: [] }));
  useEffect(() => {
    console.log("expenses changed");
    setCrop(() => {
      return createCrop({ expenses: state.expenses, bayads: [] });
    });
  }, [state.expenses]);
  return (<div>
    <h1>Hey</h1>
    <table>
      <thead>
      <tr>
        <th>Description</th>
        <th>Qty</th>
        <th>Unit Price</th>
        <th>Currency</th>
      </tr>
</thead>
<tbody>
      <tr>
        <td>
          <input
            id="desc"
            type="text"
            onChange={(e) => {
              setInput(() => {
                return { ...input, description: e.target.value };
              });
            }}
          />
        </td>
        <td>
          <input
            type="number"
            onChange={(e) => {
              setInput(() => {
                return { ...input, qty: e.target.value };
              });
            }}
          />
        </td>
        <td>
          <input
            type="number"
            onChange={(e) => {
              setInput(() => {
                return { ...input, price: e.target.value };
              });
            }}
          />
        </td>
        <td>
          <select
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
          </select>
        </td>
        <td>
          <button
            type="button"
            onClick={() => {
              const expense = createExpense({
                date: "20210101",
                description: input.description,
                qty: input.qty,
                unitPrice: input.price,
                uom: "PC",
                curr: input.curr || "PHP",
                totalPrice: 0,
              });
              setState((prev) => ({
                ...state,
                expenses: addExpense(expense, prev.expenses),
              }));
            }}
          >
            go
          </button>
        </td>
      </tr>
</tbody>
    </table>
    <h2>Items</h2>
    <div>
      {state.expenses.map((e, i) => {
        return <div key={i}>
          <pre>
            {JSON.stringify(e)}
          </pre>
        </div>;
      })}
    </div>
    <h2>Totals</h2>
    <div>
      <pre>
        {JSON.stringify(computeCrop(crop), null, 2)}
      </pre>
    </div>
  </div>);
}
