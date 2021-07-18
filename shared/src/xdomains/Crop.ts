import { Bayads, Crop, Expenses } from "./types.ts";

function createCrop(
  { expenses, bayads }: { expenses: Expenses; bayads: Bayads },
): Crop;
function createCrop(
  { expenses, bayads }: { expenses: Expenses; bayads: Bayads },
) {
  return { expenses, bayads };
}

export { createCrop };
