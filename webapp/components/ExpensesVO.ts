const expensesColumns = [
  {
    Header: "ID",
    accessor: "id", // accessor is the "key" in the data
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Item Description",
    accessor: "description",
  },
  {
    Header: "Quantity",
    accessor: "qty",
  },
  {
    Header: "Unit",
    accessor: "uom",
  },
  {
    Header: "Unit Price",
    accessor: "unitPrice",
  },
  {
    Header: "Total Price",
    accessor: "totalPrice",
  },
  {
    Header: "Currency",
    accessor: "currency",
  },
];

const bayadsColumns = [
  {
    Header: "ID",
    accessor: "id", // accessor is the "key" in the data
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Bayad",
    accessor: "bayad",
  },
  {
    Header: "Quantity",
    accessor: "qty",
  },
  {
    Header: "Unit",
    accessor: "uom",
  },
  {
    Header: "Transpo",
    accessor: "transpo",
  },
  {
    Header: "Comboy",
    accessor: "comboy",
  },
  {
    Header: "Currency",
    accessor: "currency",
  },
];

export { bayadsColumns, expensesColumns };
