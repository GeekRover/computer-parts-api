import type { IncomingMessage, ServerResponse } from "http";

export const productHandler = (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify({ message: "This is product route" }));
};
