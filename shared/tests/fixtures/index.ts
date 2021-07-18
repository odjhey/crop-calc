const expensesText = await Deno.readTextFile(
  "./tests/fixtures/expenses-seed1.csv",
);

// TODO: could be improved to support escaped, works for now
const expenses = expensesText.split("\n").map((line) => {
  return line.split(",").map((txt) => txt.trim());
})
  .map((
    [date, qty, uom, description, unitPrice, curr],
  ) => ({
    date,
    qty,
    uom,
    description,
    unitPrice,
    curr,
  }));

export { expenses };
