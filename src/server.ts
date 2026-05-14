import { createServer, IncomingMessage, Server } from "http";
import { routerController } from "./routes/routes";


const server: Server = createServer((req: IncomingMessage, res) => {
  routerController(req, res);
});

server.listen(5000, () => {
  console.log("server is running in port 5000");
});
