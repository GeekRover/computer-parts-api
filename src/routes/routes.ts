import type { IncomingMessage, ServerResponse } from "http";
import { productController } from "../controller/products.controller";


export const routerController = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  if (url === "/" && method === "GET") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Welcome to Root Dir");
  } else if (url?.startsWith("/products")) {
    productController(req, res);
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Dir not found");
  }
};
