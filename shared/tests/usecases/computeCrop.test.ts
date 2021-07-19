import { assertEquals } from "../../dev_deps.ts";
import * as Fixtures from "../fixtures/index.ts";
import { createExpense } from "../../src/xdomains/Expense.ts";
import { createBayad } from "../../src/xdomains/Bayad.ts";
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

const bayads = Fixtures.bayads.map((r) => {
  const { date, bayad, qty, uom, comboy, transpo, curr } = r;
  return createBayad({
    date,
    qty: parseFloat(qty),
    uom,
    bayad: parseFloat(bayad),
    comboy: parseFloat(comboy),
    transpo: parseFloat(transpo),
    curr,
  });
});

Deno.test("compute crop", () => {
  const givenExpenses = expenses;
  const givenBayads = bayads;
  const crop = createCrop({ expenses: givenExpenses, bayads: givenBayads });
  const result = computeCrop(crop);
  // 26370.00
  assertEquals(result.totalExpenses["PHP"].value, 26370);
  assertEquals(result.totalBayads["PHP"].value, 467167);
});
