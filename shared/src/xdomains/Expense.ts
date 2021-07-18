import { Expense, Expenses } from "./types.ts";
import Types from "./types.ts";

function createExpense(
  { date, qty, uom, description, totalPrice, curr }: {
    date: string;
    qty: number;
    uom: string;
    description: string;
    totalPrice: number;
    curr: string;
  },
): Expense;
function createExpense(
  { date, qty, uom, description, unitPrice, curr }: {
    date: string;
    qty: number;
    uom: string;
    description: string;
    unitPrice: number;
    curr: string;
  },
): Expense;

function createExpense(
  { date, description, qty, uom, unitPrice, totalPrice, curr }: {
    date: string;
    qty: number;
    uom: string;
    description: string;
    unitPrice?: number;
    totalPrice?: number;
    curr: string;
  },
) {
  const common = {
    date: new Types.Date(date),
    qty: new Types.Qty(qty, uom),
    description,
  };

  if (unitPrice) {
    return {
      ...common,
      unitPrice: new Types.Curr(unitPrice, curr),
      totalPrice: new Types.Curr(unitPrice * qty, curr),
    };
  }

  if (totalPrice) {
    return {
      ...common,
      unitPrice: new Types.Curr(qty === 0 ? 0 : totalPrice / qty, curr),
      totalPrice: new Types.Curr(totalPrice, curr),
    };
  }
}

type AddExpense = (expense: Expense, expenses: Expenses) => Expenses;
const addExpense: AddExpense = (expense, expenses) => {
  return [...expenses, expense];
};

export { addExpense, createExpense };
