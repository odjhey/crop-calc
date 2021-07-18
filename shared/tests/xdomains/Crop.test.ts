import { assertEquals } from "../../dev_deps.ts";
import { createCrop } from "../../src/xdomains/Crop.ts";
import { createExpense } from "../../src/xdomains/Expense.ts";

Deno.test("create Crop", () => {
  const givenExpenses = [createExpense({
    date: "20200101",
    curr: "PHP",
    description: "",
    qty: 2,
    totalPrice: 20,
    uom: "PHP",
  })];
  const crop = createCrop({
    expenses: givenExpenses,
    bayads: [],
  });
  assertEquals(crop.expenses.length, 1);
  assertEquals(crop.bayads.length, 0);
});
