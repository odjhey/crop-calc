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

export { expensesColumns };
