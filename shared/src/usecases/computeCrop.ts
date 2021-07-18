import Types, { Crop } from "../xdomains/types.ts";
import { sum } from "../xdomains/Operations.ts";

function computeCrop(
  crop: Crop,
): { totalExpenses: { [key: string]: InstanceType<typeof Types.Curr> } };

function computeCrop(
  crop: Crop,
): { totalExpenses: { [key: string]: InstanceType<typeof Types.Curr> } } {
  const totalExpenses = sum(crop.expenses.map((expense) => expense.totalPrice));

  return { totalExpenses };
}

export { computeCrop };
