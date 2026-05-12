import type { IncomingMessage, ServerResponse } from "http";
import { readProducts } from "../service/product.service";

export const productHandler = (req: IncomingMessage, res: ServerResponse) => {
  const products = readProducts();
  res.writeHead(200, { "content-type": "application/json" });
  res.end(
    JSON.stringify({
      message: "here are the products",
      data: products,
    }),
  );
};
