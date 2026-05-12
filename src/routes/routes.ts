import type { IncomingMessage, ServerResponse } from "http";
import { productHandler } from "../controller/products.controller";
import { readProducts } from "../service/product.service";

export const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "This is root route" }));
  }
  //get all products
  else if (url?.startsWith("/product") && method === "GET") {
    productHandler(req, res);
    readProducts();
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "error 404 requested route not found" }));
  }
};
