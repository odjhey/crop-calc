type ExpenseInput = {};
type BayadInput = {};
type ExpenseOutput = {};
type BayadOutput = {};
type CropInput = {
  name: string;
  expenses: ExpenseInput[];
  bayads: BayadInput[];
};
type CropOutput = {
  name: string;
  expenses: ExpenseInput[];
  bayads: BayadInput[];
};

type Api = {
  createCrop: (input: CropInput) => CropOutput;
  createExpense: (input: ExpenseInput) => ExpenseOutput;
  createBayad: (input: BayadInput) => BayadOutput;
  addExpense: (input: ExpenseInput, ) => 
  addBayad: () => void
  computeCrop: () => 
};
