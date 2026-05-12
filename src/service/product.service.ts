import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "./src/db/db.json");

export const readProducts = () => {
  const products = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(products);
};
