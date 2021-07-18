import { assertEquals } from "../../dev_deps.ts";
import * as Fixtures from "../fixtures/index.ts";
import { createExpense } from "../../src/xdomains/Expense.ts";
import { createCrop } from "../../src/xdomains/Crop.ts";
import { computeCrop } from "../../src/usecases/computeCrop.ts";

const expenses = Fixtures.expenses.map((exRaw) => {
  const { date, description, qty, uom, unitPrice, curr } = exRaw;
  return createExpense({
    date,
    description,
    qty: parseFloat(qty),
    uom,
    unitPrice: parseFloat(unitPrice),
    curr,
  });
});
Deno.test("compute crop", () => {
  const givenExpenses = expenses;
  const crop = createCrop({ expenses: givenExpenses, bayads: [] });
  const result = computeCrop(crop);
  // 26370.00
  assertEquals(result.totalExpenses["PHP"].value, 26370);
});
