// Value Object
class Qty {
  value: number;
  uom: string;
  constructor(value: number, uom: string) {
    this.value = value;
    this.uom = uom;
    Object.freeze(this);
  }
}

class Curr {
  value: number;
  curr: string;
  constructor(value: number, curr: string) {
    this.value = value;
    this.curr = curr;
    Object.freeze(this);
  }
}

class Date {
  yyyy: string;
  dd: string;
  mm: string;
  constructor(yyyymmdd: string) {
    this.yyyy = yyyymmdd.substring(0, 4);
    this.dd = yyyymmdd.substring(4, 6);
    this.mm = yyyymmdd.substring(6, 8);
    Object.freeze(this);
  }
}

// Entities
type Expense = Readonly<{
  date: Date;
  qty: Qty;
  description: string;
  unitPrice: Curr;
  totalPrice: Curr;
}>;

type Expenses = readonly Expense[];

type Bayad = Readonly<{
  date: Date;
  bayad: Curr;
  qty: Qty;
  transpo: Curr;
  comboy: Curr;
}>;
type Bayads = readonly Bayad[];

type Crop = Readonly<{
  expenses: Expenses;
  bayads: Bayads;
}>;

export type { Bayad, Bayads, Crop, Expense, Expenses };
export default { Date, Curr, Qty };
