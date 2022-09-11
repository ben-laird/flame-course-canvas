import anyTest, { TestFn } from "ava";
import { grabCanvasData } from ".";

const test = anyTest as TestFn;

test("Grabbing Canvas Data", async (t) => {
  const dataFromGrab = await grabCanvasData();

  const assertion = dataFromGrab;

  t.assert(assertion, "data from grab did not match hardcoded data!");
});
