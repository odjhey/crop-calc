import { Bayad, Bayads } from "./types.ts";
import Types from "./types.ts";

function createBayad({
  date,
  qty,
  uom,
  bayad,
  transpo,
  comboy,
  curr,
}: {
  date: string;
  qty: number;
  uom: string;
  bayad: number;
  transpo: number;
  comboy: number;
  curr: string;
}): Bayad;

function createBayad({
  date,
  qty,
  uom,
  bayad,
  transpo,
  comboy,
  curr,
}: {
  date: string;
  qty: number;
  uom: string;
  bayad: number;
  transpo: number;
  comboy: number;
  curr: string;
}) {
  const common = {
    date: new Types.Date(date),
    qty: new Types.Qty(qty, uom),
    bayad: new Types.Curr(bayad, curr),
    transpo: new Types.Curr(transpo, curr),
    comboy: new Types.Curr(comboy, curr),
  };

  return {
    ...common,
  };
}

type AddBayad = (bayad: Bayad, bayads: Bayads) => Bayads;
const addBayad: AddBayad = (bayad, bayads) => {
  return [...bayads, bayad];
};

export { addBayad, createBayad };
