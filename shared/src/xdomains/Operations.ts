import Types from "./types.ts";

function sum(currs: readonly InstanceType<typeof Types.Curr>[]) {
  const total = currs.reduce<{
    [key: string]: InstanceType<typeof Types.Curr>;
  }>((total, item) => {
    if (!total[item.curr]) {
      total[item.curr] = new Types.Curr(0, item.curr);
    }
    total[item.curr] = new Types.Curr(
      total[item.curr].value + item.value,
      item.curr
    );
    return total;
  }, {});
  return total;
}

export { sum };
