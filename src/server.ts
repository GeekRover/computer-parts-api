import { createServer, IncomingMessage, Server } from "http";
import { routeHandler } from "./routes/routes";

const server: Server = createServer((req: IncomingMessage, res) => {
  //   console.log(req.url, req.method);
  routeHandler(req, res);
});

server.listen(5000, () => {
  console.log("server is running at 5000");
});
