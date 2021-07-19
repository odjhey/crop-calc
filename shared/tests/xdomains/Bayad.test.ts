import { assertEquals } from "../../dev_deps.ts";
import { Bayad } from "../../src/xdomains/types.ts";
import { addBayad, createBayad } from "../../src/xdomains/Bayad.ts";

Deno.test("add Bayad to empty", () => {
  const givenBayad: Bayad = createBayad({
    date: "20210101",
    qty: 3102,
    uom: "KG",
    bayad: 103600,
    curr: "PHP",
    transpo: 5580,
    comboy: 0,
  });
  const bayads = addBayad(givenBayad, []);
  assertEquals([givenBayad], bayads);
});

Deno.test("add Bayad to many", () => {
  const givenBayad: Bayad = createBayad({
    date: "20210101",
    qty: 12,
    uom: "PC",
    bayad: 150319,
    curr: "PHP",
    transpo: 5403,
    comboy: 0,
  });
  const manyBayads = [
    createBayad({
      date: "20210101",
      qty: 12,
      uom: "PC",
      bayad: 150319,
      curr: "PHP",
      transpo: 5403,
      comboy: 0,
    }),
  ];
  const bayads = addBayad(givenBayad, manyBayads);
  assertEquals(bayads, [...manyBayads, givenBayad]);
  assertEquals(bayads.length, 2);
});
