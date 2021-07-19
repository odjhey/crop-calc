const expensesText = await Deno.readTextFile(
  "./tests/fixtures/expenses-seed1.csv"
);

const bayadsText = await Deno.readTextFile("./tests/fixtures/bayads-seed1.csv");

// TODO: could be improved to support escaped, works for now
const expenses = expensesText
  .split("\n")
  .map((line) => {
    return line.split(",").map((txt) => txt.trim());
  })
  .map(([date, qty, uom, description, unitPrice, curr]) => ({
    date,
    qty,
    uom,
    description,
    unitPrice,
    curr,
  }));

// TODO: could be improved to support escaped, works for now
const bayads = bayadsText
  .split("\n")
  .map((line) => {
    return line.split(",").map((txt) => txt.trim());
  })
  .map(([date, bayad, qty, uom, transpo, comboy, curr]) => ({
    date,
    bayad,
    qty,
    uom,
    transpo,
    comboy,
    curr,
  }));

export { expenses, bayads };
