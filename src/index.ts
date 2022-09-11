import { CanvasSchema } from "./mock";
import gqlQuery, { query } from "./gqlQuery";

export const grabCanvasData = async () =>
  await gqlQuery.request<CanvasSchema>(query);

grabCanvasData().then((m) => console.log(m));
