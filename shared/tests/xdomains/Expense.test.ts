import { assertEquals } from "../../dev_deps.ts";
import { Expense } from "../../src/xdomains/types.ts";
import { addExpense, createExpense } from "../../src/xdomains/Expense.ts";

Deno.test("add Expense to empty", () => {
  const givenExpense: Expense = createExpense(
    {
      date: "20210101",
      description: "",
      qty: 12,
      uom: "PC",
      unitPrice: 24,
      curr: "PHP",
    },
  );
  const expenses = addExpense(givenExpense, []);
  assertEquals([givenExpense], expenses);
});

Deno.test("add Expense to many", () => {
  const givenExpense: Expense = createExpense(
    {
      date: "20210101",
      description: "luckyshot",
      qty: 12,
      uom: "PC",
      unitPrice: 24,
      curr: "PHP",
    },
  );
  const manyExpenses = [createExpense({
    date: "20210101",
    description: "",
    qty: 12,
    uom: "PC",
    unitPrice: 24,
    curr: "PHP",
  })];
  const expenses = addExpense(givenExpense, manyExpenses);
  console.log(expenses);
  assertEquals(expenses, [...manyExpenses, givenExpense]);
  assertEquals(expenses.length, 2);
});
