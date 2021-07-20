import Types, { Crop } from "../xdomains/types.ts";
import { sum } from "../xdomains/Operations.ts";

type CropSubTotals = {
  totalExpenses: InstanceType<typeof Types.Curr>[];
  totalBayads: InstanceType<typeof Types.Curr>[];
  totalTranspo: InstanceType<typeof Types.Curr>[];
  totalComboy: InstanceType<typeof Types.Curr>[];
  overall: InstanceType<typeof Types.Curr>[];
};

function computeCrop(crop: Crop): CropSubTotals;

function computeCrop(crop: Crop): CropSubTotals {
  const totalExpenses = sum(crop.expenses.map((expense) => expense.totalPrice));
  const totalBayads = sum(crop.bayads.map((bayad) => bayad.bayad));
  const totalTranspo = sum(crop.bayads.map((bayad) => bayad.transpo));
  const totalComboy = sum(crop.bayads.map((bayad) => bayad.comboy));

  const currs = {
    totalExpenses: Object.values(totalExpenses),
    totalBayads: Object.values(totalBayads),
    totalTranspo: Object.values(totalTranspo),
    totalComboy: Object.values(totalComboy),
  };

  const overall = sum([
    ...currs.totalExpenses.map((c) => new Types.Curr(c.value * -1, c.curr)),
    ...currs.totalTranspo.map((c) => new Types.Curr(c.value * -1, c.curr)),
    ...currs.totalComboy.map((c) => new Types.Curr(c.value * -1, c.curr)),
    ...currs.totalBayads.map((c) => new Types.Curr(c.value * 1, c.curr)),
  ]);

  return {
    ...currs,
    overall: Object.values(overall),
  };
}

export { computeCrop };
